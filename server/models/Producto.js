const mongoose = require("mongoose");
const  mongoosePaginate = require("mongoose-paginate-v2");

const ProductoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true},
    descripcion: { type: String, required: true },
    img: { 
      url: { type: String, default: "" },
      public_id: { type: String, default: "" }
    },  
    genero: { type: String, default: 'M' },
    talle: { type: Number, required:true },
    color: { type: String, required: true,default: 'blanca' },
    precio: { type: Number, required: true },
    stock: {type: Number, required: true, default: 1},
    votos: {type: Number, default: 0},
    vistas: {type: Number, default: 0},
  },
  { timestamps: true }
);
ProductoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Producto", ProductoSchema);