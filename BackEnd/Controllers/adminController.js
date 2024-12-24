import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../Models/doctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../Models/appointmentModel.js"
import userModel from "../Models/userModel.js"

//API for adding doctor
const addDoctor = async (req,res) => {
    try{
        const {name,email,password,speciality,degree,experience,about,fee,address}= req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address) {
            return res.json({success:false,message:"Missing Details!"})
        }
        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter valid email!"})
        }
        //validating password
        if (password.length < 8) {
            return res.json({success:false,message:"Please enter a strong password"})
        }
        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPasword = await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPasword,
            speciality,
            degree,
            experience,
            about,
            fee,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor =new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Doctor Added."})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

//api for admin login
const  loginAdmin = async (req,res) => {
    try {

        const {email,password} =req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        } else {
            res.json({success:false,message:"Invalid Credentials"})
        }
        
    } catch (error) 
    {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// api for all docotrs admin panel
const allDoctors = async (req,res) =>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api for all appointment

const appointmentsAdmin = async (req,res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api admin cancel appointments

const appointmentCancel = async (req, res) => {
    try {
        const {  appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        //releasing dr slots

        const { docId, slotDate, slotTime } = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: "Appointment Cancelled" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to get dashboard data

const adminDashboard = async (req,res) => {
    try {
        const doctors =await doctorModel.find({})
        const users=await userModel.find({})
        const appointments=await appointmentModel.find({})

        let cancel = 0

        appointments.map((item)=>{
            if (item.cancelled) {
                cancel++
            }
        })

        const dashData ={
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5),
            cancelled: cancel 
        }
        res.json({success:true,dashData})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {addDoctor,loginAdmin,allDoctors,appointmentsAdmin,appointmentCancel,adminDashboard}