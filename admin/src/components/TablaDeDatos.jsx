import CabeceraTabla from "./CabeceraTabla";

const TablaDeDatos = ({children}) => {
  return (
    <section className="w-full mx-auto mt-5 px-1 lg:px-5 ">
      <div className="overflow-x-auto  ">
        <div className="inline-block border dark:border-neutral-700 bg-neutral-800 min-w-full p-2 rounded-lg">
          <table className="table-auto min-w-full text-xs text-center  my-3 bg-neutral-800">
            <CabeceraTabla cabecera={['columna1','columna2','columna3']}/> 
            {children}
          </table>
        </div>
      </div>
    </section>
  );
};

export default TablaDeDatos;
