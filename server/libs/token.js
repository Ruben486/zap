const jwt = require('jsonwebtoken');

const crearToken= (payload) => {
  if (process.env.SECRET_KEY) {
    const token = jwt.sign(payload,process.env.SECRET_KEY,{ expiresIn: "24h" })
    return token
}};

module.exports = {crearToken};

