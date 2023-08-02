const cloudinary = require("cloudinary");

// configuracion

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const uploadImage  = async filePath => {
   return await cloudinary.v2.uploader.upload(filePath,{
      folder: 'products'
   })};

const removeImage = async (id) => {
  return await cloudinary.v2.uploader.destroy(id)
};

module.exports = {uploadImage, removeImage};