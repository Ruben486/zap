import { useReducer } from "react";
import { createContext } from "react";
import types from "./types";
import "./cartReducer"; 
import cartReducer from "./cartReducer";

const initialState = {
  cart: [],
  totalCart: 0,
  modal: false
} 
export const CartGlobalContext = createContext(initialState);

export const CartGlobalProvider = (({children}) => {
  const [estado, dispatch] = useReducer(cartReducer, initialState)  

  const addProducto = (producto) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: producto
    })
  };
  const deleteProducto = ((id) => {
    dispatch({type: types.REMOVE_FROM_CART, payload: id})
  });
  const resetCart = (() => {
    dispatch({type: types. RESET_CART})
  });
  const sumarCart = (() => {
    dispatch({type: types.SUMAR_CART})
  }); 
  const activarModal = () => {
    dispatch({type: types.ACTIVAR_MODAL})
  };
  const desactivarModal = () => {
    dispatch({type: types.DESACTIVAR_MODAL})
  };

  return (
    <CartGlobalContext.Provider value={{
      cart: estado.cart,
      totalCart: estado.totalCart,
      modal: estado.modal,
      addProducto,
      deleteProducto,
      resetCart,
      sumarCart,
      activarModal,
      desactivarModal
    }}> 
      {children}
    </CartGlobalContext.Provider>
  ) 
});

