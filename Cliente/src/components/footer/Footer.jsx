import "./Footer.css";
import {
  Correo,
  Telefono,
  Linkedin,
  Foco,
  Localidad,
} from "../../ui/reactIcons/ReactIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="f-contenido">
        <div className="i-panel">
          <p> Zap Calzados Tienda on line zapatillas deportivas</p>
          <p> Rubén Sánchez Developer</p>
          <p className="developer">
            {" "}
            <span>
              <Foco />
            </span>{" "}
            Semantic Developer
          </p>
        </div>
        <div className="d-panel">
          <p>
            {" "}
            <span>
              <Telefono />
            </span>{" "}
            Whatsapp +54 9 362 4 56 2118
          </p>
          <p>
            {" "}
            <span>
              <Correo />
            </span>{" "}
            arubensanchezg@gmail.com
          </p>
          <Link to="https://linkedin.com/in/ruben-sanchez-bb6427215">
            <p>
              {" "}
              <span>
                {" "}
                <Linkedin />{" "}
              </span>
              LinkedIn
            </p>
          </Link>

          <p>
            {" "}
            <span>
              <Localidad />
            </span>{" "}
            Resistencia Chaco Argentina
          </p>
        </div>
        <a href=""></a>
      </div>
      <div className="copyright">
        <span>&#169;</span> Todos los derechos reservados 2024
      </div>
    </section>
  );
};

export default Footer;
