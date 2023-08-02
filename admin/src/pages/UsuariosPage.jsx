import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../api/usersAPI";
import Switch from "react-switch";
import { useState } from "react";

function UsuariosPage() {
  const {
    isLoading,
    data: usuarios,
    isError,
    error,
  } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsers,
  });
  const [perilla, setPerilla] = useState(false);

  const queryClient = useQueryClient();

  const handleChangeSwitch = () => {
    setPerilla(!perilla);
  };
  const clase = {
    bordeTabla: "border boder-gray-500",
    textoChico: "text-sm",
  }
  if (isLoading) return <div>Cargando...</div>;
  else if (error) return <div>{error.message}</div>;

  return (
    <div className="container mx-auto px-2">
      <div className="flex gap-2 mt-2 justify-end">
        <p className={clase.textoChico}>Tarjetas </p>
        <Switch
          onChange={handleChangeSwitch}
          checked={perilla}
          className="react-switch"
        />
        <p className={clase.textoChico}> Tabla</p>
      </div>
      <h3 className="text-bold text-center mt-2 text-3xl">
        Usuarios registrados
      </h3>
      {perilla ? (
        <table className="w-full text-center text-light text-sm border dark:border-neutral-700 mx-auto my-5 bg-neutral-800">
          <thead className="border-b dark:border-neutral-700 bg-slate-900">
            <tr>
              <th className="px-4 py-6">UserName </th>
              <th className="px-4 py-6">ID</th>
              <th className="px-4 py-6">EMail</th>
              <th className="px-4 py-6" >Administrador</th>
            </tr>
          </thead>
          <tbody >
            {usuarios.map((usuario) => (
              <tr className="border-b dark:border-neutral-700" key={usuario._id}>
                <td className="font-bold text-amber-500 text-sm md:text-md text-center px-3 py-4">
                  {usuario.username}
                </td>
                <td className="text-center text-sm lg:text-md p-2">
                  {usuario._id}
                </td>
                <td className="text-sm lg:text-md text-center p-2">
                  {usuario.email}
                </td>
                <td className="text-sm lg:text-md text-center p-2">
                  {usuario.isAdmin ? "Si" : "NO"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 md:m-6">
          {usuarios.map((usuario) => (
            <div
              className="card bg-zinc-600 md:p-2 rounded-md "
              key={usuario._id}
            >
              <h4 className="font-bold text-cyan-500 md:text-2xl text-center">
                {usuario.username}
              </h4>
              <p className="md:text-xs lg:text-xs text-center">{usuario._id}</p>
              <p className="text-xs md:text-sm text-center">{usuario.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsuariosPage;
