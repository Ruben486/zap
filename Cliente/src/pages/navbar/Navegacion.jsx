import Container from "react-bootstrap/Container";
import Logo from "../../ui/logo";
import { useContext, useEffect, useState } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import Toggle from "../../components/toggle/Toggle";
import { Hamburguesa, XCerrar } from "../../ui/reactIcons/ReactIcons";
import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSizes";
import "./navegacion.css";
import LinkCarrito from "../../components/linkcarrito/LinkCarrito";

const Navegacion = () => {
  const { width, height } = useScreenSize();

  const [hamburguesa, setHamburguesa] = useState(false);
  const [verMenu, setVerMenu] = useState(false);

  const { activarModal } = useContext(CartGlobalContext);

  const toggleMenu = (e) => {
    setVerMenu((previo) => !previo);
  };

  const noPropagar = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    width <= 768 ? setHamburguesa(true) : setHamburguesa(false);
  }, [width]);

  /* barra menu de items  como componente */
  const ItemsMenu = () => {
    return (
      <ul className={`menu-items ${hamburguesa ? "menu-vertical" : null}`}>
        <li className="item-lista">
          <a className="nav-link enlaces" href={"#home"} onClick={noPropagar}>
            Home
          </a>
        </li>
        <li className="item-lista">
          <a
            className="nav-link enlaces"
            href={"#productos"}
            onClick={noPropagar}
          >
            Productos
          </a>
        </li>
        <li className="item-lista">
          <a className="nav-link enlaces" href="#contacto" onClick={noPropagar}>
            Contacto
          </a>
        </li>
      </ul>
    );
  };
  /* componente barra de menu  */
  return (
    <nav className="nav-bar py-2" id="navmenu">
      <Container>
        <section className="barra-menu">
          <div className="s-izquierdo">
            <Link className="enlaces navbrand" href="#home">
              <Logo ancho={70} alto={70} /> Zap Calzados
            </Link>
            {/* <button onClick={activarModal}>Modal</button> */}
          </div>
          <div className="s-derecho">
            <div className="toggle">
              <Toggle />
            </div>
            {!hamburguesa ? (
              <ItemsMenu />
            ) : (
              <a className="enlaces hamburguesa" onClick={toggleMenu}>
                {verMenu ? (
                  <>
                    <XCerrar />
                    <ItemsMenu />
                  </>
                ) : (
                  <Hamburguesa />
                )}
              </a>
            )}
            <LinkCarrito />
          </div>
        </section>
      </Container>
    </nav>
  );
};

export default Navegacion;
