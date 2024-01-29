import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/productos';
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
    .get("http://localhost:4000/api/productos")
    .then((res) => {
      dispatch(setZapatillasList(res.data));
    })
    .catch((error) => console.log(error));
 };
};
