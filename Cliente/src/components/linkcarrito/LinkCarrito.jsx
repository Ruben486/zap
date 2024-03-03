import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { Link } from "react-router-dom";
import "./LinkCarrito.css";
import { themeContext } from "../../contextoTema/ContextoTema";
import { Carrito } from "../../ui/reactIcons/ReactIcons";

const LinkCarrito = () => {
  const { cart } = useContext(CartGlobalContext);
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;
  const color = tema.state.color;
  const fondo = tema.state.fondo;
  
  return (
    <>
      <div className={`div-carrito float-end shadow rounded-circle m-2 px-2 ${fondo}`} >
        <Link className="link-carrito" style= {{ color }} to="/carrito" >
          <Carrito />
          {cart.length > 0 && (
            <div className="cant-items-carrito">
              {cart.length}
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
export default LinkCarrito;
