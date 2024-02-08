import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import InterObserver from "./components/interObserver/InterObserver";
import DetalleZap from "./components/detZap/DetalleZap";
import DetalleCarrito from "./components/manejoCarrito/detalleCarrito";
import { CartGlobalProvider } from "./cartContext/GlobalContext";
import Navegacion from "./pages/navbar/Navegacion";
import VentanaModal from "./components/modal/VentanaModal";
import LinkCarrito from "./components/linkcarrito/LinkCarrito";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <CartGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/navmenu" element={<Navegacion />} />
            <Route path="/linkcarrito" element={<LinkCarrito />} />
            <Route path="/modal" element={<VentanaModal />} />
            <Route path="/hero" element={<Hero />} />
          </Route>
          <Route path="/observer" element={<InterObserver />} />
          <Route path="/detallezap/:zapId" element={<DetalleZap />} />
          <Route path="/carrito" element={<DetalleCarrito />} />
        </Routes>
      </BrowserRouter>
    </CartGlobalProvider>
  );
}
export default App;
