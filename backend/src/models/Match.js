import mongoose from "mongoose";

const matchSchema=mongoose.Schema({
            user:{
                        type:mongoose.Schema.Types.ObjectId,
                        required:true,
                        ref:"User"
            },
            job:{
                        type:mongoose.Schema.Types.ObjectId,
                        required:true,
                        ref:"Job"
            },
            score:{
                        type:Number,
                        required:true,
                        min:0,
                        max:100,
            },
            matchedSkills:{
                        type:String,
                        required:true,
                       
            },
            missingSkills:{
                        type:String,
                        trim:true
            },
            recommendation:{
                        type:String,
                        trim:true

            },


},
{
            timestamps:true
})


const matchModel=mongoose.model("Match",matchSchema)

export default matchModel