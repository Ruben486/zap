const Order = require("../models/Order.js");

const nuevaOrden = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);

    } catch (err) {
      res.status(500).json(err);
    }
  };

const updateOrden = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrden = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const allOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      res.send(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };


module.exports = {
   nuevaOrden,
   updateOrden,
   deleteOrden,
   userOrders,
   allOrders
  };
  