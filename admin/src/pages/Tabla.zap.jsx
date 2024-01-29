import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Pencil, Trash } from "../components/ui/icons";
import { Spinner} from "../components/ui/Spinner"
import CuerpoTablaDatos from "../components/ui/CuerpoTablaDatos";
import { useGlobal } from "../context/GlobalContext";
import { useAuth } from "../context/authContext";

import CabeceraTabla from "../components/CabeceraTabla";
import { cabeceraProductos } from "../components/ui/constantes";
import ModalBajaProducto from "../components/ModalPorBaja";
import { useDeleteProducto, useGetProductos } from "../hook/useProductos";
import Paginador from "../components/Paginador";

function TablaZap() {
  const [pagina, setPagina] = useState(1);
  const [eliminarProducto, setEliminarProducto] = useState({});
  const { user } = useAuth();
  const { modal, setModal } = useGlobal();

  const onSuccess = () => {
    console.log('Datos Obtenidos')
  }
  const onError = () => {
    console.log('Ocurrio un error durante la carga')
  }
  const { isLoading, 
          data,
          error,
          isPreviousData,
          isFetching }= useGetProductos(pagina,onSuccess,onError)

  const deleteProductoMutation = useDeleteProducto()

  const sacarProducto = (producto) => {
    setModal((previo) => !previo);
    setEliminarProducto(producto);
  };

  if (isLoading) return < Spinner />;
  else if (error) return <div>{error.message}</div>;

  const {
    docs,
    totalDocs,
    limit,
    totalPages,
    page,
    prevPage,
    nextPage,
    hasNextPage,
    hasPrevPage,
  } = data.data;

   const UnaLinea = ({ producto }) => {
    const datos= [producto.descripcion,producto.precio,
      producto.talle,producto.stock];

    return (
      <>
        <td className="px-2 py-3">{producto.nombre}</td>
        <td>
          {" "}
          <img
            src={producto.img.url}
            className="w-25 h-16 rounded-lg my-1 object-fit"
          ></img>
        </td>
        <CuerpoTablaDatos datos={datos} />
        
        <td className="flex gap-2 justify-center items-center my-3">
          <button className="hover:border border-teal-700 p-2 rounded-md">
            <Link to={`/editarProducto/${producto._id}`}>
              <Pencil />
            </Link>
          </button>
          <button
            disabled={!user.isAdmin}
            className="hover:border border-red-500 p-2 rounded-md disabled:bg-gray-500"
            onClick={() => sacarProducto(producto)}
          >
            <Trash disabled={!user.isAdmin} fill={'red'}/>
          </button>
        </td>
      </>
    );
  };
  // hasta aca renderizacion del la inea de zapatilla

  return (
    <>
      {modal && (
        <ModalBajaProducto
         producto = {eliminarProducto} 
         deleteProductoMutation={deleteProductoMutation} 
        />
      )}
        <div className="overflow-x-auto ">
          <div className="border dark:border-neutral-700 bg-neutral-800 min-w-full px-2 rounded-lg">
            <table className="table-auto min-w-full text-xs text-center my-3 bg-neutral-800 font-poppins">
              <CabeceraTabla cabecera={cabeceraProductos} />

              <tbody>
                {docs.map((producto) => (
                  <tr
                    className="border-b dark:border-neutral-700 text-center"
                    key={producto._id}
                  >
                    <UnaLinea producto={producto} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Paginador page = {page} totalPages = {totalPages}
         isPreviuosData = {isPreviousData}  hasNextPage = {hasNextPage}
         pagina={pagina} setPagina={setPagina} isFetching={isFetching}/>
    </>
  );
}

export default TablaZap;
