import { BsTable, BsCardHeading } from "react-icons/bs";
import estilos from "../components/ui/estilos";

const TituloTabla = ({titulo,vista,setVista}) => {
  return (
    <div className="flex gap-2 my-4 justify-between">
        <h3 className="text-bold text-center text-3xl text-cyan-400">
          {titulo}
        </h3>
        <ul
          className={`${estilos.flexCenter} gap-10 border border-gray-600 p-2 rounded-md`}
        >
          <li>
            <BsTable
              className={
                "p-0 hover:cursor-pointer hover:fill-blue-700" +
                (vista === "tabla" ? " fill-green-600" : " inherit")
              }
              size={30}
              onClick={() => setVista("tabla")}
            />
          </li>
          <li>
            <BsCardHeading
              className={
                "p-0 hover:cursor-pointer hover:fill-blue-700" +
                (vista === "cards" ? " fill-green-600" : " inherit")
              }
              size={30}
              onClick={() => setVista("cards")}
            />
          </li>
        </ul>
      </div>
  )
}

export default TituloTabla;