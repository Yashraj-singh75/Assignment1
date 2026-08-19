const { registerUserService, loginUserService, getAllUserService } = require("../service/authService");

const registerUser =  async (req, res) => 
{ 
  const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
     return res.status(400).json({
      message:"All fields are required"
    });
  }

  try 
  {
    const user = await registerUserService({
      name,
      email,
      password,
      role
    });

    return res.status(201).json({ message: "User successfully registered", user });
  }
  catch(err)
  {
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};  

const loginUser =  async (req, res) => 
{ 
  const { email, password } = req.body;
    if ( !email || !password) {
      return res.status(400).json({
      message:"All fields are required"
    });
  }

  try 
  {
    const { user, token} = await loginUserService( email, password);
    res.cookie("token", token, {httpOnly: true });
    return res.status(200).json({ message: "login successfully  ", user});
  }
  catch(err)
  {
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};   

const logoutUser =  async (req, res) => 
{  
  
 try 
 {  
  res.clearCookie("token", {httpOnly: true});
  return res.status(200).json({ message: "User logged out successfully" });
 } 
  catch (err) 
  {
    return res.status(500).json({ message: "can't logout User", err });
  }
};   

const getAllUsers =  async (req, res) => 
{ 
  try 
  {
    const allUser = await getAllUserService(); 
    return res.status(200).json({ allUser });
  }
  catch(err)
  { 
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};   

module.exports = { registerUser, getAllUsers, loginUser, logoutUser };