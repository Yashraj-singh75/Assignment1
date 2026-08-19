const authModel = require("../model/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserService = async ({ 
  name, 
  email, 
  password,
  role
 }) => {  

 const userExists = await authModel.findOne({ email });

  if (userExists) {
    const error = new Error("User already exists with this email");
    error.status = 409;
    throw error;
  }

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await authModel.create({
      name ,
      email ,
      password: hashedPassword ,
      role: role || "user"
    });   
  return newUser;
};

const loginUserService = async (email, password) => 
{ 
  const user = await authModel.findOne({ email });

  if (!user) 
  {
   const error = new Error("Invalid email or password");
   error.status = 401;
   throw error;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) 
  {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }
  
  const token = jwt.sign({ id: user._id, name: user.name, email: user.email, role: user.role }, process.env.secret, { expiresIn: "1h" });
  return { user, token }; 
};

module.exports = { registerUserService, loginUserService }; 