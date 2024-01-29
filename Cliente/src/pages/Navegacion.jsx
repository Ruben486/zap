import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

const Navegacion = () => {
  return (
    <nav bg-dark data-bs-theme="dark" className= "navbar nav-bar">
      <Container>
        <Navbar.Brand className="navbrand" href="#home">
          <img
            src="/img/Zap-Calzados-4-bg.png"
            width="70"
            height="70"
            alt="logo Zap"
          />{" "}
          Zap Calzados
        </Navbar.Brand>
        <Nav className="me-2">
          <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
          <Nav.Link className="nav-link" href="#productos">Productos</Nav.Link>
          <Nav.Link className="nav-link" href="#Contacto">Contacto</Nav.Link>
          
          <Nav.Link className="nav-link" href="#Login">Iniciar </Nav.Link>
          <Nav.Link className="nav-link" href="#register">Registro </Nav.Link>
        </Nav>
      </Container>
    </nav>
  );
};

export default Navegacion;
