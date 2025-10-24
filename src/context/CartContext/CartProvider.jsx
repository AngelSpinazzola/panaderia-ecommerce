import { useState } from "react";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        return cart.some(p => p.id === id);
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            // Si existe, aumenta la cantidad
            setCart(cart.map(p => 
                p.id === item.id 
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            ));
        } else {
            // Si no existe, agrega con cantidad 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(p => p.id !== id));
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(id);
        } else {
            setCart(cart.map(p => 
                p.id === id 
                    ? { ...p, quantity: newQuantity }
                    : p
            ));
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    const values = {
        cart, 
        addItem, 
        removeItem,
        updateQuantity,
        clearCart, 
        getTotalItems,
        getTotalPrice
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}