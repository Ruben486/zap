import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {
    darkMode: false,
    lienzo: 'var(--bg-claro)',
    fondo: 'var(--bg-claro)',
    color: 'black'
};
/* para fondo oscuro tomar fondo: var(--color-bg) color: var(--color-claro)*/
const themeReducer = (state,action) => {
    switch (action.type) {
        case "toggle":
          return (
            {
            lienzo: state.darkMode ? 'var(--bg-claro)' : 'var(--color-bg)',
            fondo: state.darkMode ? 'var(--bg-claro)' : 'var(--bg-dark-card)',
            color: state.darkMode ? 'black' : 'var(--color-claro)' ,  
            darkMode: !state.darkMode
        }
            )

        default:
            return state    
    } 
};

export const ThemeProvider = (props) => {
    const [state,dispatch] = useReducer(themeReducer,initialState)
    return (
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}