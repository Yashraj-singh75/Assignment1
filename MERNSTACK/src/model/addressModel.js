const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
        required: true,
    },

    type: {
        type: String,
        enum: ['home', 'office', 'billing', 'shipping'],
        default: 'home',
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
        type: Number, 
        required: true, 
    } 
});

const AddressModel = mongoose.models.Address || mongoose.model("Address", addressSchema);
module.exports = AddressModel;