import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Cart } from "../Cart/Cart";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCartContext();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalItems = getTotalItems();

    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/category/dulce">Dulces</Link>
                    </li>
                    <li>
                        <Link to="/category/salado">Salados</Link>
                    </li>
                    <li>
                        <button
                            className="cart-button"
                            onClick={() => setIsCartOpen(true)}
                            aria-label="Abrir carrito"
                        >
                            <HiOutlineShoppingBag />
                            {totalItems > 0 && (
                                <span className="cart-badge">{totalItems}</span>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>

            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};