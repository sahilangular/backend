import instructorsModel from "../model/instructorModel.js";
import jwt from 'jsonwebtoken'

const isAuthenticatedUser = async(req, res, next) => {
    // const { token } = req.cookies;
    console.log(req.cookies)

    // console.log(token)
  
    // if (!token) {
    //   return next(new ErrorHander("Please Login to access this resource", 401));
    // }
  
    // const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    // req.user = await instructorsModel.findById(decodedData.id);
  
    // next();
  };

  export default isAuthenticatedUser;