const AuthModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerService = async (data) => { 
  const { name, email, password } = data;
   
    const userExists = await AuthModel.findOne({ email });
    if (userExists) 
      {
      return res.status(400).json({
        message: error.details[0].message 
    })
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =  { 
      name: name ,
      email: email ,
      password: hashedPassword 
    }   
await AuthModel.create(newUser);
};

module.exports = { registerService } ;