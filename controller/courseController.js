import courseSchema from "../model/courseModel.js";
import instructorsModel from "../model/instructorModel.js";

const createCourse = async (req, res, next) => {
  const { name, description, level, image } = req.body;

  console.log(name,description.level)

  if (!name || !description || !level )
    return res.status(400).json({ message: "All fields are required" });

    const  newCourse = await courseSchema.create({
      name,
      description,
      level,
    });

  res.status(201).json({
    success: true,
    message: "course created sucessfully",
    newCourse
  });
};

const getAllCourses = async (req, res, next) => {
  const courses = await courseSchema.find({});

   res.status(201).json({
    success: true,
    courses,
  });
};

const getUserLecture=async(req,res,next)=>{
  const user = await instructorsModel.findById(req.user.id);
  if(!user){
    return res.json({
      message:'please login'
    })
  }

  const course = await courseSchema.find({})

  const lectures = course.lectures.find((item)=>{
    if(item.assign_instructor === user.id) return item
  })

  res.status(200).json({
    message: 'success',
    lectures
  })


}

const addLecturesToCourse = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)

  const { name, description, instructor_name } = req.body;

  console.log(name,description,instructor_name)

  console.log(instructor_name)

  if (!id) return res.status(400).json({ message: "course not found" });

  const course = await courseSchema.findById(id);

  if (!course)
    return res.status(400).json({
      message: "course not found",
    });

  const user = await instructorsModel.findOne({ name: instructor_name });


  course.lectures.push({
    name,
    description,
    assign_instructor: user._id,
  });

  await course.save();

  res.status(201).json({
    success: true,
    message: "lecture added successfully",
  });
};

export { createCourse, getAllCourses, addLecturesToCourse,getUserLecture };
