const cloudinary = require("cloudinary");
const { uploadImage, removeImage } = require("../libs/cloudinary.js");

const cargarImg = async (imagen) => {
   const resultado = await uploadImage(imagen.tempFilePath)
   img = {
    url: resultado.secure_url,
    public_id: resultado.public_id
  };
  return img
}; 

const sacarImagen = async (urlImagen) => {
  if (urlImagen) {
    await removeImage(urlImagen);
  }
};

module.exports = {cargarImg,sacarImagen}