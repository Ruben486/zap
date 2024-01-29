import { cabeceraUsuarios } from "../components/ui/constantes";
import CuerpoTablaDatos from "../components/ui/CuerpoTablaDatos";
import CabeceraTabla from "../components/CabeceraTabla";

const TablaUsu = ({ usuarios }) => {
  return (
    <div className="wraper">
      <div className="border dark:border-neutral-700 bg-neutral-800 min-w-full px-2 rounded-lg">
        <table className="w-full text-center text-xs  dark:border-neutral-700 mx-auto my-5 bg-neutral-800">
          <CabeceraTabla cabecera={cabeceraUsuarios} />
          <tbody>
            {usuarios.map((usuario) => (
              <tr
                className="border-b dark:border-neutral-700"
                key={usuario._id}
              >
                {usuario.isAdmin ? (
                  <CuerpoTablaDatos
                    datos={[usuario.username, usuario._id, usuario.email, "Si"]}
                    clase={"text-cyan-400"}
                  />
                ) : (
                  <CuerpoTablaDatos
                    datos={[usuario.username, usuario._id, usuario.email, "NO"]}
                    clase={"text-amber-600"}
                  />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaUsu;
