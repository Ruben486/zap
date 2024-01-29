import { useGlobal } from "../context/GlobalContext";
import { XCierre } from "../components/ui/icons";

const Modal = (props) => {
  const { children, titulo, opacidad } = props;
  const {modal, setModal, bajaProducto, setBajaProducto } = useGlobal();

  return (
      <div className="fixed left-0 top-0 w-full h-full bg-neutral-800 bg-opacity-40">
        <div className="relative my-20 max-h-[650px] max-w-[600px] mx-auto bg-cyan-950 rounded-md p-2">
          <div className="w-full flex flex-col justify-center items-center">
            <h4 className="bg-cyan-900 p-4 w-full text-center text-3xl text-bold text-slate-300 rounded-md mt-1 leading-8">
              {titulo}
            </h4>
            <button
              className="absolute max-h-[20px] max-w-[20px] top-3 right-10 p-2 hover:text-orange-400"
              onClick={() => setModal((prev) => !prev)}
            >
              <XCierre />
            </button>
            {children}
            
          </div>
        </div>
      </div>
  );
};
export default Modal;
