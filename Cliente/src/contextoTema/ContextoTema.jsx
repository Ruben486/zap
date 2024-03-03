import { createContext, useReducer } from "react";

export const themeContext = createContext();
const temaOs = window.matchMedia('(prefers-color-scheme: dark)').matches;
let esMobile = false;

if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) || 
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)) {
    esMobile= true
    }   
    console.log(esMobile);
    
const initialState = temaOs
 ? {
    darkMode:  true,
    lienzo: 'var(--color-bg)',
    fondo: 'var(--bg-dark-card)',
    color: 'var(--color-claro)',
    esDesktop: true,    
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