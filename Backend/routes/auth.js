import express from "express";
import { studentregister } from "../controllers/auth.js";

const router = express.Router()

//  router.post("/login", login)
router.post("/studentregister", studentregister)
//  router.post("/logout", logout)


export default router