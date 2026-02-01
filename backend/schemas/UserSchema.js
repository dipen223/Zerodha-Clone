const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,"your email address is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true,"your username is required"],
        unique:true,
    },
    password:{
        type:String,
         required:[true,"your password is required"],
    }
});

UserSchema.pre("save", async function(){
    this.password =  await bcrypt.hash(this.password,12);
});



module.exports = {UserSchema}