const Producto = require("../models/Producto.js");
const { uploadImage, removeImage } = require("../libs/cloudinary.js");
const fsExtra = require("fs-extra");
const { cargarImg,sacarImagen } = require("../libs/imgCloudinary.js");

// *** funciones auxiliares     *** //
const findProductoAndDeleteImg = async (id) => {
  const productoEnDB = await Producto.findById(id);
  if (productoEnDB.img.public_id) {
    await sacarImagen(productoEnDB.img.public_id)
  }
};


// *** fin funciones auxiliares *** //


// Traer todos los productos
const getProductos = async (req, res) => { 
  try {
   const productos = await Producto.find();
   // const productos = await Producto.paginate({},{limit, page});
    res.json(productos);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const getProductosPaginacion = async (req, res) => {
    const count = await Producto.countDocuments()
    const limit = parseInt(req.query?.limit,10)  || 5
    const page  = parseInt(req.query?.page,10)  || 1
  
  try {
   //const productos = await Producto.find();
   const productos = await Producto.paginate({},{limit, page, sort: {_id: -1}});  
    res.json(productos);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// nuevo producto
const createProducto = async (req, res) => {
  try {
    // subida de imagen a   cloudinary
    let img = {url: '',public_id: ''} 
    if (req.files?.image) {
      img = await cargarImg(req.files.image)
      /* const resultado = await uploadImage(req.files.image.tempFilePath)
      img = {
        url: resultado.secure_url,
        public_id: resultado.public_id
      } */
    };  
     //await fsExtra.remove(req.files.img.tempFilePath);  
    const newProducto = new Producto({
      ...req.body,
      img,
    });
    await newProducto.save();
    res.json(newProducto);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// actualizar
const updateProducto = async (req, res) => {
  if (req.body.id) {
    try {
      let img = {url: '', public_id: ''}
      if (req.files?.image) {
        await findProductoAndDeleteImg(req.body.id)
        /* const productoEditado = await Producto.findById(req.body.id);
        if (productoEditado.img.public_id) {
          await removeImage(productoEditado.img.public_id);
        } */
        
        img = await cargarImg(req.files.image);
        /* const resultado = await uploadImage(req.files.image.tempFilePath)
        img = {
          url: resultado.secure_url,
          public_id: resultado.public_id
        } */
      }  
      const producto = await Producto.findByIdAndUpdate(
         req.body.id,
         req.files?.image ? {...req.body,img} : {...req.body} ,
         { new: true }
      );
      
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.send
      .status(404)
      .json({ Message: "no se especifico el ID del producto" });
  }
};

// eliminacion // 
const deleteProducto = async (req, res) => {
  if (req.params.id) {
    try {
      const productoRemove = await Producto.findByIdAndDelete(req.params.id);
      if (!productoRemove) return res.status(404).send("not found"); 
      if (productoRemove.img.public_id) {
        // await removeImage(productoRemove.img.public_id);
         await sacarImagen(productoRemove.img.public_id)
      } 
      res.status(204).send("Poducto eliminado");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(404).json({ message: "No se especifico el ID del producto" });
  }
};

const getProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducto,
  getProductos,
  getProductosPaginacion,
  createProducto,
  deleteProducto,
  updateProducto,
};
