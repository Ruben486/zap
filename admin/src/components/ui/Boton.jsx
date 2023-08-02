
export const Boton = (({onClick,children}) => {
  return (
    <button className= "bg-blue-600 px-4 py-1 rounded-md border:none disabled:bg-blue-900" 
      onClick={onClick}>
      {children}
    </button>
  )
}); 

