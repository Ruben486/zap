import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useInfiniteProductos } from "../hook/useProductos";

const InfiniteQueryZap = () => {
  const navigate = useNavigate()
  const {
    data,
    status,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteProductos()
  
  if (error) {
    return <div>error.message</div>;
  }
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  };

  const { docs, totalDocs, limit, totalPages, page, prevPage, nextPage } =
    data.pages[0].data;
  // const zapas = data?.pages[0].data.docs ?? [];
  const zapasAr =
    data?.pages.reduce(
      (prevZapa, page) => prevZapa.concat(page.data.docs),
      []
    ) || [];

  const editarProducto = (id) => {
    navigate(`/editarProducto/${id}`)
  }    

  return (
    <div className="container border border-1 border-neutral-700 rounded-md">
      <p className="mt-4 text-center text-3xl text-orange-500">
        {zapasAr.length} articulos listados{" "}
      </p>
      <div className="container">
      <InfiniteScroll
        dataLength={zapasAr.length}
        next={() => fetchNextPage()}
        hasMore={hasNextPage || isLoading}
      >
        <div className="w-full md:grid md:grid-cols-3 md:gap-2">
        {zapasAr.map((zapa) => (
              <div className=" bg-neutral-700 p-4 m-5 rounded-lg hover:bg-stone-800 hover:cursor-pointer hover:p-1
               duration-300 ease-in border border-1 border-stone-700" 
              key={zapa._id} onClick={() => editarProducto(zapa._id)}>
                <img
                  src={zapa.img.url}
                  alt=""
                  className="w-md max-h-80 rounded-md"
                  loading="lazy"
                />
                <p className="text-sky-500 text-base md:text-1xl text-center p-1 mt-2 hover:text-red-500">
                  {zapa.nombre}
                </p>
              </div>
        ))}
        </div>
      </InfiniteScroll>
        </div>
    </div>
  );
};
export default InfiniteQueryZap;
