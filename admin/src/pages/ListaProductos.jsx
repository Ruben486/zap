import axios from "axios";
import { useQuery } from "@tanstack/react-query"
import { listaProductos } from "../api/productosAPI"

const ListaProductos = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["productos"],
    queryFn: listaProductos,
  });
  
  /* const paginaProductos = axios.get('http://localhost:4000/api/productos')
  .then(response => console.log(response.data.docs))
 */
  return (

    <div>ListaProductos</div>
  )
}

export default ListaProductos
