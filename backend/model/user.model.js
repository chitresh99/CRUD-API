import mongoose, { mongo } from "mongoose";

const Userschema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type :String,
        required : true
    },
    address : {
        type :String,
        required : true
    }
})

export default mongoose.model("user",Userschema)