import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/authContext";
import { GlobalProvider } from "./context/GlobalContext";
import ProductosPage from "./pages/ProductosPage";
import UsuariosPage from "./pages/UsuariosPage";
import { ProtectorRuta } from "./components/RouteProtector";
import toast, { Toaster } from "react-hot-toast";
import InfiniteQueryZap from "./pages/InfiniteQuery.zap";
import TablaDeDatos from "./components/TablaDeDatos";
import EditarProducto from "./components/EditarProducto";
import AltaProducto from "./components/AltaProducto";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <BrowserRouter>
          <main className="container my-5 mx-auto px-4 md:px-0">
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* index Renderiza  en la salida del padre */}
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectorRuta />}>
                  <Route path="/productos" element={<ProductosPage />} />
                  <Route path="/productosIQ" element={<InfiniteQueryZap />} />
                  <Route path="/tabla" element={<TablaDeDatos />} />
                  <Route path="/usuarios" element={<UsuariosPage />} />
                  <Route path="/nuevoproducto" element={<AltaProducto />} />
                  <Route
                    path="/editarProducto/:id"
                    element={<EditarProducto />}
                  />
                </Route>
              </Route>
            </Routes>
            <Toaster />
          </main>
        </BrowserRouter>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
