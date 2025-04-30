const { required, number } = require('joi');
const { verify } = require('jsonwebtoken');
const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:[true, "email must be unique!"],
        minLength:[8, "email must have 8 characters!"],
        lowercase:true,
        

    },
    password:{
        type:String,
        required:[true,"password must be provided!"],
        select:false,
        trim:true,

    },
    verified:{
        type:Boolean,
        default:false,

    },
    verficationCode:{
       type:String,
       select:false, 
    },
    verficationCodeValidation:{
        type:String,
        select:false,
    },
    forgotPasswordCode:{
        type:String,
        select:false,
    },
    forgotPasswordCodeValidation:{
        type:String,
        select:false,
    },
},

{
    timestamp:true
}

);
module.exports=mongoose.model("User", userSchema)