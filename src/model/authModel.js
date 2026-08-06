const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    minLength: 11,
    maxLength: 30,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 200,
    required: true,
    trim: true,
  },
},{ timestamps: true } );

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;