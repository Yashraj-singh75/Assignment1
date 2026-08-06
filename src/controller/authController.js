const { registerUserService, loginUserService } = require("../service/authService");

const registerUser =  async (req, res) => 
  {  
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "All fields are required" });
  }
  try {
    const user = await registerUserService(name, email, password);
    return res.status(201).json({ message: "User successfully registered", user });
  }
  catch (err) {
    return res.status(500).json({ message: "can't registered User", err });
  }
};    

const loginUser =  async (req, res) => 
  {  
  const { email, password } = req.body;
  if ( !email || !password) {
    return res.json({ message: "All fields are required" });
  }
  try {
    const { user, token} = await loginUserService( email, password);
    res.cookie("token", token, {httpOnly: true });
    return res.status(201).json({ message: "login successfully  ", user, TaskPriorityChangeEvent });
  }
  catch (err) {
    return res.status(500).json({ message: "can't login User", err });
  }
};   

const logoutUser =  async (req, res) => { 
 try {  
  res.clearCookie("token", {httpOnly: true});
  return res.status(200).json({ message: "User logged out successfully" });
 } 
  catch (err) {
    return res.status(500).json({ message: "can't logout User", err });
  }
};   

module.exports = { registerUser, loginUser, logoutUser };