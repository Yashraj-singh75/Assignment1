const { required } = require('joi');
const mongoose = require('mongoose');

const refreshSchema = new mongoose.Schema ({
    refrshToken:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"auth"
    },
},{timestamps:true}) 