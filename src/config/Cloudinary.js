const cloudinary = require('cloudinary');
require("dotenv").config();

cloudinary.config({
    cloud_name : process.env.Cloudinary_Name,
    api_key : process.env.Cloudinary_Api_Key,
    api_secret : process.env.CLoudinary_Api_Secret 
});

module.exports = cloudinary;