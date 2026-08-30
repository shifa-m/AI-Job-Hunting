import mongoose from "mongoose";

const applicationSchema=mongoose.Schema({
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
            resume:{
                        type:mongoose.Schema.Types.ObjectId,
                        required:true,
                        ref:"Resume"
            },
            status:{
                   type:String,
                   enum:[
                        "saved",
                        "ready-to-apply",
                        "applied",
                        "interview",
                        "rejected",
                        "offer",
                        "withdrawn"],
                   default:"saved"
},
appliedAt:{
            type:String,
            required:true
},
answer:[
            {
                        questions:{
                                    type:String,
                                    required:true
                        },
                        answer:{
                                    type:String,
                                    required:true
                        }
            },

],
},

{
            timestamps:true
})

const applicationModel=mongoose.model("Application",applicationSchema)

export default applicationModel