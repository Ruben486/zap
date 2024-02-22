import { createContext,useContext, useState  } from "react"

const GlobalContext = createContext();

export const useGlobal= () => {
    const contexto = useContext(GlobalContext);
    if (!contexto) throw new Error('no existe contexto global')
    return contexto
};
export const GlobalProvider = ({children}) => {
    const [modal, setModal] = useState(false)
    const [bajaProducto, setBajaProducto] = useState(false)
    const [vistaZap, setVistaZap] = useState('tabla')
    const [vistaUsu, setVistaUsu] = useState('tabla')
    const [paginaActual, setPaginaActual] = useState(1)
    return (
        <GlobalContext.Provider value={{modal, setModal, bajaProducto,setBajaProducto,vistaZap, setVistaZap,vistaUsu,setVistaUsu}}>
            {children}
        </GlobalContext.Provider>
    )
};
export default GlobalContext;



