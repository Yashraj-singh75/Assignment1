const jwt = require ("jsonwebtoken");
const registerUser =  async (req, res) => 
  {  
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "All fields are required" });
  }
  try {
    const registerSchema = joi.object({
      name: joi.string().min(2).max(30).required(),
      email: joi.string().min(12).max(30).email().required(),
      password: joi.string().min(8).max(200).required(),
    });
    const { error } = registerSchema.validate({ name, email, password });

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    let user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist with this email" });
    }
    let hashPassword = await bcrypt.hash(password, 10);

    user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    return res
      .status(201)
      .json({ message: "User successfully registered", user });
  } 
  catch (error) {
    return res.status(500).json({ message: "can't registered User", error });
  }
} ;