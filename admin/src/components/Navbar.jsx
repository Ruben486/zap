import { BotonLink, BotonLinkNoClick } from "./ui/Botones";
import {} from "./ui";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { BsHouse } from "react-icons/bs";
import { XCierre, Hamburguesa } from "../components/ui/icons";
import { useState } from "react";
import estilos from "./ui/estilos";

function Navbar() {
  const { user, logout } = useAuth();
  const [hamburguesa, setHamburguesa] = useState(true);
  const [verMenu, setVerMenu] = useState(false);

  const toggleMenu = () => {
    setHamburguesa((prev) => !prev);
    setVerMenu((previo) => !previo);
  };

  const Menu = (user) => {
    return (
      <>
        {user.user ? (
          <>
            <Link
              className={`w-full ${estilos.flexCenter} flex-col text-sm md:text-base hover:text-red-500`}
              to={"/"}
              onClick={toggleMenu}
            >
              <BsHouse size={25} />
              <p className="text-sm">Home</p>
            </Link>

            <li className="w-full flex ">
              <BotonLink to={"/productos"} onClick={toggleMenu}>
                Productos
              </BotonLink>
            </li>
            <li className="flex w-full">
              <BotonLink to={"/usuarios"} onClick={toggleMenu}>
                Usuarios
              </BotonLink>
            </li>
            <li className="flex w-full">
              <BotonLink to={"/tabla"} onClick={toggleMenu}>
                Tabla
              </BotonLink>
            </li>
            <li className={`w-full ${estilos.flexCenter} hover:text-cyan-400 `}>
              <NavLink
                className=" bg-zinc-600  p-2 rounded-md text-center w-full font-roboto text-sm"
                to={"/"}
                onClick={() => logout()}
              >
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="w-full flex">
              <BotonLinkNoClick to={"/login"}>Login</BotonLinkNoClick>
            </li>
            <li className="w-full flex">
              <BotonLinkNoClick to={"/register"}>Register</BotonLinkNoClick>
            </li>
          </>
        )}
      </>
    );
  };

  return (
    <header>
      <nav className="container relative flex text-sm md:text-base justify-between items-start md:items-center bg-neutral-700 py-2 px-4 rounded-md">
        <div>
          <h1 className="text-2xl md:text-3xl md:bold">Panel de Admin</h1>
          <h5> {user.username} </h5>
        </div>
        <div className="flex collapse md:visible justify-end items-center">
          <ul
            className="flex border border-neutral-600 md:border-none 
          p-2 items-center gap-5 flex-col md:flex-row"
          >
            <Menu user={user.username} />
          </ul>

          <button
            className={`${estilos.flexStart} flex-col visible md:hidden`}
            onClick={toggleMenu}
          >
            {hamburguesa ? <Hamburguesa /> : <XCierre />}
          </button>
        </div>
        {verMenu && (
          <ul
            className="absolute right-0 top-20 flex border border-neutral-600  p-2 items-center gap-3 
        flex-col md:hidden bg-neutral-800 rounded-md shadow-md "
          >
            <Menu user={user.username} />
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
