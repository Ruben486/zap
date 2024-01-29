import React from 'react'
import { useContext } from 'react';
import { CartGlobalContext } from '../../cartContext/GlobalContext';
import "./BotonCerrar.css"
import XCerrar from '../../ui/XCerrar';

const BotonCerrar = () => {
  const {desactivarModal} = useContext(CartGlobalContext)  
  return (
    <button className='boton-cerrar' onClick={desactivarModal}>
        <XCerrar />
    </button>
  )
}

export default BotonCerrar;