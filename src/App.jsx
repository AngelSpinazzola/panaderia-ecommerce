import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProductFormContainer } from "./components/AdminComponents/ProductFormContainer/ProductFormContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { ToastConfig } from "./utils/toastConfig";
import "./App.css";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-container">
          <ScrollToTop />
          <Nav />
          <main>
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<ItemListContainer titulo="Bienvenidos" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer titulo="Productos" />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />

              {/* Rutas de admin */}
              <Route path="/admin" element={<Login />} />
              <Route
                path="/admin/alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
            </Routes>
          </main>
          <Footer />

          <ToastConfig />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;