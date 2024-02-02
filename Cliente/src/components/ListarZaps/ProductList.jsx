import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductosQuery } from "../../api/zapApi";
import CardZap from "../cardZaps/CardZap";
import { Toaster } from "react-hot-toast";
import "./productosList.css";
import SpinnerBorder from "../../ui/spinner/SpinnerBorder";

function ProductList() {
  const {
    data: productos,
    isLoading,
    error,
    isFetching,
    isUninitialized,
  } = useGetProductosQuery(undefined, {
    // refetchOnMountOrArgChange: true,
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
    //pollingInterval:3000,
  });
  /* const { productos } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerZapDesdeBackend());
  }, []);
 */
  if (isLoading) {
    return (
      <SpinnerBorder mensaje='Aguarde por favor. Cargando productos' />
    );
  }

  if (isFetching) {
    return (
     <SpinnerBorder mensaje='Actualizando Lista de Productos...' />
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error al cargar los productos: {error.error}
      </section>
    );
  }
  return (
    <div className="productos" id="productos">
        <h4 className="titulo-listado-zap text-center p-3 fw-bold display-4">
          Lista de ofertas
        </h4>
      <section className="container browse-zap-box" >
        
        <div className="row g-3 row-cols-12 row-cols-md-4 justify-content-center">
          {productos?.map(
            (producto) =>
              producto.stock > 0 && (
                <CardZap key={producto._id} producto={producto} />
              )
          )}
        </div>
        <Toaster />
      </section>
    </div>
  );
}
export default ProductList;
