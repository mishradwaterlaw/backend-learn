import mongoose from "mongoose";
import { DB_NAME } from "./db/constants.js";
//something happened here i cant run npm run dev


const connectDB= async()=>{
    try{
        const connectionInstance= await mongoose.conneect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST:${connectionInstance.connection.host}`)
    }catch(error){
    console.log("MONGODB connection error", ErrorEvent);
    process.exit(1)

    }

}

export default connectDB