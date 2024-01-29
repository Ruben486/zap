import axios from "axios";
import { useQuery } from "@tanstack/react-query"
import { listaProductos } from "../api/productosAPI"

const ListaProductos = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["productos"],
    queryFn: listaProductos,
  });
  
  return (
    <div>ListaProductos</div>
  )
}

export default ListaProductos;
