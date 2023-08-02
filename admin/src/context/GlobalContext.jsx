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
    return (
        <GlobalContext.Provider value={{modal, setModal, bajaProducto,setBajaProducto}}>
            {children}
        </GlobalContext.Provider>
    )
};
export default GlobalContext;



