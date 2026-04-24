import { Link, useNavigate } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { IoLogOutOutline, IoClose } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Cart } from "../Cart/Cart";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useCartContext } from "../../context/CartContext/useCartContext";
import logo from "../../assets/images/logo.jpg";
import "./Nav.css";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logout } = useAuthContext();
  const { getTotalItems } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const close = () => setOpen(false);
  const totalItems = getTotalItems();

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav-inner">

          <div className="nav-left">
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menú">
              <span></span><span></span><span></span>
            </button>

            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/category/dulce">Dulces</Link></li>
              <li><Link to="/category/salado">Salados</Link></li>
            </ul>
          </div>

          <div className="nav-right">
            <button className="cart-btn" onClick={() => setIsCartOpen(true)} aria-label="Carrito">
              <TbShoppingCart />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>

            {user && (
              <button className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
                <IoLogOutOutline />
                <span className="logout-text">Salir</span>
              </button>
            )}
          </div>

        </div>
      </nav>

      {/* Menú mobile fullscreen */}
      <div className={`mobile-overlay${open ? " open" : ""}`}>
        <div className="mo-header">
          <Link to="/" className="mo-logo" onClick={close}>
            <img src={logo} alt="La Porteña" />
          </Link>
          <button className="mo-close" onClick={close} aria-label="Cerrar">
            <IoClose />
          </button>
        </div>

        <nav className="mo-nav">
          <Link to="/" className="mo-link" onClick={close}>
            <span>Inicio</span>
            <IoChevronForward />
          </Link>
          <Link to="/category/dulce" className="mo-link" onClick={close}>
            <span>Dulces</span>
            <IoChevronForward />
          </Link>
          <Link to="/category/salado" className="mo-link" onClick={close}>
            <span>Salados</span>
            <IoChevronForward />
          </Link>
          {user && (
            <button className="mo-link mo-logout-link" onClick={() => { handleLogout(); close(); }}>
              <span>Cerrar sesión</span>
              <IoChevronForward />
            </button>
          )}
        </nav>

        <Link to="/" className="mo-cta" onClick={close}>
          Ver productos
        </Link>

        <div className="mo-social">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
