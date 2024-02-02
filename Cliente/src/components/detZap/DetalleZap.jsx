import { useParams } from "react-router-dom";
import { useGetZapaQuery } from "../../api/zapApi";
import CabezaPage from "../cabeza-page/CabezaPage";
import SpinnerBorder from "../../ui/spinner/SpinnerBorder";
import "./detalleZap.css";
import { useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema";

function DetalleZap() {
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;
  const color = tema.state.color;
  const lienzo = tema.state.lienzo;

  const { zapId } = useParams();
  if (!zapId) {
    return null;
  }
  const { data: zap, isLoading, error } = useGetZapaQuery(zapId);
  if (isLoading) {
    return (
      <section className="cargar-spinner" style={{background: lienzo}}>
        <SpinnerBorder mensaje="Cargando datos del producto..." />
      </section>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error al traer datos de Zapatilla: {error.message}
      </div>
    );
  }
  return (
    <section
      style={{ background: darkMode ? "var(--color-bg)" : "var(--bg-celeste)" }}
    >
      <CabezaPage titulo={"Zap Calzados"} />
      <div
        className={`container detalle-zap
       ${darkMode ? "detalle-zap-oscuro" : "detalle-zap-claro"}`}
      >
        <h4 className="detalle-titulo text-center display-6">{zap.nombre}</h4>
        <section className="container-zap d-flex flex-column justify-content-between align-items-center mt-2">
          <div className="detalle-imagen p-2">
            <img className="imagen" src={zap.img.url} />
          </div>
          <div
            className="detalle-texto d-flex gap-5 justify-content-between align-items-center p-1"
            style={{color: color}}
          >
            <p className="detalle-precio" style={{color: color}}>
              $ {zap.precio}
            </p>
            {zap.genero === "M" ? (
              <p className="detalle-genero">Mujer</p>
            ) : (
              <p className="detalle-genero">Hombre </p>
            )}
            <p className="detalle-talla" style={{color: color}}>
              Talle{" "}
              <span className="talle" style={{color: color}}>
                {zap.talle}
              </span>
            </p>
          </div>
        </section>
        <p className="detalle-descripcion">{zap.descripcion}</p>
      </div>
    </section>
  );
}

export default DetalleZap;
