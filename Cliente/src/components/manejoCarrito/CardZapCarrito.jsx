import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { TachoBasura } from "../../ui/reactIcons/ReactIcons";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./carrito.css";

function CardZapCarrito({ producto }) {
  const tema = useContext(themeContext);
  const color = tema.state.color;
  const { deleteProducto } = useContext(CartGlobalContext);
  return (
    <div className="m-3 container">
      <article className="cart-det-zap">
        <section className="cart-det-img">
          <img
            src={producto.img.url}
            className="img rounded p-2"
            alt=""
            loading="lazy"
            style={{ maxWidth: "280px", maxHeight: "220px" }}
          />
        </section>
        <section className="cart-dep-texto">
          <h5 style={{ color }}>{producto.titulo}</h5>
          <p className="cart-det-txt-desc" style={{ color }}>{producto.descripcion}</p>
          <p style={{ color }}>Talle: {producto.talle}</p>
        </section>
        <section className="cart-dep-precio">
          <p className="detalle-car-precio display-6 rounded">
            $ {producto.precio}
            <span className="fs-6 align-end">,</span>
            <span className="fs-6 align-top">00</span>
          </p>

          <div className="m-2 text-end">
            <button
              className="btn btn-secondary btn-sm mt-2"
              onClick={() => deleteProducto(producto._id)}
            >
              <span>
                <TachoBasura />
              </span>
              Quitar
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}

export default CardZapCarrito;
