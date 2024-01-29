import { useGlobal } from "../context/GlobalContext";
import TablaUsu from "./TablaUsu";
import TituloTabla from "../components/TituloTabla";
import { useGetUsers } from "../hook/useUsers";

function UsuariosPage() {
  const {
    isLoading,
    data: usuarios,
    isError,
    error,
  } = useGetUsers()

  const { vistaUsu, setVistaUsu } = useGlobal();


  
  if (isLoading) return <div>Cargando...</div>;
  
  else if (error) return <div>{error.message}</div>;

  return (
    <div className="container mx-auto px-2">
      <TituloTabla 
        titulo= {'Usuarios Registrados'}
        vista= {vistaUsu}
        setVista= {setVistaUsu }
      />

      {vistaUsu === "tabla" ? (
        <TablaUsu usuarios={usuarios} />
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 md:m-6">
          {usuarios.map((usuario) => (
            <div
              className="card bg-zinc-800 p-2 rounded-md "
              key={usuario._id}
            >
              <h4 className="font-bold text-cyan-500 md:text-2xl text-center">
                {usuario.username}
              </h4>
              <p className="text-xs text-center">{usuario._id}</p>
              <p className="text-xs md:text-sm text-center">{usuario.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsuariosPage;
