import mongoose from "mongoose"

const jobSchema=mongoose.Schema({
            user:{
               type:mongoose.Schema.Types.ObjectId,
               ref:"User",
               required:true

            },
            title:{
                        type:[String],
                        ref:"title",
                        default:[],
                        trim:true
            },
            company:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"company",
                        required:true

            },
            description:{
                        type:String,
                        required:true

            },
            requiredSkills:{
                        type:[String],
                        default:[]

            },
            location:{
                        type:String,
                        required:true,
                        trim:true
            },
            workmode:{
                        type:[String],
                        enum:["hybrid","remote","onsite"]
            },
            experienceLevel:{
                        type:[String],
                        enum:["fresher","entry","mid","senior",]
            },
            salary:{
                        min:Number,
                        max:Number,
                        currency:{
                                    type:String,
                                    default:"INR"
                        }
            },
            source:{
                        type:String,
                        enum:["naukri","well-Found","linkedin","indeed","comapany","other"],
                        required:true
            },
            jobUrl:{
                        type:String,
                        required:true
            },
            
            
            postedAt:{
                        type:Date,
                        
            }

},
{
            timestamps:true
})

const JobModel=mongoose.model("JobModel",jobSchema)

export default JobModel