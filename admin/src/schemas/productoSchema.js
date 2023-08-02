import { z } from "zod";

export const altaProductoSchema = z.object({
  nombre: z.string().min(1,{message:'El nombre es requerido'}),
  descripcion: z.string().min(1, {message: 'Descripcion es requerida'}),
  precio: z.coerce.number().min(0,{message:"Debe ingresar el precio del producto"}),
  talle : z.coerce.number().int().positive({
    message: "Talle debe ser mayor que 30"
  }).min(30,{message: "el talle minimo es 30"}).max(42,{message: "El talle maximo es 45"}),
  files: z.any()  
}); 

 
