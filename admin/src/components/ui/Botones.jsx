import {Link } from 'react-router-dom'

export function BotonLink({to,children,onClick=null}) {
  return (
    <Link to={to}  onClick={()=> onClick()} className=" bg-zinc-600 hover:text-orange-400 p-2 rounded-md text-center w-full">       
      {children}
    </Link>
    
 )
};

export function BotonLinkNoClick({to,children}) {
  return (
    <Link to={to} className=" bg-zinc-600 hover:text-orange-400 p-2 rounded-md text-center w-full">       
      {children}
    </Link>
    
 )
};

