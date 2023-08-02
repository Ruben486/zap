import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { listaProductos, deleteProducto } from "../api/productosAPI";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PlusSvg, Pencil, Trash } from "../components/ui/icons";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsChevronBarLeft,
  BsChevronBarRight,
  BsTable,
  BsCardHeading
} from "react-icons/bs";
import { FadeLoader } from "react-spinners";
import ThZapatillas from "../components/ui/ThZapatillas";
import TdZapatilla from "../components/ui/TdZapatilla";
import { useGlobal } from "../context/GlobalContext";
import { useAuth } from "../context/authContext";
import Modal from "../components/Modal";
import ContenidoModal from "../components/ContenidoModal";


function ProductosPage() {
  const [pagina, setPagina] = useState(1);
  const [eliminarproducto, setEliminarProducto] = useState({});
  const { user } = useAuth();
  const { modal, setModal } = useGlobal();
  const [vista, setVista] = useState('tabla');

  const { isLoading, data, isError, error, isPreviousData, isFetching } =
    useQuery({
      queryKey: ["productos", pagina],
      queryFn: () => listaProductos(pagina),
      keepPreviousData: true,
    });

  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProducto,
    onSuccess: () => {
      queryClient.invalidateQueries("productos");
    },
  });

  const sacarProducto = (producto) => {
    setModal((previo) => !previo);
    setEliminarProducto(producto);
  };

  if (isLoading) return <div>cargando...</div>;
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

  // Renderizacion del paginator
  const Paginator = () => {
    return (
      <div className="flex justify-center items-center gap-2 py-2">
        <button
          className="flex items-center gap-2 text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
          onClick={() => setPagina(1)}
          disabled={page === 1}
        >
          <BsChevronBarLeft size={25} /> 1
        </button>
        <button
          className="flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
          onClick={() => setPagina((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          <BsArrowLeftCircle size={25} /> Previa
        </button>{" "}
        <div className=" flex text-cyan-300 text-xs rounded p-2 border border-solid border-blue-600">
          Pagina Actual: {page} de {totalPages}
        </div>
        <button
          className=" flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
          onClick={() => {
            if (!isPreviousData && hasNextPage) {
              setPagina((old) => old + 1);
            }
          }}
          disabled={isPreviousData || !hasNextPage}
        >
          Siguiente <BsArrowRightCircle size={25} />
        </button>
        <button
          className="flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
          onClick={() => setPagina(totalPages)}
          disabled={pagina === totalPages}
        >
          {" "}
          {totalPages} <BsChevronBarRight size={25} />{" "}
        </button>
        {isFetching ? (
          <span>
            {" "}
            <FadeLoader color="#36d7b7" /> Loading...
          </span>
        ) : null}{" "}
      </div>
    );
  };

  // Renderizacion de un componente
  const UnaLinea = ({ producto }) => {
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
        <TdZapatilla datoZap={producto.descripcion} />
        <TdZapatilla datoZap={producto.precio} />
        <TdZapatilla datoZap={producto.talle} />
        <TdZapatilla datoZap={producto.stock} />

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
            <Trash disabled={!user.isAdmin} />
          </button>
        </td>
      </>
    );
  };
  // hasta aca renderizacion del la inea de zapatilla
  
  return (
    <>
      {modal && (
        <Modal titulo="Confirmar baja de Producto">
          <ContenidoModal
            producto={eliminarproducto}
            deleteProductMutation={deleteProductMutation}
          />
        </Modal>
      )}
      {vista === 'tabla' ? (
        console.log('tabla')
      )
       : (console.log('card'))}
      <section className="w-full mx-auto px-1 lg:px-5 ">
        <div className="flex justify-between items-center my-3"> 
          <h4 className="text-3xl text-cyan-200 text-center">Productos</h4>
          <ul className="flex justify-center gap-10 ">
             <li >
              <BsTable className="bg-cyan-700" size={30} onClick={() => setVista('tabla')}/>
             </li>
              <BsCardHeading className="bg-cyan-700" size={30} onClick={()=> setVista('cards')}/>
             <li>
             </li>
          </ul>
          <button className="bg-indigo-400 hover:bg-red-400 px-3 py-2 rounded-md mb-3 text-sm md:text-base">
            <Link
              className="flex flex-col justify-center items-center gp-2"
              to="/nuevoproducto"
            >
              <PlusSvg size={25} />
            </Link>{" "}
            Nuevo Producto
          </button>
        </div>
        <div className="overflow-x-auto  ">
          <div className="inline-block border dark:border-neutral-700 bg-neutral-800 min-w-full px-2 py-2 rounded-lg">
            <table className="table-auto min-w-full text-xs text-center  my-3 bg-neutral-800">
              <thead className="border-b text-xs bg-slate-800 dark:border-neutral-700">
                <tr>
                  <ThZapatillas titulo={"Nombre"} />
                  <ThZapatillas titulo={"Imagem"} />
                  <ThZapatillas titulo={"Descripcion"} />
                  <ThZapatillas titulo={"Precio"} />
                  <ThZapatillas titulo={"Talle"} />
                  <ThZapatillas titulo={"Stock"} />
                  <ThZapatillas titulo={"Operaciones"} />
                </tr>
              </thead>
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
        <Paginator />
      </section>
    </>
  );
}

export default ProductosPage;
