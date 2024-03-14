import instructorsModel from "../model/instructorModel.js";
import sendToken from "../utils/sendToken.js";

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ error: "You must provide name and email and password" });

  let user = await instructorsModel.find({ email: email });

  // if (user) {
  //   return res.json({
  //     success: false,
  //     message: "user already exist",
  //   });
  // }

  user = await instructorsModel.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "The account has been created successfully!",
    user,
  });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await instructorsModel.find({ email: email })
  console.log(user)

  if (!user && user.password !== password)
    return res.status(400).json({
      success: false,
      message: "invalid email and password",
    });

    sendToken(user,200,res)

};

//admin
const getAllInstructor = async (req, res, next) => {
  const users = await instructorsModel.find();

  res.status(200).json({
    users,
  });
};

export { createUser, loginUser, getAllInstructor };
