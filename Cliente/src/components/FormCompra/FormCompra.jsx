import { useContext } from "react";
import { useAltaOrderMutation } from "../../api/OrderApi";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { CartGlobalContext } from "../../cartContext/GlobalContext";

const FormCompra = () => {
  const { cart, modal, totalCart, resetCart, activarModal } =
    useContext(CartGlobalContext);
  const [altaOrder, { error }] = useAltaOrderMutation();
  const navegar = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datos = Object.fromEntries(formData);
    const productos = cart.map((cartZap) => ({
      productId: cartZap._id,
      quantity: 1,
    }));
    const newOrden = {
      productos: [...productos],
      total: totalCart,
      nya: datos.nomyAp,
      direccion: datos.domicilio,
      correo: datos.correo,
      status: "P",
      descripcion: "Orden de Compra",
    };
    altaOrder(newOrden);
    if (error) {
      throw Error;
    }
    resetCart();
    activarModal();
    navegar("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="floatingNombre">
            Nombre y Apellido:
          </label>
          <input
            className="form-control"
            type="string"
            name="nomyAp"
            placeholder="Nombre y Apellido"
            required
            id="floatingNombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="floatingDomicilio">
            Domicilio completo:{" "}
          </label>
          <textarea
            className="form-control"
            type="string"
            name="domicilio"
            id="floatingDomicilio"
            required
            placeholder="Domicilio completo"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="FloatingCorreo" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="correo"
            className="form-control"
            required
            placeholder="tucorreo@ejemplo.com"
            id="floatingCorreo"
          />
        </div>

        <p>
          El pago se realiza por medio de transferencia bancaria a nombre de
          empresa SA. <br />
          Se envia la mercadería al domicilio consignado hasta 24 hs luego de
          efectuarse la compra.
          <br />
          Cualquier novedad se comunica por correo electronico a la direccion
          consignada.
          <br />
          Se acepta la devolución de la mercadería hasta 48hs luego de la
          compra, el gasto de envio de la devolución corre por cuenta del
          cliente.
          <br />
          Al presionar el boton comprar acepta los términos y condiciones
          expuestos y solo en caso de pago efectuado se reserva la mercaderia
          para su envío.
        </p>
        <button className="btn btn-danger btn-lg mt-3 py-2 w-100" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};
export default FormCompra;
