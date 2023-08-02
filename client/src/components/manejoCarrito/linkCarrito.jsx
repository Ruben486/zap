import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const LinkCarrito = () => {
  const { cart } = useContext(CartGlobalContext);
  return (
    <div className="container sticky-top"> 
    <div className="d-flex justify-content-between align-items-center ">
      <h1>Landing</h1>
      <div className="d-flex justify-content-center align-items-center bg-light rounded-pill m-1 px-1 shadow ">
        <Link to="/carrito">
          <span className="fs-3 text-dark">
            <BsCart3 />
          </span>
          { cart.length > 0 && (
            <span className="fs-6 bg-danger text-white px-1 rounded-pill">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
    </div> 
  );
};
export default LinkCarrito;
