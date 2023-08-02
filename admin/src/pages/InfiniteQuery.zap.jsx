import { useInfiniteQuery } from "@tanstack/react-query";
import { listaProductos } from "../api/productosAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/ui/Spinner";
import { useNavigate } from "react-router-dom";

const InfiniteQueryZap = () => {
  const {
    data,
    status,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["productos"],
    queryFn: ({ pageParam = 1 }) => listaProductos(pageParam),
    getNextPageParam: (lastPage) => {
      console.log(lastPage.data.page);
      console.log(lastPage.data.totalPages);
      if (lastPage.data.page === lastPage.data.totalPages) return false;
      return lastPage.data.page + 1;
    },
  });
  const navigate = useNavigate()

  if (error) {
    return <div>error.message</div>;
  }
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  console.log(data.pages[0]);

  const { docs, totalDocs, limit, totalPages, page, prevPage, nextPage } =
    data.pages[0].data;
  console.log(docs);

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
    <div className="container">
      <p className="mt-4 text-center text-3xl text-orange-500">
        {zapasAr.length} articulos listados{" "}
      </p>
      <div className="container">
      <InfiniteScroll
        dataLength={zapasAr.length}
        next={() => fetchNextPage()}
        hasMore={hasNextPage || isLoading}
        loader={<Spinner />}
        endMessage={
          <p>
            <b>No hay mas Articulos para mostrar</b>
          </p>
        }
      >
        <div className="w-full md:grid md:grid-cols-3 md:gap-2">
        {zapasAr.map((zapa) => (
              <div className=" bg-stone-700 p-4 m-5 rounded-lg hover:bg-zinc-600 hover:cursor-pointer hover:p-1
               transition duration-0 hover:duration-300 ease-in-out" 
              key={zapa._id} onClick={() => editarProducto(zapa._id)}>
                <img
                  src={zapa.img.url}
                  alt=""
                  className="max-w-200 h-200 rounded-md "
                />
                <p className="text-sky-500 text-base md:text-2xl text-center p-1 mt-4 hover:text-red-500">
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
