import mongoose from "mongoose";

const lectureModel = new mongoose({
    name:{
        type:String,
        required:true,
        unique:true,
        maxLength:[20]
    },
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        maxLength:[20]
    },
    date:{
        type:Date,
        unique:true,
        required:true
    }
})

module.exports = mongoose.model( 'Lecture', lectureModel ); 
