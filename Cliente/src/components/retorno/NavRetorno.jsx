import { SlHome } from "react-icons/sl";
import { BsChevronBarUp } from "react-icons/bs";
import { SlEnvelopeOpen } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlGrid } from "react-icons/sl";
import { useState } from "react";
import "./Retorno.css"
const NavRetorno = () => {
  const [mostrarNav, setMostrarNav] = useState(false);

  return (
    <nav className="nav-retorno">
      <ul className="r-navbar">
        <li className="disparador">
        { mostrarNav
        ? ( <BsChevronBarUp className="flecha-arriba" onClick={()=> setMostrarNav(!mostrarNav)}/>)
        :( <SlArrowDown className="flecha-abajo" onClick={()=> setMostrarNav(!mostrarNav)} />)
        }
        </li>
        {mostrarNav && (
          <>
            <li>
              <a href="#navmenu">
                <SlHome />
              </a>
            </li>
            <li>
              <a href="#productos">
                <SlGrid />
              </a>
            </li>
            <li>
              <a href="#contacto">
                <SlEnvelopeOpen />
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavRetorno;
