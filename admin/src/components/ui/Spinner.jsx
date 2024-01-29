import { FaSpinner } from "react-icons/fa";

export const Spinner = () => {
  return (
    <div className="flex justify-center m-30">
      <FaSpinner className="animate-spin" size={30}/> 
     </div>
  )
}