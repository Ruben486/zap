import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { useModifyZapMutation } from "../../api/zapApi";
import { useState, useEffect, useRef, useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import "./cardzap.css"

const CardZap = ({ producto }) => {
  const [addLike, { isLoading, error }] = useModifyZapMutation(producto);

  const [likes, setLikes] = useState(producto.votos);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const {cart, addProducto } = useContext(CartGlobalContext)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll(".card").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll(".card").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  const sumarLike = (id) => {
    setLikes(likes + 1);
    addLike({ ...producto, votos: likes + 1 });
  };
  const agregarProducto = ((producto) => {
     addProducto(producto)
})

  return (
    <div ref={ref} className="main col-md-4 mb-5 ">
      <div className="card h-100 p-2 mb-2 rounded d-flex flex-column card-zap">
        <LazyLoadImage effect="blur" src={producto.img.url} width={"100%"} />
        <div className="card-text text-center">
          <h6 className="display-6 fs-5 mt-3">{producto.titulo}</h6>
          <p className="display-5 precio fs-5"> $ {producto.precio} </p>
          <p className="text-muted fs-6 mt-2">{producto.descripcion}</p>
          <div className="card-zap-acciones fs-6">
            <Link
              to={`/detallezap/${producto._id}`}
              className="btn btn-outline-success mt-3 fs-6"
            >
              Detalle
            </Link>
            <button className="btn btn-primary mt-3 mx-3" onClick={() => addProducto(producto)}>
              Agregar al carrito
            </button>
            <div className="d-flex justify-content-between mt-3 align-items-end py-1">
              <button
                className="btn btn-primary "
                id="btn-like"
                onClick={() => sumarLike(producto._id)}
              >
                <i>
                  <BsHandThumbsUp />
                </i>{" "}
                Like
              </button>
              <p>
                <FcLike />
                <span className="like-counts">{likes}</span>
              </p>
              <p>
                <BsFillEyeFill />{" "}
                <span className="views-count"> {producto.vistas} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardZap;
