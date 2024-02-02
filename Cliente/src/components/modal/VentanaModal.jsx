import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { themeContext } from "../../contextoTema/ContextoTema";
import BotonCerrar from "../BotonCerrar/BotonCerrar";
import constantes from "../../constantes/constantes";
import "./ventanaModal.css";

const VentanaModal = ({
  children,
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  paddingModal,
}) => {
  const { modal } = useContext(CartGlobalContext);
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;
  return (
    <>
      {
        modal && (
          <div className="overlay">
            <div className= {`contenedor-modal ${darkMode ? 'variante-oscura' : 'variante-clara'}`} 
            >
              {mostrarHeader && (
                <div className="encabezado-modal">
                  <h3>{constantes.tituloModal}</h3>
                </div>
              )}
              {children}
              <BotonCerrar />
            </div>
          </div>
        )
      }
    </>
  );
};
export default VentanaModal;
