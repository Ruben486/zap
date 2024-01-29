import "./Contacto.css";
import Logo from "../../ui/logo";
import { useState, useRef } from "react";
import NavRetorno from "../retorno/NavRetorno";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE,
        import.meta.env.VITE_MAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_MAIL_SERIAL
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contacto" id="contacto">
      <div className="box-contacto">
        {/* <section className="c-navegacion">
        <NavRetorno />
        </section> */}
        <section className="c-izq-side">
          <h5 className="c-titulo">Envianos tus comentarios</h5>
          <div className="c-imagen">
            <Logo ancho={120} alto={120} />
          </div>
        </section>
        <section className="c-der-side">
          <form ref= {form} action="" onSubmit={handleSubmit}>
            <fieldset className="mb-3">
              <label htmlFor="user_name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                id="user_name"
                placeholder="Nombre"
                required
              />
            </fieldset>
            <fieldset className="mb-3">
              <label htmlFor="user_email" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                id="user_email"
                placeholder="nombre@correo.com"
                required
              />
            </fieldset>
            <fieldset className="mb-3">
              <label htmlFor="user-message" className="form-label">
                Mensaje
              </label>
              <textarea
                type="textarea"
                name="user_message"
                id="user_message"
                className="form-control"
                placeholder="Tu comentario"
                required
              ></textarea>
            </fieldset>
            <div className="pieform">
              <input
                type="submit"
                value="Enviar"
                className="c-button g-button"
              />
              <span className="c-saludo small">
                {done && "Muchas gracias por contactarse !!"}
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
