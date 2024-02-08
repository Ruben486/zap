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
            Sinapsis Developments
          </p>
        </div>
        <div className="d-panel">
          <p>
            {" "}
            <span>
              <Correo />
            </span>{" "}
            sinapsisdev@gmail.com
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
