import axios from "axios";
import { API_URL } from "../config/server.js";

const productosAPI = axios.create({
  baseURL:  API_URL
});

export const getProductos = async () => {
    const respuesta = await productosAPI.get('/productos')
    return respuesta
};

export const getProducto = async (id) => {
  const resultado = await productosAPI.get('/productos/'+id)

  return resultado;
};

export const listaProductos = async (pagina=1) => {
  const productos = await productosAPI.get('/productos/paginacion?page='+ pagina);
  return productos;
};

export const altaProducto = async (producto) => {
  const res = await productosAPI.post("/productos",producto,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return res
};

export const deleteProducto = async (id) => {
  await productosAPI.delete(`/productos/${id}`)
};

export const actualizarProducto = async (newProducto) => {
   const res = await productosAPI.put(`/productos/${newProducto.id}`,newProducto,
   {headers: {  
    "Content-Type": "multipart/form-data",
   }});
   return res
 };
  
