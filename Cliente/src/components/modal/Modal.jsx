import { useContext } from "react";
import VentanaModal from "./VentanaModal";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import BotonCerrarModal from "../../ui/botonCerrarModal/BotonCerrarModal";
import constantes from "../../constantes/constantes";
import { themeContext } from "../../contextoTema/ContextoTema";
import "./modal.css";

const Modal = ({ imagen }) => {
  const { modal} = useContext(CartGlobalContext);
  const tema = useContext(themeContext);
  const color = tema.state.color
  return (
    <>
      {modal && (
        <VentanaModal
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={"center"}
          paddingModal={"10px"}
        >
          <div className="contenido">
            <h4>{constantes.subTituloModal}</h4>
            <p style={{color: color}}>{constantes.parrafoModal} </p>
            <BotonCerrarModal />
          </div>
        </VentanaModal>
      )}
    </>
  );
};

export default Modal;
