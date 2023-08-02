import { useParams, Link } from "react-router-dom";
import { useGetZapaQuery } from "../../api/zapApi";
import "./detalleZap.css";
import { useContext } from 'react';
import LinkCarrito from "../manejoCarrito/linkCarrito";
import { CartGlobalContext } from "../../cartContext/GlobalContext";

function DetalleZap() {
  const {cart} = useContext(CartGlobalContext);
  const { zapId } = useParams();
  if (!zapId) {
    return null;
  }
  const { data: zap, isLoading, error } = useGetZapaQuery(zapId);
  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Cargando datos de Zapatilla...
      </div>
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
    <div className="container detalle-zap">
      
      <div className="text-center ">
        <div className="container__zap text-center mt-5 mb-5">
          <h1 className="detalle__titulo display-3">{zap.titulo}</h1>
          <div className="row justify-content-center g-4">
            <div className="detalle__imagen col-11 col-md-7 col-lg-7">
              <img className="imagen img-fluid p-2" src={zap.img.url} />
            </div>
            <div className="detalle__texto col-11 col-md-5 col-lg-5 p-2">
              <p className="detalle__precio">$ {zap.precio}</p>
              <p className="detalle__descripcion">{zap.descripcion}</p>
              {zap.genero === "M" ? <p>Mujer</p> : <p>Hombre </p>}
              <p className="detalle__talla">
                Talle{" "}
                <Link href="#" className="talle">
                  {zap.talle}
                </Link>
              </p>
            </div>
          </div>
          <Link className="btn btn-primary my-3 mx-auto" to="/">
            {" "}
            Retorno
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleZap;
