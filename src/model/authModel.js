const mongoose = require("mongoose");

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
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },

  role:{
    type:String,
    enum:["user", "admin", "seller"],
    required:true,
    trim : true,
    default: "user"
  },

  password: {
    type: String,
    minLength: 8,
    maxLength: 200,
    required: true,
    trim: true,
  },

},{ timestamps: true } );

// authSchema.virtual("addresses",
// {  
//   ref:"address",
//   localField: "_id",
//   foreignField:"user",
// });

// authSchema.set("toJSON", { virtuals: true });
// authSchema.set("toObject", {virtuals: true});

const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;