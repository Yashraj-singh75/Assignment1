const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://singhyash12356_db_user:mongodb@cluster0.nhl9mh2.mongodb.net/db?appName=Cluster0");
    console.log("MongoDB Database Connected");
  } 
  catch (err) 
  {
    console.log(err);
  }
};

module.exports = connectDB;