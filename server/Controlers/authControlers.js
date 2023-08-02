const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {crearToken} = require("../libs/token");

// REGISTER
const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const chkUser =  await User.findOne({email: email})

    if (chkUser) {
      return res.status(400).json({message: ['El email ya existe']}) 
    } 
    // convertir el password
    const hashedPassword = await bcrypt.hash(password, 10);

    // crear el usuario
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    // guardar el nuevo usuario
    const newUser = await user.save();
   
    const token = crearToken({id: newUser._id});

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });
    
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin
    });

  } catch (error) {
    res.status(500).json({message: [error.message]});
  }
};

//LOGIN
const userLogin = async (req, res) => {
  try {
    // busqueda de usuario
    const userLogin = await User.findOne({ email: req.body.email });
    if (!userLogin) {
      return res.status(404).send("no se encontro el usuario")
    };

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      userLogin.password
    );
    if (!passwordCheck) {
      return res.status(500).send("Fallo la comparacion");
    }
    if (process.env.SECRET_KEY) {
       
        
      const token = crearToken({id: userLogin._id});
      res.cookie("token", token,{
        httpOnly: false,
        secure: true,
        sameSite: "none"
      });
      res.json({
        id: userLogin._id,
        username: userLogin.username,
        email: userLogin.email,
        isAdmin: userLogin.isAdmin,
        token
      });
      
    } else {
      return res
        .status(500)
        .send(
          "No existe la clave privada y secreta para la generacion del token."
        );
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// VERIFY TOKEN
const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token,  process.env.SECRET_KEY, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      isAdmin: userFound.isAdmin
    });
  });
};

module.exports = { userRegister, userLogin, verifyToken };
