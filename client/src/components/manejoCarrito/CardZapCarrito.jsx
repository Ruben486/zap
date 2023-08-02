import { useContext } from 'react';
import { CartGlobalContext } from '../../cartContext/GlobalContext';
import { BsTrash3 } from "react-icons/bs"


function CardZapCarrito({ producto }) {
  const { deleteProducto } = useContext(CartGlobalContext)
  return (
    <div className="card mt-3 mb-3 shadow" style={{ maxWidth: '800px'}} >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={producto.img.url}
            className="img-fluid rounded-start p-2"
            alt="..."
            loading='lazy'
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex gap-2 justify-content-between">
          <div className= "card-body-1 col-md-8">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p>Talle: {producto.talle}</p>
          </div>
          <div className="card-body-2 col-md-4 d-flex flex-column justify-content-center align-items-end" >
            <h4 className="card-title display-6 border px-1 text-end rounded shadow"> $ {producto.precio}<span className="fs-6 align-middle">,00</span></h4>
            <button className="btn btn-secondary btn-sm mt-2" onClick={() => deleteProducto(producto._id)}> <span> <BsTrash3 /></span>
              Quitar</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardZapCarrito;
