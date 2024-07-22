import mongoose from 'mongoose';
const Schema = mongoose.Schema


const usersSchem = new Schema({

    name:{
        type: String
    },
    surname:{
        type:String
    },
    mail:{
        type:String
    },
    password:{
        type:String
    }



})


const User = mongoose.model("User", usersSchem)
export default User;