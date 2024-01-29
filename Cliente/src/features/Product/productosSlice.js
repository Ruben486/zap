import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//const initialState = products;
const initialState = [];

export const productSlice = createSlice({
  name: "productos",
  initialState: {
    productos: initialState
  },
  reducers:{
    setZapatillasList: (state,action) => {
      state.productos = action.payload
    }
  },
})
export const {setZapatillasList} = productSlice.actions;
export default productSlice.reducer;

export const traerZapDesdeBackend = () => {
  return (dispatch) => {
    axios
    .get(import.meta.env.VITE_SERVER_BACKEND + "/productos")
    .then((res) => {
      dispatch(setZapatillasList(res.data));
    })
    .catch((error) => console.log(error));
 };
};
