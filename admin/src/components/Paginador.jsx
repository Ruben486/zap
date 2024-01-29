import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsChevronBarLeft,
  BsChevronBarRight,
} from "react-icons/bs";

import {FadeLoader} from "react-spinners";

const Paginador = (props) => {
  const { page, totalPages, isPreviousData, hasNextPage,pagina,setPagina,isFetching } = props
  return (
    <div className="flex justify-center items-center gap-2 py-2">
      <button
        className="flex items-center gap-2 text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
        onClick={() => setPagina(1)}
        disabled={page === 1}
      >
        <BsChevronBarLeft size={25} /> 1
      </button>
      <button
        className="flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
        onClick={() => setPagina((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        <BsArrowLeftCircle size={25} /> Previa
      </button>{" "}
      <div className=" flex text-cyan-300 text-xs rounded p-2 border border-solid border-blue-600">
        Pagina Actual: {page} de {totalPages}
      </div>
      <button
        className=" flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
        onClick={() => {
          if (!isPreviousData && hasNextPage) {
            setPagina((old) => old + 1);
          }
        }}
        disabled={isPreviousData || !hasNextPage}
      >
        Siguiente <BsArrowRightCircle size={25} />
      </button>
      <button
        className="flex gap-2 items-center text-xs bg-neutral-600 p-2 rounded disabled:text-gray-400 hover:text-emerald-300"
        onClick={() => setPagina(totalPages)}
        disabled={pagina === totalPages}
      >
        {" "}
        {totalPages} <BsChevronBarRight size={25} />{" "}
      </button>
      {isFetching ? (
        <span>
          {" "}
          <FadeLoader color="#36d7b7" /> Loading...
        </span>
      ) : null}{" "}
    </div>
  );
};

export default Paginador;
