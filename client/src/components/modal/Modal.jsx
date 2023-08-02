import styled from "styled-components";
import { useContext } from "react";
import VentanaModal from "./VentanaModal";
import { CartGlobalContext } from "../../cartContext/GlobalContext";

const Modal = ({titulo,parrafo,imagen}) => {
  const { modal, activarModal, desactivarModal } = useContext(CartGlobalContext);
  const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      vertical-align: top;
      border-radius: 3px;
    }
  `;

  const Boton = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 5px;
    color: #fff;
    border: none;
    background: #1766dc;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: 0.3s ease all;

    &:hover {
      background: rgb(4, 35, 102);
    }
  `;

  return (
    <>
      {modal && (
        <VentanaModal
          titulo={'Aviso importante'}
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={"center"}
          paddingModal={"10px"}
        >
          <Contenido>
            <h1>{ titulo }</h1>
            <p>{ parrafo } </p>
            <img  src={ imagen } />
            <Boton onClick={() => desactivarModal()}>
              Aceptar
            </Boton>
          </Contenido>
        </VentanaModal>
      )}
    </>
  );
};

export default Modal;
