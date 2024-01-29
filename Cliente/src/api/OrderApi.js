import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from "../config/server.js";

export const OrderApi = createApi({
  reducerPath: "OrderApi",
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  refetchOnMountOrArgChange: true,
  //refetchOnFocus: true,
  //refetchOnReconnect: true, 
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ()  => "/orders",
      providesTags: ["orders"],
    }),

    altaOrder: builder.mutation({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order
      }),
    }),
  }),
});
export const { useGetOrdersQuery, useAltaOrderMutation} = OrderApi;