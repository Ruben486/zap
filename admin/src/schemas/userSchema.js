import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Por favor ingrese un email valido'
  }),
  password: z.string().min(6,{
    message:'La contraseña debe poseer al menos 6 caracteres.'
  }) 
}); 

export const registerSchema = z.object({
  username: z.string({
    message: 'El nombre de usuario es requerido'
  })
  .min(3,{message: ' Username debe tener al menos 3 caracteres'}),

  email: z.string().email({
    message: 'Por favor ingrese un email valido'
  }),
  
  password: z.string().min(6,{
    message:'La contraseña debe poseer al menos 6 caracteres.'
  })
}); 

