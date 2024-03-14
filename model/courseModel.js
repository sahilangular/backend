import mongoose from "mongoose";

const courseModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [20],
    },
    description: {
      type: String,
      required: [true, "Please provide your description"],
    },
    level: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    //   required: true,
    // },
    lectures: [
      {
        name: {
          type: String,
          required: true,
          maxlength: [20],
        },
        description: {
          type: String,
          required: true,
        },
        assign_instructor: {
          type: mongoose.Schema.Types.ObjectId,
          required:true,
          ref: "Instructors",
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const courseSchema = mongoose.model("course", courseModel);

export default courseSchema;
