import { createContext, useReducer } from "react";

export const themeContext = createContext();
const temaOs = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(temaOs);
const initialState = temaOs
 ? {
    darkMode:  true,
    lienzo: 'var(--color-bg)',
    fondo: 'var(--bg-dark-card)',
    color: 'var(--color-claro)'    
 }
 : {
    darkMode: false,
    lienzo: 'var(--bg-claro)',
    fondo: 'var(--bg-claro)',
    color: '#242424'
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