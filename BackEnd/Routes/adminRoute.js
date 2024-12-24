import express from 'express'
import { addDoctor,allDoctors,appointmentCancel,appointmentsAdmin,loginAdmin,adminDashboard } from '../Controllers/adminController.js'
import upload from '../Middleware/multer.js'
import authAdmin from '../Middleware/authAdmin.js'
import { changeAvailability } from '../Controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors) 
adminRouter.post('/change-availability',authAdmin,changeAvailability) 
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
adminRouter.post('/Cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter