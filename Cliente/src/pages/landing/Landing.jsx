import { lazy } from "react";
import Navegacion from "../navbar/Navegacion";
import Hero from "../hero/Hero";
import ProductList from "../../components/ListarZaps/ProductList";
const Modal = lazy(() => import("../../components/modal/Modal"));
import constantes from "../../constantes/constantes";
import Contacto from "../../components/contacto/Contacto";
import Footer from "../../components/footer/Footer";
import NavRetorno from "../../components/retorno/NavRetorno";
import "./Landing.css";
import { useContext } from "react";
import { themeContext } from "../../contextoTema/ContextoTema";

function Landing() {
  const tema = useContext(themeContext);
  const darkMode = tema.state.darkMode;
  const lienzo = tema.state.lienzo;
  constantes.tituloModal = "Mensaje importante";
  constantes.subTituloModal = "¡ Gracias por tu compra !";
  constantes.parrafoModal =
    "Tu pedido sera enviado en las proximas 24 hs. Cualquier novedad te comunicamos a tu correo.";
    
  
  
  return (
    <section className="landing" style={{ background: lienzo }}>
      <Navegacion />
      <Hero />
      <div className="cuerpo-landing"
        style={{ background: darkMode ? "var(--color-bg" : "var(--bg-claro)" }}
      >
        <section className="m-retorno "><NavRetorno /></section>
          <ProductList />
          <Contacto />
        
      </div>
      <Modal imagen={"/img/olas1.png"} />
      <Footer />
    </section>
  );
}
export default Landing;
