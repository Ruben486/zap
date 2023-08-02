import styled from "styled-components";
import {CartGlobalContext} from "../../cartContext/GlobalContext"
import {useContext} from 'react'
const VentanaModal = ({
  children,
  titulo = "Aviso",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  paddingModal,
}) => {
  const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) =>
      props.mostrarOverlay ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)"};
    display: flex;
    justify-content: center;
    align-items: ${(props) =>
      props.posicionModal ? props.posicionModal : "center"};
  `;

  const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #f5f5f5;
    position: relative;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${(props) => props.paddingModal ? props.paddingModal : "20px"};
    margin-bottom: 20px;
  `;

  const EncabezadoModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
    h3 {
      font-weight: 500;
      font-size: 1.5rem;
      color: #1766dc;
    }
  `;

  const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.5s ease all;
    border-radius: 8px;
    color: #1766dc;

    &:hover {
      background: rgb(236, 66, 66);
      color: whitesmoke;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `;
  const {modal,desactivarModal} = useContext(CartGlobalContext);
  
  return (
    <>
    { modal && 
      <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
        <ContenedorModal paddingModal={paddingModal}>
          {mostrarHeader && (
            <EncabezadoModal>
              <h3>{titulo}</h3>
            </EncabezadoModal>
          )}
          <BotonCerrar onClick={() => desactivarModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </BotonCerrar>
          {children}
        </ContenedorModal>
      </Overlay>
      }
    </>
  );
};
export default VentanaModal;
