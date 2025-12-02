import { Link, useNavigate } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useCartContext } from "../../context/CartContext/useCartContext";
import logo from "../../assets/images/logo.jpg";
import "./Nav.css";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { user, logout } = useAuthContext();
  const { getTotalItems } = useCartContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const totalItems = getTotalItems();

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">

          <div className="nav-left">
            <Link to="/" className="logo">
              <img src={logo} alt="La Porteña" className="logo-img" />
            </Link>

            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/category/dulce">Dulces</Link></li>
              <li><Link to="/category/salado">Salados</Link></li>
            </ul>
          </div>

          <div className="nav-right">
            <button
              className="cart-btn"
              onClick={() => setIsCartOpen(true)}
            >
              <TbShoppingCart />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            {user && (
              <button
                className="logout-btn"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <IoLogOutOutline />
                <span className="logout-text">Salir</span>
              </button>
            )}

            <button
              className="burger"
              onClick={() => setOpen(!open)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>

        </div>

        {open && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link to="/category/dulce" onClick={() => setOpen(false)}>Dulces</Link>
            <Link to="/category/salado" onClick={() => setOpen(false)}>Salados</Link>

            {user && (
              <button
                className="mobile-logout"
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
              >
                Cerrar sesión
              </button>
            )}
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};