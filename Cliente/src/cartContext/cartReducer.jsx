import toast from 'react-hot-toast'

const cartReducer = ((state,action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const enCarrito = state.cart.find(producto => producto._id === action.payload._id)
      if (!enCarrito) {
        toast('se añadio al producto al carrito ')
        return {...state, cart: [...state.cart, action.payload]}
      }
      toast('El producto ya esta en el carrito ')
      return state

    case "SUMAR_CART":
      return  {
        ...state,
        totalCart: state.cart.reduce((suma,producto) => 
          suma + producto.precio,0) 
      }   
    case "RESET_CART":
        return { ...state, cart:[], totaCart: 0 }

    case "REMOVE_FROM_CART":
      return {...state, cart: state.cart.filter(zap => zap._id !== action.payload)}    
    case  "ACTIVAR_MODAL":
      return {...state,modal: true} 

    case "DESACTIVAR_MODAL" :
      return {...state,modal: false} 
        
    default:
      return state;
  }
});
export default cartReducer;  