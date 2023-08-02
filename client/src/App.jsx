import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import InterObserver from "./components/interObserver/InterObserver";
import DetalleZap from "./components/detZap/DetalleZap";
import DetalleCarrito from './components/manejoCarrito/detalleCarrito'
import { CartGlobalProvider } from "./cartContext/GlobalContext";
import VentanaModal from "./components/modal/VentanaModal";
function App() {
  return (
    <CartGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/observer" element={<InterObserver />} />
          <Route path="/detallezap/:zapId" element={<DetalleZap />} />
          <Route path="/carrito"  element={<DetalleCarrito />} />
          <Route path="/modal" element={<VentanaModal />} />
        </Routes>
      </BrowserRouter>
    </CartGlobalProvider>
  );
}
export default App;
