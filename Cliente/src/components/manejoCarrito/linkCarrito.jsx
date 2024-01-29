import { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { Link } from "react-router-dom";
import constantes from "../../constantes/constantes"

const LinkCarrito = () => {
  const { cart } = useContext(CartGlobalContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [back, setBack] = useState(constantes.backDarkCarrito);
  const [colorIconCarrito, setColorIconCarrito] = useState(constantes.colorIconDarkCarrito);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 202) {
       setBack(constantes.backlightCarrito)
       setColorIconCarrito(constantes.colorIconlightCarrito)
    } else {
       setBack(constantes.backDarkCarrito)
       setColorIconCarrito(constantes.colorIconDarkCarrito)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`div-carrito float-end shadow rounded-circle m-2 px-2 ${back}`} >
        <Link className="link-carrito" style= {{ color: colorIconCarrito}} to="/carrito" >
          <BsCart3 />

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
