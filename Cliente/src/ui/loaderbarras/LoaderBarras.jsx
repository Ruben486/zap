import { useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./LoaderBarras.css";

const LoaderBarras = () => {
  const tema = useContext(themeContext);
  const fondo = tema.state.fondo

  return (
    <div className="loading" style={{fondo}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default LoaderBarras;
