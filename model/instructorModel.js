import mongoose from "mongoose";

const instructorModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [20],
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "instructor",
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    lecture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "lecture",
    },
  },
  { timestamps: true }
);

const instructorsModel = mongoose.model("Instructor", instructorModel);

export default instructorsModel;
