const userModel = require("../model/authModel").userModel;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserService = async ( { name, email, password }) => {  

  let userExists = await userModel.findOne({ email });
    
   if (!userExists) {
   const error = new Error("Invalid email or password");
   error.status = 401;
   throw error;
  }
    let hashedPassword = await bcrypt.hash(password, 10);

    newUser = await userModel.create({
      name ,
      email ,
      password: hashedPassword 
    });   
return newUser;
};

const loginUserService = async (email, password) => {
  let user = await userModel.findOne({ email });
  if (!user) {
   const error = new Error("Invalid email or password");
   error.status = 401;
   throw error;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }
  const token = jwt.sign({ name: user.name, email: user.email }, process.env.secret, { expiresIn: "1h" });
  return { user, token }; 
};

module.exports = { registerUserService, loginUserService }; 