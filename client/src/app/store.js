import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../features/Product/productSlice'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { zapApi } from '../api/zapApi'
import {OrderApi} from '../api/OrderApi' 

export const store = configureStore({
  reducer: {
    // No es necesario el Slice ?
    //productos: productReducer 
    [zapApi.reducerPath]: zapApi.reducer, 
    [OrderApi.reducerPath]: OrderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(zapApi.middleware)
    .concat(OrderApi.middleware),
     
  })

setupListeners(store.dispatch)
