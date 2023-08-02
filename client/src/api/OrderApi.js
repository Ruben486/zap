import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const OrderApi = createApi({
  reducerPath: "OrderApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/api"}),
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