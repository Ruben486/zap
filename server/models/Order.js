const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    productos: [
      {
        productId: { type:String},
        quantity: {type: Number, default: 1}
      }
    ],
    total: { type: Number, required: true },
    nya: {type: String, required: true},
    direccion: { type: String, required: true },
    correo: {type: String, required: true },
    status: { type: String, default: "P" },
    descripcion: {tpye: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);

