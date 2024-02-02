import { useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./SpinnerBorder.css";
const SpinnerBorder = ({ mensaje }) => {
  const tema = useContext(themeContext);
  const color = tema.state.color;
  const lienzo = tema.state.lienzo;
  return (
      <div
        className="d-flex justify-content-start align-items-center"
        style={{ background: lienzo }}
      >
        <div className="spinner-border text-info" role="status"></div>
        <span style={{ color: color }}>{mensaje}</span>
      </div>
  );
};
export default SpinnerBorder;
