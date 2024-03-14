import express from "express";
import { addLecturesToCourse, createCourse, getAllCourses, getUserLecture } from "../controller/courseController.js";
import isAuthenticatedUser from "../middleware/auth.js";

const router = express.Router();

router.post("/new", createCourse);
router.get("/all", getAllCourses);
router.post("/addlecture/:id", addLecturesToCourse);
router.get('/userLectures',isAuthenticatedUser,getUserLecture)

export default router;
