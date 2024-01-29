import { useContext } from "react";
import VentanaModal from "./VentanaModal";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import BotonCerrarModal from "../../ui/botonCerrarModal/BotonCerrarModal";
import constantes from "../../constantes/constantes";
import "./modal.css";

const Modal = ({ imagen }) => {
  const { modal} = useContext(CartGlobalContext);

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
            <p>{constantes.parrafoModal} </p>
            <BotonCerrarModal />
         
          </div>
        </VentanaModal>
      )}
    </>
  );
};

export default Modal;
