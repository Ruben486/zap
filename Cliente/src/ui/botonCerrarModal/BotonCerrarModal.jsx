import React from "react";
import { useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import "./botonCerrarModal.css";

const BotonCerrarModal = () => {
  const { desactivarModal } = useContext(CartGlobalContext);
  return (
    <button className="boton" onClick={() => desactivarModal()}>
      Continuar
    </button>
  );
};

export default BotonCerrarModal;
