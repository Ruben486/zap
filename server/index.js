const  { app}  = require("./app.js");
const { routers} = require("./router.js")
require('dotenv').config();

routers()
const connectDB = require("./db.js") 

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
  console.log(`server corriendo en port ${PORT}`)
})
// console.log(`Environment: ${process.env.NODE_ENV}`)


connectDB()
/* "dev": "cross-env NODE_ENV=development nodemon index --ignore cliente --ignore admin", */