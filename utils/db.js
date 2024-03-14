import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect("mongodb+srv://dalvisahil86:MaT7bcQ5VP5giVy7@cluster0.htyhmze.mongodb.net/test")
    .then((res) => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;
