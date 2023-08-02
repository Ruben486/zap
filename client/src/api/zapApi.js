import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const zapApi = createApi({
  reducerPath: "zapApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/api"}),
  refetchOnMountOrArgChange: true,
  //refetchOnFocus: true,
  //refetchOnReconnect: true, 
  tagTypes: ["zaps"],
  endpoints: (builder) => ({
    getProductos: builder.query({
      query: ()  => "/productos",
      providesTags: ["zaps"],
    }),

    ModifyZap: builder.mutation({
      query: (zap) => ({
        url: `/productos/${zap._id}`,
        method: 'PUT',
        body: zap,
      }),
    }),
    GetZapa: builder.query({
      query: (id) => ({
        url: `/productos/${id}` 
      })
    }),
  }),
});
export const { useGetProductosQuery, useModifyZapMutation,useGetZapaQuery } = zapApi;