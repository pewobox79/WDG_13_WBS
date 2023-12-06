import mongoose, { connect } from "mongoose";
import 'dotenv/config'


export const mongoDBConnection = async ()=>{
    const connection = await mongoose.connect(process.env.MONGO_DB)
    console.log("connetion to mongoDB active", connection.connections)
    return connection
}