const express = require('express');
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors")
const cookieParser = require("cookie-parser")
require('dotenv').config()
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { default: helmet } = require('helmet');
const apicache = require('apicache');



const app = express()
const cache = apicache.middleware;

app.use(helmet())
// configuracion
app.use(morgan('dev'));
app.use(express.json());
 app.use(cors({
  credentials: false,
  origin: "*"
})); 
app.use(express.json({ limit: '20kb' })); // limitar la cantiad de request de un mismo usuario

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({
  limits: { filesize: 1024*1024*50},
  useTempFiles:  true,
  tempFileDir: './upload'
}));
app.use(bodyParser.json());
app.use(cache('5 minute'));

//middlewares
// cors
//  app.use((req,res,next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Credentials', true);
//   res.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
//   res.append('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// }) 

app.use((req,res,next) => {
  const cacheTime = 60 * 60 *24
  res.set({
    'cache-control': `max-age${cacheTime}`
  });
  next();
});
// Routes
app.use("/api/productos",productRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

module.exports = app;