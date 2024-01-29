import FormProducto from "./FormProducto";
import {useAddZap } from "../hook/useProductos";
import toast from "react-hot-toast";

const AltaProducto = () => {
  const {mutate:altaProductoMutation} = useAddZap()
/* const altaProductoMutation = useMutation({
    mutationFn: altaProducto,
    onSuccess,
    onError 
  }) */
  
  return (
    <div>
     <FormProducto zapa= {{}} funcionMutacion={altaProductoMutation}/>
     </div>
  )
}

export default AltaProducto;