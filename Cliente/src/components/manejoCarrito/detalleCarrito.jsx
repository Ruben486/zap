import { useContext, useEffect } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import CardZapCarrito from "./CardZapCarrito";
import FormCompra from "../FormCompra/FormCompra";
import CabezaPage from "../cabeza-page/CabezaPage";
import "./carrito.css";

function DetalleCarrito() {
  const { cart, resetCart, totalCart, sumarCart } =
    useContext(CartGlobalContext);

  useEffect(() => {
    sumarCart();
  }, [cart]);

  return (
    <div className="lienzo-carrito" style={{ background: "#e0f7fa" }}>
      <CabezaPage titulo={"Detalle del carrito"} />
      <div
        className="container caja-externa d-flex justify-content-center 
      align-items-center flex-column bg-light shadow" 
      >
        {cart?.map((producto) => (
          <CardZapCarrito key={producto._id} producto={producto} />
        ))}

        {cart.length > 0 ? (
          <>
            <div
              className="fs-3 text-end p-3 display-6 rounded"
              style={{ width: "100%" }}
            >
              Total de carrito: $<span> </span>
              <span
                className="display-6"
                style={{ color: "var(--color-gra-2)", fontWeight: "bold" }}
              >
                {totalCart}
              </span>
            </div>
            <FormCompra />
            <section className="botones-carrito d-flex justify-content-center align-items-center gap-5 my-4">
              <button
                className="btn btn-dark rounded-md"
                onClick={() => resetCart()}
              >
                Vaciar el Carrito
              </button>
              <button className="btn btn-dark rounded-md">Sumar Carrito</button>
            </section>
          </>
        ) : (
          <div className="mensaje-vacio text-center display-4">
            El carrito está vacío
          </div>
        )}
      </div>
    </div>
  );
}

export default DetalleCarrito;
