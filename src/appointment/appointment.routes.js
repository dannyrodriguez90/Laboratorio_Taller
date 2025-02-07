import { Router } from "express";
import { getAppointmentsByUser, saveAppointment } from "./appointment.controller.js"
import { createAppointmentValidator } from "../middlewares/appointment-validators.js"
 
const router = Router()
 
router.post("/createAppointment", createAppointmentValidator, saveAppointment)
router.get("/user/:userId", getAppointmentsByUser)
 
export default router;