const { number } = require("joi");
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
        required: true,
    },

    type: {
    type: String,
    enum: ['home','office','billing','shipping'],
    default: true,
    },

    city: {
    type: String, 
    required: true, 
    },

    state: {
    type: String, 
    required: true, 
    },

    country: {
    type: String, 
    required: true, 
    },

    pincode: {
    type: number, 
    maxlength: 6,
    required: true, 
    } 
    
});

const authModel = mongoose.model("Address", addressSchema);
module.exports = addressSchema;