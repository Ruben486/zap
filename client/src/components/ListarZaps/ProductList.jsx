
import { useState, useEffect, useRef } from "react";
//import { traerZapDesdeBackend } from "../features/Product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import {  useGetProductosQuery } from "../../api/zapApi";
import CardZap from "../cardZaps/CardZap";
import {Toaster} from 'react-hot-toast'

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
      <div>
        <span className="spinner-border"></span> Loading productos...
      </div>
    );
  }

  if (isFetching) {
    return (
      <div>
        <span className="spinner-border"></span> Actualizando Lista de
        Productos...
      </div>
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
    <section id="productos" className="box-productos p-3 bg-light">
      <h4 className="text-center px-4 px-lg-5 mt-3 fw-light display-5">
        Lista de ofertas
      </h4>
      <div className="grilla row gx-3 gx-lg-3 row-cols-12 row-cols-md-4  justify-content-center">
        {productos?.map((producto) => (
           producto.stock > 0 && (
            <CardZap key={producto._id} producto={producto} />
          )
        ))}
      </div>
      <Toaster />
    </section>
  );
}
export default ProductList;
