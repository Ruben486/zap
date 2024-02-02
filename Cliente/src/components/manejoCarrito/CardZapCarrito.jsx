import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { TachoBasura } from "../../ui/reactIcons/ReactIcons";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./carrito.css";

function CardZapCarrito({ producto }) {
  const tema =  useContext(themeContext);
  const color = tema.state.color;
  console.log(color)
  const { deleteProducto } = useContext(CartGlobalContext);
  return (
    <div className="m-3 shadow rounded" style={{ width: "100%" }}>
      <div className="row row-cols-3">
        <div className="col">
          <div className="p-2">
            <img
              src={producto.img.url}
              className="img-fluid rounded p-2"
              alt=""
              loading="lazy"
              style={{ maxHeight: "200px" }}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-2">
            <h5 style={{color: color}}>{producto.titulo}</h5>
            <p style={{color: color}}>{producto.descripcion}</p>
            <p style={{color: color}}>Talle: {producto.talle}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-2">
            <p className="detalle-car-precio display-6 rounded shadow">
              $ {producto.precio}
              <span className="fs-6 align-end">,</span>
              <span className="fs-6 align-top">00</span>
            </p>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default CardZapCarrito;
