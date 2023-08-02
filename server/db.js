const mongoose = require("mongoose");
require('dotenv').config()
async function connectDB() {
  try {
    const db = await mongoose.connect(process.env.URI_MONGODB)  
    console.log('Conectado a BD: ',db.connection.name)

  } catch (error) {
    console.log(error)
  }
};
module.exports = connectDB;

