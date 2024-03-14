import express from "express";
import dotenv from "dotenv";
import userRoutes from "./route/userRoutes.js";
import courseRoute from "./route/courseRoute.js";
import connectDb from "./utils/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

connectDb();

const app = express();

app.use(cookieParser());

app.use(cors({
  origin:'http://localhost:5173', // change this
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}));

app.use(express.json());

app.use('/',(req,res,next)=>{
  res.send('hi there')
})


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running ${process.env.PORT}`);
});
