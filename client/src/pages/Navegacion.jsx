import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

const Navegacion = () => {
  return (
    <Navbar className= "navbar rounded-3" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/img/LogoZap.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="logo Zap"
          />{" "}
          Zap Calzados
        </Navbar.Brand>
        <Nav className="me-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#Contacto">Contacto</Nav.Link>
          
          <Nav.Link href="#Login">Iniciar </Nav.Link>
          <Nav.Link href="#register">Registro </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
