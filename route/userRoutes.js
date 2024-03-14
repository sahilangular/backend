import express from "express";
import {
  createUser,
  getAllInstructor,
  loginUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/new", createUser);
router.post("/login", loginUser);
router.get("/all", getAllInstructor);

export default router;
