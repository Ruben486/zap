import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/userSchema";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  CardUsu,
  Message,
  Label,
  Boton,
  Input,
  MensajeError,
} from "../components/ui/index";
import { useEffect, useState } from "react";
import {useAuth} from '../context/authContext'

const initialValue = {
  username: "",
  email: "",
  password: "",
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    resolver: zodResolver(registerSchema),
  });
  const [showPass, setShowPass] = useState(false);
  const { signup,errors: loginErrors,autenticado } = useAuth();
  const navigate = useNavigate();
  
  const submitForm = (data) => {
    signup(data)
    console.log(loginErrors)
    reset(initialValue)
  };

  useEffect(()=> {
    if (autenticado) navigate("/") 
  },[autenticado])
  

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CardUsu>
        <h2 className="text-2xl font-bold">Register</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <Label htmlFor={"username"}>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Nombre usuario"
            {...register("username", { required: true })}
          />
          <MensajeError error={errors.username?.message} />
          <Label htmlFor={"email"}> Email </Label>
          <Input
            type="email"
            name="email"
            placeholder="tucorreo@dominio.com"
            {...register("email", { required: true })}
          />
          <MensajeError error={errors.email?.message} />
          <Label htmlFor={"password"}>Contraseña</Label>
          <div className="bg-zinc-600 rounded-md flex justify-between align-center" >
            <Input
              type={ showPass ? "text" : "password" }
              name="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            <button
              type="button" 
              className="bg-zinc-600 m-1 px-2 rounded-md"
              onClick={() => setShowPass(!showPass)}>
              {showPass ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <MensajeError error={errors.password?.message} />
          <Boton>Registro</Boton>
        </form>
        <p className="flex gap-x-2 justify-between text-sm my-3">
          Ya tiene una cuenta ?{" "}
          <Link to="/login" className="text-indigo-300 text-sm">
            Login{" "}
          </Link>{" "}
          <Link to={"/"} className="text-sm text-sky-300">
            Home
          </Link>
        </p>
      </CardUsu>
    </div>
  );
}

export default RegisterPage;
