const Order = require("../models/Order");
const {
   nuevaOrden,
   updateOrden,
   deleteOrden,
   userOrders,
   allOrders,
   } = require("../Controlers/orderControlers");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREAR
router.post("/", nuevaOrden);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrden );

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrden );

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, userOrders );

// //GET ALL
router.get("/", allOrders );

module.exports = router;
