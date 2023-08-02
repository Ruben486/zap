const app = require("./app.js");
require('dotenv').config();
const connectDB = require("./db.js") 

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
  console.log(`server corriendo en port ${PORT}`)
})
console.log(`Environment: ${process.env.NODE_ENV}`)
app.get("/",(req,res) => {
  res.send('Inicia el e-comm de zapatillas')
})
connectDB()
