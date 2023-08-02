const jwt = require("jsonwebtoken");

// el token le llega por un encabezado //
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // comparar los tokens
    const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
    // capturar los detalles del usuario 
    const user = decodedToken  
    //pasar el usuario
    req.user = user
    // abrir el camino del endpoint
    next();
    
  } else {
    return res.status(401).json("No esta autenticado !");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("No esta habilitado a realizar esa tarea !");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("No esta autorizado a realizar esta accion!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
