import {useEffect,useState,createContext,useContext} from 'react';
import {loginRequest,registerRequest,verifyTokenRequest} from '../api/auth';
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('No existe contexto')
  return context
};

const initialUser = {
  id: '',
  username: "",
  email: '',
  isAdmin: false,
  token: ''
}
export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(initialUser);
  const [autenticado, setAutenticado] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  //limpiar los errores despues de 5sg.
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      },5000);
      return () => clearTimeout(timer)
    }
},[errors]);

const signup = async (user) => {
  try { 
    const res = await registerRequest(user);
      if (res.status === 201) {
        setUser(res.data);
        setAutenticado(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
};

const signin = async (user) => {
  try {
    const res = await loginRequest(user);
    Cookies.set('token', res.data.token, { expires: 1 });
    setUser(res.data);
    setAutenticado(true);
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  const cookie = Cookies.get("token");
  Cookies.remove("token");
  setUser(initialUser);
  setAutenticado(false);
};

 useEffect(() => {
  const chkLogin = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setAutenticado(false);
      setLoading(false);
      return
    }
    try {
      const res = await verifyTokenRequest(cookies.token)
      if (!res.data) {
        return setAutenticado(false)
      }
      setUser(res.data)
      setAutenticado(true)
      setLoading(false)
    } catch (error) {
      setAutenticado(false);
      setLoading(false);
    }
  }
  chkLogin();
},[]); 

  return (
    <AuthContext.Provider
      value= {{
        user,
        signin,
        signup,
        logout,
        autenticado,
        errors,
        loading
      }}
     >
      {children}
    </AuthContext.Provider>
  )
};
export default AuthContext