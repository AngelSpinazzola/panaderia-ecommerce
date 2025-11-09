import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <main className="flex-1">
            <Nav/>
            <Routes>
              <Route path="/" element={<ItemListContainer titulo="Bienvenidos" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer titulo="Productos" />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;