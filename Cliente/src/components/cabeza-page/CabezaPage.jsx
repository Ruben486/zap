import { Link } from "react-router-dom";
import Logo from "../../ui/logo";
import { GoHome } from "react-icons/go";
import "./CabezaPage.css";

const CabezaPage = ({titulo}) => {
  return (
    <section className="cabeza-detalle d-flex justify-content-around align-items-center ">
      <Logo />
      <h4 className="cabeza-titulo">{titulo}</h4>
      <Link className="boton-retorno" to="/">
        <span>
          {" "}
          <GoHome />
        </span>{" "}
        Retorno a Inicio
      </Link>
    </section>
  );
};

export default CabezaPage;
