const express = require('express');
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { default: helmet } = require('helmet');
const responseTime = require("response-time");
require('dotenv').config();
const nodeCache = require("node-cache");
const serverCache = new nodeCache();






const app = express();

app.use(helmet());
// configuracion
app.use(morgan('dev'));
app.use(express.json());
app.use(responseTime());
  
app.use(express.json({ limit: '20kb' })); // limitar la cantiad de request de un mismo usuario

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({
  limits: { filesize: 1024*1024*50},
  useTempFiles:  true,
  tempFileDir: './upload'
}));
// app.use(bodyParser.json());


//middlewares
// cors
 app.use(cors({
  credentials: false,
  origin: "*"
})); 

/*  app.use((req,res,next) => {
 res.append('Access-Control-Allow-Origin', ['*']);
 res.append('Access-Control-Allow-Credentials', true);
 res.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
 res.append('Access-Control-Allow-Headers', 'Content-Type')
 next()
 }) */  

// ruta de todos los productos

// Routes
//app.use("/api/productos",productRoutes)
/* app.use("/api/auth",authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes) */

module.exports = {app,serverCache};