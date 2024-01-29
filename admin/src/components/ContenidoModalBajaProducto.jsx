import { Trash } from "./ui/icons";
import { useGlobal } from "../context/GlobalContext";

const ContenidoModalBajaProducto = ({ producto,deleteProductoMutation }) => {
  const {setModal} = useGlobal();

  const procederBaja = () => {
    setModal((previo) => !previo);
    deleteProductoMutation.mutate(producto._id)
  };
  return (
    <>
      <div className="my-6 mx-auto">
        <img className="max-w-[450px] max-h-[300px] rounded-md " src={producto.img.url}  alt="" />
      </div>
      <p className="p-1 text-sm text-center">
        Se procederá a la eliminacion de la Base de datos del producto
      </p>
      <p className="p-1 text-center text-xl leading-8 text-white">{producto.nombre}</p>
      
      <div className="flex justify-around items-center gap-20 ">

      <button
        className="bg-blue-600 p-2 my-2 rounded-md hover:bg-red-600"
        onClick={() => setModal((previo) => !previo)}
      >
        Cancelar 
      </button>
      <button
        className="bg-blue-600 flex justify-center items-center gap-2 p-2 my-2 rounded-md hover:bg-red-700"
        onClick={procederBaja}
      >
        <span> <Trash disabled={false} fill={'white'}/> </span> Confirmar
      </button>
      </div>
    </>
  );
};

export default ContenidoModalBajaProducto;
