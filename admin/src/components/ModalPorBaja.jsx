import { XCierre,Trash } from "../ui/Iconos";
import { useGlobal } from "../context/GlobalContext";

const ModalBajaProducto = ({ producto, deleteProductoMutation }) => {

  const {modal, setModal, bajaProducto, setBajaProducto} = useGlobal(); 
  
  const procederBaja = () => {
    setModal((previo) => !previo);
    deleteProductoMutation.mutate(producto._id)
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-neutral-800 bg-opacity-40">
      <div className="relative my-10 max-h-[650px] max-w-[600px] mx-auto bg-cyan-950 rounded-md p-2">
        <div className="w-full flex flex-col justify-center items-center">
          <h4 className="bg-cyan-900 p-4 w-full text-center text-3xl text-bold text-slate-300 rounded-md mt-1 leading-8">
            Confirmar baja producto
          </h4>
          <button
            className="absolute max-h-[20px] max-w-[20px] top-3 right-10 p-2 hover:text-orange-400"
            onClick={() => setModal((prev) => !prev)}
          >
            <XCierre />
          </button>
          <div className="my-6 mx-auto">
            <img
              className="max-w-[450px] max-h-[300px] rounded-md "
              src={producto.img.url}
              alt=""
            />
          </div>
          <p className="p-1 text-sm text-center">
            Se procederá a la eliminacion de la Base de datos del producto
          </p>
          <p className="p-1 text-center text-xl leading-8 text-white">
            {producto.nombre}
          </p>

          <div className="flex justify-around items-center gap-20 ">
            <button
              className="bg-blue-600 p-2 my-2 rounded-md hover:bg-red-600"
              onClick={() => setModal((previo) => !previo)}
            >Cancelar
            </button>
            <button
              className="bg-blue-600 flex justify-center items-center gap-2 p-2 my-2 rounded-md hover:bg-red-700"
              onClick={procederBaja}
            >
              <span>
                {" "}
                <Trash disabled={false} fill={"white"} />{" "}
              </span>{" "}
              Confirmar
            </button>
          </div>
        </div>
      </div>
      {/* <Modal titulo="Confirmar baja de Producto">
          <ContenidoModalBajaProducto
            producto={eliminarProducto}
            deleteProductoMutation={deleteProductoMutation}
          />
        </Modal> */}
    </div>
  );
};

export default ModalBajaProducto;
