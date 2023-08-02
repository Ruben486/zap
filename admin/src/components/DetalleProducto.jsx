import TdZapatilla from "./ui/TdZapatilla";
import { useGlobal } from "../context/GlobalContext";
import { Pencil, Trash } from "../components/ui/icons";
const DetalleProducto = ({ producto }) => {
  const { modal, setModal, bajaProducto, setBajaProducto } = useGlobal();
  return (
    <div className="w-full">
      
        <td className="px-6 py-3">{producto.nombre}</td>
        <td>
          {" "}
          <img
            src={producto.img.url}
            className="min-[640px]:w-25 h-16 rounded-lg my-1"
          ></img>
        </td>
        <TdZapatilla datoZap={producto.descripcion} />
        <TdZapatilla datoZap={producto.precio} />
        <TdZapatilla datoZap={producto.talle} />
        <TdZapatilla datoZap={producto.stock} />
        <td>
          <button className="mr-10 hover:border border-teal-700 p-2 rounded-sm">
            <Pencil />
          </button>
          <button
            className="hover:border border-red-500 p-2"
            onClick={() => setModal((previo) => !previo)}
          >
            <Trash />
          </button>
        </td>

    </div>
  );
};
export default DetalleProducto;
