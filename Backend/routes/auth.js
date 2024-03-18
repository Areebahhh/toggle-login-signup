import express from "express";
import { studentregister, recruiterregister, login } from "../controllers/auth.js";

const router = express.Router()

 router.post("/login", login)
router.post("/studentregister", studentregister)
router.post("/recruiterregister", recruiterregister)


export default router