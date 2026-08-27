import mongoose from "mongoose"

const connectDB=async()=>{

            try{

                        await mongoose.connect(process.env.MONGO_URI)

                        console.log("Database has been connected successfully")



            }catch(err){

                        console.log("Databse Error",err)

            }
}