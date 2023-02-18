const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //importing reqd modules
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@desc authenticate users
//@route post/api/users/login
// @access private

const loginUser = asyncHandler(async (req, res) => {
  const{email, password}=req.body
  const user = await User.findOne({email}) //checking user

  if(user &&(await bcrypt.compare(password ,user.password)))
  res.json({
    _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)      //passing id in  generate token


  })
  else{
    res.status(400)
    throw new Error('invalid credentials')
  }
  //adding async handeler
  res.json({ message: "login user" }); //creating fn
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; //giving body

  if (!name || !password || !email) {
    //if statement for error
    res.status(400);
    throw new Error("please add all fields");
  }
  //checking if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creating user
  const user = await User({
    name,
    email,
    password: hashedPassword,

  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)      //passing id in  generate token
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

//@desc get  users data
//@route get/api/users/me
// @access private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "user data display" }); //creating fn
});

//generating token
const generateToken= (id)=>{                      
return jwt.sign({id},process.env.JWT_SECRET,{       //using inbuilt method sign with jwt 
 expiresIn:'30d',
 })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
