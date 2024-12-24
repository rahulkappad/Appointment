import doctorModel from "../Models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../Models/appointmentModel.js"

const changeAvailability = async (req,res) => {
    try {
        
        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
        res.json({success:true,message:'Availability Changed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

    const doctorList = async (req,res) => {
        try {
            
            const doctors = await doctorModel.find({}).select(['-password','-email'])
            res.json({success:true,doctors})

        } catch (error) {
            console.log(error)
        res.json({success:false,message:error.message})
        }
    }

    //api for dr login

const loginDoctor = async (req,res) => {
    try {
        const {email,password} =req.body
        const doctor = await doctorModel.findOne({email})

        if (!doctor) {
            return res.json({success:false,message:"Invalid Credential"})
        }
        const isMatch = await bcrypt.compare(password,doctor.password)
        if (isMatch) {
            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        } else {
            res.json({success:false,message:"Invalid Credential"})
        }       
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// api for dr panel appointments

const appointmentDoctor = async (req,res) =>{
    try {
        const {docId} = req.body
        const appointments = await  appointmentModel.find({docId})

        res.json({success:true,appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to mark as completed

const appointmentComplete = async (req,res) => {
    try {
        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
            return res.json({success:true,message:"Appointment Completed"})
        } else {
            return res.json({success:false,message:"Mark Fail"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to cancel appointment

const appointmentCancel = async (req,res) => {
    try {
        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
            return res.json({success:true,message:"Appointment cancelled"})
        } else {
            return res.json({success:false,message:"Cancellation Failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// api to get dashboard data for dr panel

const doctorDashboard = async (req,res) => {
    try {
        const {docId} =req.body

        const appointments = await appointmentModel.find({docId})

        let earnings = 0

        appointments.map((item)=>{
            if (item.isCompleted || item.payment ) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item)=>{
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)

            }
        })

        let cancel = 0

        appointments.map((item)=>{
            if (item.cancelled) {
                cancel++
            }
        })

    const dashData = {
        earnings,
        appointments:appointments.length,
        patients: patients.length,
        latest: appointments.reverse().splice(0,5),
        cancelled: cancel
    }
        res.json({success:true,dashData})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api to get dr profile

const doctorProfile = async (req,res) => {
    try {
        const {docId} = req.body
        const profileData = await doctorModel.findById(docId).select('-password')

        res.json({success:true,profileData})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api to update dr profile

const updateDoctorProfile = async (req,res) =>{
    try {
        const {docId, fee, address, available} = req.body

        await doctorModel.findByIdAndUpdate(docId,{fee,address,available})

        res.json({success:true,message:"Profile Updated"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
} 
export {changeAvailability,doctorList,
    loginDoctor,appointmentDoctor,
    appointmentComplete,appointmentCancel,
    doctorDashboard,
    doctorProfile,updateDoctorProfile}