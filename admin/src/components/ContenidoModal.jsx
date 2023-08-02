import { TrashModal } from "../components/ui/icons";
import { useGlobal } from "../context/GlobalContext";

const ContenidoModal = ({ producto,deleteProductMutation }) => {
  const {setModal} = useGlobal();

  const procederBaja = () => {
    setModal((previo) => !previo);
    deleteProductMutation.mutate(producto._id)
  };
  return (
    <>
      <div className="my-6 mx-auto">
        <TrashModal />
      </div>
      <p className="p-1 text-center">
        Se procederá a la eliminacion de la Base de datos del producto
      </p>
      <p className="p-1 text-center text-2xl leading-8 text-orange-500">{producto.nombre}</p>
      <p className="p-1 text-center text-2xl leading-8 text-orange-500">{producto.descripcion}</p>
      <div className="flex justify-around items-center gap-20 ">

      <button
        className="bg-orange-500 px-2 py-2 my-2 rounded-md hover:bg-red-600"
        onClick={() => setModal((previo) => !previo)}
      >
        Cancelar 
      </button>
      <button
        className="bg-orange-400 px-2 py-2 my-2 rounded-md hover:bg-red-700"
        onClick={procederBaja}
      >
        Confirmar
      </button>
      </div>
    </>
  );
};

export default ContenidoModal;
