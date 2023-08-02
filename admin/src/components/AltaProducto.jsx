import { useMutation, useQueryClient } from "@tanstack/react-query";
import { altaProducto, getProducto,actualizarProducto } from "../api/productosAPI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MensajeError } from "./ui/MensajeError";
import { altaProductoSchema } from "../schemas/ProductoSchema";
import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom"; 
import toast from "react-hot-toast";

const AltaProducto = () => { 
  const queryClient = useQueryClient();
  const [image, setImage] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [zapa, setZapa] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    talle: 0
  })
  const navigate = useNavigate();
  const params = useParams();

  const altaProductoMutation = useMutation({
    mutationFn: altaProducto,
    onSuccess: async () => {
      queryClient.invalidateQueries("productos"),
      toast.success('Producto incorporado exitosamente')
      navigate(-1)
    }
  });
  const actualizarProductoMutation = useMutation({
    mutationFn: actualizarProducto,
    onSuccess: async () => {
      queryClient.invalidateQueries("productos"),
      toast.success('Producto actualizado exitosamente')
      navigate(-1)
    }
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(altaProductoSchema)
  });
  
  useEffect(() => {
    (async () => {if (params.id) {
      const producto = await getProducto(params.id);
      setZapa({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        talle: producto.talle
      })      
      setValue("nombre",producto.data.nombre)
      setValue("descripcion",producto.data.descripcion)
      setValue("precio",producto.data.precio)
      setValue("talle",producto.data.talle)
      setImage(producto.data.img.url)
      console.log(producto)
    }
  })();
  },[params.id]);

  const getImagen= (e) => {
    if (e.target.files[0] ) {
      convert2base64(e.target.files[0]);
    }
  } 

  const convert2base64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("precio", data.precio);
    formData.append("talle", data.talle);
    if (data.files[0]) {
      formData.append("image", data.files[0]);
    }
    if (!params.id) {
      altaProductoMutation.mutate(formData);
    } else {
      formData.append("id",params.id)
      actualizarProductoMutation.mutate(formData)
    }; 
    setEnviando(true);
  };

  return (
    <div className="flex justify-center items-center mx-auto mt-5 w-1/2">
      <div className="bg-zinc-700 w-full p-5 ">
        <fieldset className="flex  bg-slate-800  rounded-s justify-between items-center">
        <h4 className="text-center font-bold text-3xl px-3 py-2 text-teal-300">
          {" "}
          {params.id ? 'Editar Producto' : 'Alta Producto'}
          {" "}
        </h4>
        <Link className="px-3 py-2 text-sky-300 " to=".." relative="path">Regresar</Link>
        </fieldset>
        <form className="rounded-md " onSubmit={handleSubmit(submitForm)}>
          <fieldset className="flex flex-col my-2">
            <label className="text-sm" htmlFor="nombre">
              Nombre
            </label>
            <input
              className=" bg-zinc-500 text-white
                   px-4 py-3  mt-1 rounded"
              placeholder="Nombre"
              type="text"
              name="nombre"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "El nombre hay que ingresar si o si",
                },
                
              })}
            />
            {/* { errors.nombre && <small>{errors.nombre?.message}</small>}  */}
            <MensajeError error={errors.nombre?.message} />
          </fieldset>

          <fieldset className=" flex flex-col my-2">
            <label className="text-sm" htmlFor="descripcion">
              Descripcion
            </label>
            <textarea
              name="descripcion"
              rows="3"
              className="bg-zinc-500 text-white px-4 py-3 mt-1 rounded"
              placeholder="descripcion"
              {...register("descripcion", { required: true })}
            ></textarea>
            <MensajeError error={errors.descripcion?.message} />
          </fieldset>
          <div className="flex flex-col justify-around items-center lg:flex-row">
            <fieldset className="my-2 flex flex-col w-1/3">
              <label className="text-sm" htmlFor="precio">
                Precio
              </label>
              <input
                type="number"
                name="precio"
                className="bg-zinc-500 text-white px-4 py-2 rounded "
                {...register("precio", { required: true })}
              />
              {/* { errors.precio?.type === 'required' && <small>El Campo precio es obligatorio</small>} */}
              <MensajeError error={errors.precio?.message} />
            </fieldset>
            <fieldset className="my-2 flex flex-col">
              <label htmlFor="talle">Talle</label>
              <input
                className="bg-zinc-500 text-white px-4 py-2 rounded-s"
                type="number"
                name="talle"
                {...register("talle", { required: true })}
              />
              <MensajeError error={errors.talle?.message} />
            </fieldset>
          </div>

          <fieldset className="my-2 flex flex-col justify-start items-center">
            {image ? (
              <img className="rounded-s" src={image} width="450"></img>
            ) : null}
            <label
              htmlFor="image"
              className="text-sm block font-bold text-white"
            >
              Seleccione una imagen{" "}
            </label>
            <input
              type="file"
              {...register("files")}
              id="image"
              className="px-2 py-2 focus:outline-none rounded bg-gray-500 text-white w-full"
              onChange={getImagen}
            />
            {/* <strong>{watch("files")[0].name}</strong> */}
          </fieldset>

          <button
            className="bg-red-500 w-full text-white px-4 py-3 rounded-md mt-4"
            type="submit"
            disabled={enviando}
          >
            {enviando ? (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Enviando...
                </span>
              </div>
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AltaProducto;
