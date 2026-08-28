import mongoose from "mongoose";

const resumeSchema=mongoose.Schema({
            user:{
                        type:mongoose.Schema.Types.ObjectId,
                        required:true,
                        ref:"User"
            },
            title:{
                        type:[String],
                        required:true,
                        trim:true
            },
            fileUrl:{
                        type:String,
                        required:true
            },
            fileName:{
                        type:String,
                        required:true,
            },
            extractText:{
                        type:String
            
            },
            extractedSkills:{
                        type:[String],
                        default:[]
            },
            tailoredFor:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"JobPreference",
                        default:null
            },
            isActive:{
                        type:Boolean,
                        default:false
            }

            
},
{
            timestamps:true
})

const Resume=mongoose.model("Resume",resumeSchema)

export default Resume