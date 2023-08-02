//import axios from '../config/axios';
import axios from "axios" 
const urlBase =  import.meta.env.VITE_SERVER_BACKEND 

 export const registerRequest= async (user) => {
  const configuracion = {
    method: "POST",
    url: urlBase + "/register", 
    data: user
  };
  axios(configuracion).then(result => {return result} )
};  

 export const loginRequest = async (user) => {
  const configuracion = {
    method: "POST",
    url: urlBase + "/login", 
    data: user
  };
  const result = await axios(configuracion)
  return result
  
};

export const verifyTokenRequest = async () => {
  axios.get(`auth/verify`)
};
