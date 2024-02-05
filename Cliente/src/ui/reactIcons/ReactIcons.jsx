import { SlEnvolope } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlGlobe } from "react-icons/sl";
import { SlBulb } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { SiMoonrepo } from "react-icons/si";
import { FiSun } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BsTrash3 } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

export const Correo = () => {
  return <SlEnvolope />;
};
export const Localidad = () => {
  return <SlLocationPin />;
};
export const Linkedin = () => {
  return <SlSocialLinkedin />;
};
export const Globo = () => {
  return <SlGlobe />;
};
export const Foco = () => {
  return <SlBulb />;
};
export const Telefono = () => {
  return <SlPhone />;
};

export const Luna = () => {
  return <SiMoonrepo />;
};
export const Sol = () => {
    return (
        <FiSun />    
    )
};
export const Ojo  = () => {
  return (
    <BsFillEyeFill />
  )
};
export const Like = () => {
  return (
    <BsHandThumbsUp />
  )
};
export const Corazon = () => {
  return (
    <FcLike />
  )
};
export const TachoBasura = () => {
  return (
    <BsTrash3 />
  )
};
export const Home = () => {
  return ( <GoHome />)
} 
export const Carrito = () => {
  return (<BsCart3 />)
}

export const Hamburguesa = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-justify"
      viewBox="0 0 16 16 "
    >
      <path
        fillRule="evenodd"
        d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  )};

  export const XCerrar = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        className="bi bi-x-lg border-solid border-2 border-gray-300 p-2 rounded-md"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    );
};
