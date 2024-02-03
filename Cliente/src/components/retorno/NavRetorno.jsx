import { SlHome } from "react-icons/sl";
import { BsChevronBarUp } from "react-icons/bs";
import { SlEnvelopeOpen } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlGrid } from "react-icons/sl";
import { useState, useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./Retorno.css";

const NavRetorno = () => {
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;

  const [mostrarNav, setMostrarNav] = useState(false);

  const estilos = {
    enlace: {
      color: darkMode ? 'var(--bg-claro)' : 'var(--color-bg)' 
    },
    itmLista: {
      color: darkMode ? 'var(--bg-claro)' : 'var(--color-bg)' 
    }
  };

  return (
    <nav className="nav-retorno">
      <ul className="r-navbar">
        <li className="disparador" style={estilos.itmLista}>
        { mostrarNav
        ? ( <BsChevronBarUp className="flecha-arriba" onClick={()=> setMostrarNav(!mostrarNav)}/>)
        :( <SlArrowDown className="flecha-abajo" onClick={()=> setMostrarNav(!mostrarNav)} />)
        }
        </li >
        {mostrarNav && (
          <>
            <li style={estilos.itmLista}>
              <a href="#navmenu" style={estilos.enlace}>
                <SlHome />
              </a>
            </li>
            <li style={estilos.itmLista}>
              <a href="#productos" style={estilos.enlace}>
                <SlGrid />
              </a>
            </li>
            <li style={estilos.itmLista}>
              <a href="#contacto" style={estilos.enlace}>
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
