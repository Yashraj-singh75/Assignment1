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

const authSchema = mongoose.Schema({
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

const productSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
  },
  SKU: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    min: 10,
    required: true,
  },
  category: {
    type: String,
    maxLength: 200,
    required: true,
    trim: true,
  },
},{ timestamps: true });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
const authModel = mongoose.models.auth || mongoose.model("auth", authSchema);
const productModel = mongoose.models.product || mongoose.model("product", productSchema);
module.exports = { userModel, authModel, productModel };