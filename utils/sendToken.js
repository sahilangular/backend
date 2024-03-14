import Jwt  from "jsonwebtoken";

const sendToken = (user, statusCode, res) => {
  const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '5d',
  });

  console.log(token)

  const options = {
    expires: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token",token,options).json({
    success: true,
    message:'Logged in successfully',
    user,
    token,
  });
};
export default sendToken;
