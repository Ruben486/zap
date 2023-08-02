import { useContext, useEffect } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { Link } from "react-router-dom";
import CardZapCarrito from "./CardZapCarrito";
import FormCompra from '../FormCompra/FormCompra'
import { GoHome } from "react-icons/go"
import "./carrito.css";

function DetalleCarrito() {
  const { cart, resetCart, totalCart, sumarCart } = useContext(CartGlobalContext);

  useEffect(() => {
    sumarCart();
  }, [cart]);

  return (
    <section className="lienzo-carrito">
      <div className="titulo-carrito fs-1 fw-bold text-center bg-dark text-white  w-100">
          Detalle del Carrito
        </div>
      <div className="container d-flex
           justify-content-center
           align-items-center
           flex-column"
      >
        
        {cart?.map((producto) => (
          <CardZapCarrito key={producto._id} producto={producto} />
        ))}
        {
          cart.length > 0 
          ?  
          (
            <div
              className="card mt-3 mb-3 shadow w-100 bg-light"
              style={{ maxWidth: "800px" }}
            >
            <div className="card-body fs-3 text-center p-3 display-6 rounded">
              Total de carrito $: {totalCart}
            </div>
            <div className="card-body">
              <FormCompra />
            </div>
          </div>
          )
          :
          (<div className="mensaje-vacio text-center display-4">El carrito esta vacio</div>)
        }  
        <section className="botones-carrito d-flex justify-content-center align-items-center gap-5 my-4">
          <button className="btn btn-dark rounded-md" onClick={() => resetCart()}>Vaciar el Carrito</button>
          <button className="btn btn-dark rounded-md">Sumar Carrito</button>
          <Link className="btn btn-dark rounded-md" to="/">
            <span> <GoHome /></span>
            {" "}
            Regresar
          </Link>
        </section>
      </div>
    </section>
  );
}

export default DetalleCarrito;
