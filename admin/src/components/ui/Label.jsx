export function Label({htmlFor, children}) {
  return (
    <label htmlFor={htmlFor} className="text-xs my-1" >
      {children}
    </label> 
  )
}
