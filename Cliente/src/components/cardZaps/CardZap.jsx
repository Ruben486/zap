import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { useModifyZapMutation } from "../../api/zapApi";
import { useState, useEffect, useRef, useContext } from "react";
import { CartGlobalContext } from "../../cartContext/GlobalContext";
import { themeContext } from "../../contextoTema/ContextoTema";
import { Corazon, Like, Ojo } from "../../ui/reactIcons/ReactIcons";
import "./cardzap.css";

const CardZap = ({ producto }) => {
  const [addLike, { isLoading, error }] = useModifyZapMutation(producto);
  const [likes, setLikes] = useState(producto.votos);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const { addProducto } = useContext(CartGlobalContext);
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;
  const color = tema.state.color;

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

  return (
    <div ref={ref} className="main col-md-4 mb-5 ">
      <div
        className="card h-100 p-2 mb-2 rounded d-flex flex-column card-zap"
        style={{
          background: darkMode
            ? "var(--bg-dark-card)"
            : "var(--gradiente-card)",
        }}
      >
        <div className="card-img-top imagen-card">
          <LazyLoadImage
            effect="black-and-white"
            src={producto.img.url}
            width={"100%"}
            alt = 'imagen zapatilla'
            threshold = {300}
            
          />
        </div>
        <div className="cuerpo-card text-center">
          <h6 className="display-6 fs-5 mt-3" style={{ color: color }}>
            {producto.nombre}
          </h6>
          <p className="precio display-5" style={{ color: color }}>
            $ {producto.precio}{" "}
          </p>
          <p className="fs-6 mt-2" style={{ color: color }}>
            {producto.descripcion}
          </p>
        </div>
        <div className="d-flex justify-content-between botones-card">
          <button
            className="button-card"
            onClick={() => sumarLike(producto._id)}
          >
            <Like /> Like
          </button>
          <Link to={`/detallezap/${producto._id}`} className="link-card">
            Detalle
          </Link>
          <button className="button-card" onClick={() => addProducto(producto)}>
            Agregar al carrito
          </button>
        </div>
        <div className="d-flex justify-content-between mt-3 align-items-end py-1">
          <p>
            <Corazon />
            <span className="like-counts" style={{ color: color }}>
              {likes}
            </span>
          </p>
          <p style={{ color: color }}>
            <Ojo /> <span className="views-count"> {producto.vistas} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardZap;
