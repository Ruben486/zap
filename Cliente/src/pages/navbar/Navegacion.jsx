import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../ui/logo";
import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import Toggle from "../../components/toggle/Toggle";
import "./navegacion.css";

const Navegacion = () => {
  const { activarModal } = useContext(CartGlobalContext);
  return (
    <nav data-bs-theme="dark" className="navbar nav-bar" id="navmenu">
      <Container>
        <Navbar.Brand className="navbrand" href="#home">
          <Logo ancho={70} alto={70} /> Zap Calzados
        </Navbar.Brand>
        <button onClick={activarModal}>Modal</button>
        <div className="toggle">
          <Toggle />
        
        </div>
        <Nav className="me-2">
          <Nav.Link className="nav-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="#productos">
            Productos
          </Nav.Link>
          <Nav.Link className="nav-link" href="#contacto">
            Contacto
          </Nav.Link>

          <Nav.Link className="nav-link" href="#Login">
            Iniciar{" "}
          </Nav.Link>
          <Nav.Link className="nav-link" href="#register">
            Registro{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </nav>
  );
};

export default Navegacion;
