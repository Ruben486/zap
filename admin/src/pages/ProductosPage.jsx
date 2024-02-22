import { Link } from "react-router-dom";
import { PlusSvg } from "../ui/Iconos";
import { useGlobal } from "../context/GlobalContext";
import InfiniteQueryZap from "./InfiniteQuery.zap";
import TablaZap from "./Tabla.zap";
import TituloTabla from "../components/TituloTabla";

function ProductosPage() {
  const { vistaZap, setVistaZap } = useGlobal();
  return (
    <section className="container mx-auto px-2">
      <TituloTabla
        titulo={"Productos"}
        vista={vistaZap}
        setVista={setVistaZap}
      />
      <div className="flex justify-center">
        <button className="bg-indigo-400 hover:bg-red-400 p-3 mb-2 rounded-md  text-sm md:text-base">
          <Link
            className="text-sm flex gap-2 justify-center items-center font-roboto"
            to="/nuevoproducto"
          >
            <PlusSvg size={20} />
            Nuevo Producto
          </Link>
        </button>
      </div>

      {vistaZap === "tabla" ? <TablaZap /> : <InfiniteQueryZap />}
    </section>
  );
}
export default ProductosPage;
