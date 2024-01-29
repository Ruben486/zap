import { BsChevronBarUp } from "react-icons/bs";
import { SlEnvelopeOpen } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlGrid } from "react-icons/sl";
import { IconContext } from "react-icons/lib";

const RetornoIcon = () => {
  return (
      <div className="d-flex justify-content-center gap-2">
    <IconContext.Provider value={{ color: "blue", size: "1.5rem" }}>
        <BsChevronBarUp />
        <SlHome />
        <SlEnvelopeOpen />
        <SlGrid />
    </IconContext.Provider>
      </div>
  );
};

export default RetornoIcon;
