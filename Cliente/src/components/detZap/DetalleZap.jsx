import { useParams } from "react-router-dom";
import { useGetZapaQuery } from "../../api/zapApi";
import CabezaPage from "../cabeza-page/CabezaPage";
import SpinnerBorder from "../../ui/spinner/SpinnerBorder";
import "./detalleZap.css";

function DetalleZap() {
  const { zapId } = useParams();
  if (!zapId) {
    return null;
  }
  const { data: zap, isLoading, error } = useGetZapaQuery(zapId);
  if (isLoading) {
    return (
      <SpinnerBorder mensaje= 'Cargando datos del producto...' />
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
    <body>
      <CabezaPage titulo={"Zap Calzados"} />
      <div className="container detalle-zap">
        <h4 className="detalle-titulo text-center display-6">{zap.nombre}</h4>
        <section className="container-zap d-flex flex-column justify-content-between align-items-center mt-3">
          <div className="detalle-imagen p-2">
            <img className="imagen" src={zap.img.url} />
          </div>
          <div className="detalle-texto d-flex gap-5 justify-content-between align-items-center p-2">
            <p className="detalle-precio">$ {zap.precio}</p>
            {zap.genero === "M"
             ? <p className="detalle-genero">Mujer</p>
             : <p className="detalle-genero">Hombre </p>
             }
            <p className="detalle-talla">
              Talle{" "}
              <span className="talle">
                {zap.talle}
              </span>
            </p>
          </div>
        </section>
        <p className="detalle-descripcion">{zap.descripcion}</p>
      </div>
    </body>
  );
}

export default DetalleZap;
