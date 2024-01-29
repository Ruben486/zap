const mongoose = require("mongoose");
require('dotenv').config()
async function connectDB() {
  try {
    const db = await mongoose.connect(process.env.DB_URL,
      {
        // these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );  
    console.log('Conectado a MongoDB Atlas: ',db.connection.name)

  } catch (error) {
    console.log(error)
  }
};
module.exports = connectDB;

