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
