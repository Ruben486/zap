import RetornoIcon from "../../ui/RetornoIcon";
import NavLink from "react-bootstrap/NavLink";
import "./Retorno.css";

const Retorno = () => {
  
  return (
    <div className="box-retorno d-flex justify-content-center mb-3">
      <NavLink className="link-retorno" href="#navmenu">
        <RetornoIcon />
      </NavLink>
      <ul className="retorno-a">
        <li>Retorno al Home</li>
        <li>Retorno a Productos</li>
      </ul>
    </div>
  );
};

export default Retorno;
