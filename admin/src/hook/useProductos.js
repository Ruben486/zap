import { useQuery,
         useQueryClient,
         useInfiniteQuery,
         useMutation }
       from "@tanstack/react-query";
       
import { getProductos,
         deleteProducto,
         listaProductos,
         altaProducto,
         actualizarProducto,
         getProducto
         } from "../api/productosAPI";

import toast from "react-hot-toast";         

export const useGetProductos = (pagina,onSuccess,onError) => {
  return (
    useQuery({
      queryKey: ["productos", pagina],
      queryFn: () => listaProductos(pagina),
      keepPreviousData: true,
      onSuccess,
      onError,
    })
  ); 
};

export const useGetUnProducto = (prodId) => {
    const queryClient = useQueryClient()
    return useQuery({
    queryKey: ['producto-id',prodId],
    queryFn: () => getProducto(prodId),
    initialData: () => {
      const data = queryClient.getQueryData(['producto-id'],prodId)
      if (data) {
        return {  
          data:zapa
        } 
      } else {
        return undefined
      }
    } 
  });
};

export const useAddZap= () => {
  const queryClient = useQueryClient()
  return useMutation(altaProducto,{
    onSuccess: async () => {
      await queryClient.invalidateQueries('productos')
      toast.success("Producto incorporado exitosamente");
      // setquerydata es una funcion sincrona
      /*  queryClient.setQueryData(['productos'],(oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData,data.data]
        }
      }) */ 
    }
  })
};
export const useActualizarProducto =() => {
  const queryClient = useQueryClient();
  return (
    useMutation({
      mutationFn: actualizarProducto,
      onSuccess: async () => {
        await queryClient.invalidateQueries('productos')
        toast.success("Producto actualizado exitosamente");
      },
    })
  )

}
export const useDeleteProducto= () => {
  const queryClient = useQueryClient();
  return (
    useMutation({
      mutationFn: deleteProducto,
      onSuccess: () => {
        queryClient.invalidateQueries("productos");
      },
    })
  );
};

export const useInfiniteProductos = () => {
  return (
    useInfiniteQuery({
      queryKey: ["productos"],
      queryFn: ({ pageParam = 1 }) => listaProductos(pageParam),
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page === lastPage.data.totalPages) return false;
        return lastPage.data.page + 1;
      },
    })
  );
};
