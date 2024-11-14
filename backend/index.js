import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/user.routes.js"

const app = express();
app.use(bodyParser.json());
dotenv.config();
// console.log(process.env.MONGO_URI);
const port = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;
const connecttodb = async () => {
    try{
        const connectioninstance = await mongoose.connect(mongo_uri);
        console.log(`Successfully connected to database ${connectioninstance.connection.name}`);
    }
    catch(error){
      console.log("Error while connecting to the database",error.message);
      process.exit(1);
    }
}

connecttodb();

app.use("/api/v1/user",route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})