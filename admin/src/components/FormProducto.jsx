import { useForm } from "react-hook-form";
import { MensajeError } from "./ui/MensajeError";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import estilos from "./ui/estilos";

const FormProducto = ({zapa,funcionMutacion}) => {
  const [image, setImage] = useState("");
  const [enviando, setEnviando] = useState(false)

  const navigate = useNavigate();
  const params = useParams();  
  useEffect(() => {
   (async () => {
     if (zapa._id) {
        setValue("nombre", zapa.nombre);
        setValue("descripcion", zapa.descripcion);
        setValue("precio", zapa.precio);
        setValue("talle", zapa.talle);
        setImage(zapa.img.url);
     }         
    })();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();
  
  const getImagen = (e) => {
    if (e.target.files[0]) {
      convert2base64(e.target.files[0]);
    }
  };

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
    };

    if (zapa._id) {
      formData.append("id", params.id);
    };

    funcionMutacion(formData);
    setEnviando(true)
    navigate(-1);
    
  };
  const flexCol = "flex flex-col my-2";
  const flexColStart = `w-full ${estilos.flexStart} flex-col my-2`;
  return (
    <div className="bg-zinc-700 w-full md:max-w-lg mx-auto mt-5 p-2 rounded-md">
      <fieldset className="flex bg-slate-800 rounded-s justify-between items-center">
        <h4 className="text-1xl text-center font-bold md:text-3xl px-3 py-2 text-teal-300">
          {" "}
          {params.id ? "Editar Producto" : "Alta Producto"}{" "}
        </h4>
        <Link className="px-3 py-2 text-sky-300 " to="/productos">
          Regresar
        </Link>
      </fieldset>
      <form
        className="text-sm rounded-md"
        onSubmit={handleSubmit(submitForm)}
      >
        <fieldset className={flexCol}>
          <label className="text-sm" htmlFor="nombre">
            Nombre
          </label>
          <input
            className=" bg-zinc-500 text-sm text-white px-4 py-2 mt-1 rounded"
            placeholder="Nombre"
            type="text"
            name="nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
            })}
          />
          { errors?.nombre && <MensajeError error = {errors.nombre?.message} />}  
          
        </fieldset>

        <fieldset className={flexCol}>
          <label className="text-xs" htmlFor="descripcion">
            Descripcion
          </label>
          <textarea
            name="descripcion"
            rows="3"
            className="bg-zinc-500 text-white px-4 py-2 mt-1 rounded"
            placeholder="descripcion"
            {...register("descripcion", { required: {
              value: true,
              message: 'Debe indicar descripción del producto'
            }
             })}
          ></textarea>
          <MensajeError error={errors.descripcion?.message} />
        </fieldset>

        <div className="w-full md:flex md:flex-row md:gap-4 md:justify-between  md:items-between">
          <div className="w-full">
            <fieldset className={flexColStart}>
              <label className="text-sm" htmlFor="precio">
                Precio
              </label>
              <input
                type="number"
                name="precio"
                className="bg-zinc-500 text-white p-2 
                            rounded-sm w-full 
                            md:max-w-[230px]"
                {...register("precio", { required: true })}
              />
              {/* { errors.precio?.type === 'required' && <small>El Campo precio es obligatorio</small>} */}
              <MensajeError error={errors.precio?.message} />
            </fieldset>
          </div>
          <div className="w-full ">
            {" "}
            {/* comentario */}
            <fieldset className={flexColStart}>
              <label className="text-sm" htmlFor="talle">
                Talle
              </label>
              <input
                className="bg-zinc-500 text-white p-2 
                             rounded-sm w-full 
                             md:max-w-[230px]"
                type="number"
                name="talle"
                {...register("talle", { required: {
                  value: true,
                  message: 'El talle del producto es requerido'
                } })}
              />
              <MensajeError error={errors.talle?.message} />
            </fieldset>
          </div>
        </div>

        <fieldset className="my-2 flex flex-col justify-start items-center">
          {image ? (
            <img className="w-full max-h-96 rounded-lg mb-2 object-cover overflow-y-auto" src={image}></img>
          ) : null}
          <label htmlFor="image" className="text-xs block font-bold text-white ">
            Seleccione una imagen{" "}
          </label>
          <input
            type="file"
            {...register("files")}
            id="image"
            className="px-2 py-2 focus:outline-none rounded bg-gray-500 text-white w-full"
            onChange={getImagen}
          />
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
  );
};

export default FormProducto;
