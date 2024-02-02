import { Sol, Luna } from "../../ui/reactIcons/ReactIcons"
import "./Toggle.css";
import { useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema"; 

const Toggle = () => {
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;

  const handleClickToggle = () => {
    tema.dispatch({type:'toggle'})
  }
  return (
    <div className="box-toggle" onClick={handleClickToggle}>
      <Sol />
      <Luna />
      <button className="t-button" style={darkMode ? {right: '2px'} : {left: '2px'}} >
      </button>
    </div>
  );
};

export default Toggle;
