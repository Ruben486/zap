import Navegacion from "./Navegacion";
import Hero from "./Hero";
import ProductList from "../components/ListarZaps/ProductList";
import LinkCarrito from "../components/manejoCarrito/linkCarrito";
import Modal from '../components/modal/Modal';

function Landing() {  
  return (
    <div className="container">
      <LinkCarrito />
      <Navegacion />
      <Hero />
      <ProductList />
      <Modal 
      titulo={'Gracias por tu compra !'} 
      parrafo={'Tu pedido sera enviado en las proximas 24 hs. Cualquier novedad te comunicamos a tu correo'}
      imagen={"/img/olas1.png"}/> 
    </div>
  );
}
export default Landing;
