import { arrowUp } from "../assets";
import estilos from "./ui/estilos";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <Link to={'/login'}>
      <button
        className={`bg-cyan-600 rounded-lg p-3 text-center text-[20px] mt-8 hover:cursor-pointer hover:bg-orange-600 ${estilos.flexCenter} flex-col`}
      >
        Empezar{" "}
        <img
          src={arrowUp}
          className="w-[25px] h-[25px] object-contain"
          alt=""
        />
      </button>
    </Link>
  );
};

export default GetStarted;
