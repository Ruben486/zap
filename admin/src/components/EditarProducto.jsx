import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { actualizarProducto } from "../api/productosAPI";
import {useParams} from "react-router-dom";
import {Spinner} from "./ui/Spinner";
import { useActualizarProducto, useGetUnProducto } from "../hook/useProductos";
import FormProducto from "./FormProducto";
 
const EditarProducto = () => {
  const params = useParams()
  const {data:producto,isLoading,error } = useGetUnProducto(params.id)

  const {mutate:actualizarProductoMutation} = useActualizarProducto()
  
  if (isLoading) {
    return <Spinner />;
  }
  
  return (
    <div>
      <FormProducto
         zapa= {producto.data}
         funcionMutacion={actualizarProductoMutation}
      />    
    </div>
  )
}

export default EditarProducto;