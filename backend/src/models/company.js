import mongoose from "mongoose"

const companySchema=mongoose.Schema({
            name:{
                        type:String,
                        required:true,
                        trim:true

            },
            website:{
                        type:String,
                        required:true,
                        trim:true
                        
            },
            logo:{
                        type:String,
            },
            industry:{
                        type:String,
                        trim:true
            },
            location:{
                        type:[String],
                        required:true,
                        default:[]
            }
})


const companyModel=mongoose.model("Company",companySchema)

export default companyModel

/**
 * Match.js

User aur job ke beech AI/rule-based matching:

Match
├── user
├── job
├── score
├── matchedSkills[]
├── missingSkills[]
├── recommendation
└── timestamps


Application
├── user
├── job
├── resume
├── status
├── appliedAt
├── applicationUrl
├── answers
└── timestamps

Status:

saved
ready_to_apply
applied
interview
rejected
offer
withdrawn
 */