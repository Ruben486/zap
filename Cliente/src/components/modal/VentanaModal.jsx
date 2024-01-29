import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { useContext } from "react";
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
  return (
    <>
      {
        modal && (
          <div className="overlay">
            <div className="contenedor-modal">
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
        // <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
        //   <ContenedorModal paddingModal={paddingModal}>
        //     {mostrarHeader && (
        //       <EncabezadoModal>
        //         <h3>{titulo}</h3>
        //       </EncabezadoModal>
        //     )}
        //     <BotonCerrar />
        //     {children}
        //   </ContenedorModal>
        // </Overlay>
      }
    </>
  );
};
export default VentanaModal;
