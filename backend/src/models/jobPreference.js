import mongoose from "mongoose";

const jobPreferenceSchema=mongoose.Schema({
            user:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"User",
                        required:true,
                        unique:true
            },
            targetRoles:{
                        type:[String],
                        required:true
            },
            location:{
                        type:[String],
                        required:true,
                        default:[]
            },
            workMode:{
                        type:[String],
                        enum:["remote","hybrid","onsite"]
            },
            experience:{
                        type:[String],
                        enum:["entry","fresher","mid","senior"],
                        default:"fresher"

            },
            jobTypes:{
                        type:[String],
                        required:true,
                        default:[]
            },
            salaryPreference:{
                        min:Number,
                        max:Number,
                        currency:{
                                    type:String,
                                    default:"INR"
                        }
            }
},{


timestamps:true,
}
)

const jobPreference=mongoose.model("JobPreference",jobPreferenceSchema)

export default jobPreference