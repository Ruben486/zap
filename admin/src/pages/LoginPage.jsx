import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/userSchema";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useAuth } from '../context/authContext';

import {
  CardUsu,
  Message,
  Label,
  Boton,
  Input,
  MensajeError,
} from "../components/ui/index";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    
  });
  const { signin,errors: loginErrors,autenticado } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)

  const submitForm = (data) => signin(data);
  
  useEffect(()=> {
    if (autenticado) { navigate("/")} 
  },[autenticado])
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CardUsu>
        <h2 className="text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <Label htmlFor={"email"}> Email </Label>
          <Input
            type="email"
            name="email"
            placeholder="tucorreo@dominio.com"
            {...register("email", { required: true })}
          />
          <MensajeError error={errors.email?.message} />
          <Label htmlFor={"password"}>Contraseña</Label>
          <div className="bg-zinc-600 rounded-md flex justify-between align-end mb-5">
            <Input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            <button
              type="button" 
              className="p-2 rounded-md"
              onClick={() => setShowPass(!showPass)}>
              {showPass ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <MensajeError error={errors.password?.message} />
          <Boton>Login</Boton>
        </form>
        <p className="flex gap-x-2 justify-between text-sm my-3">
          Aun no tiene cuenta?{" "}
          <Link to="/register" className="text-indigo-300 text-sm">
            Registro{" "}
          </Link>{" "}
          <Link to={"/"} className="text-sm text-sky-300">
            Home
          </Link>
        </p>
      </CardUsu>
    </div>
  );
}

export default LoginPage;
