import { useCartContext } from "../../context/CartContext/useCartContext";
import { IoClose } from "react-icons/io5";
import { BsCreditCard, BsTrash, BsPlus, BsDash } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Cart.css";

export const Cart = ({ isOpen, onClose }) => {
  const { cart, clearCart, removeItem, updateQuantity, getTotalPrice } = useCartContext();

  const handleIncrement = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity - 1);
  };

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>

      {/* Sidebar del carrito */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Mi Carrito</h2>
          <button className="cart-close" onClick={onClose} aria-label="Cerrar carrito">
            <IoClose />
          </button>
        </div>

        <div className="cart-content">
          {cart.length > 0 ? (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.imageUrl} alt={item.name} />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">${item.price.toLocaleString('es-AR')}</p>
                      
                      <div className="cart-item-controls">
                        <div className="quantity-controls">
                          <button 
                            className="qty-btn"
                            onClick={() => handleDecrement(item.id, item.quantity)}
                            aria-label="Disminuir cantidad"
                          >
                            <BsDash />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="qty-btn"
                            onClick={() => handleIncrement(item.id, item.quantity)}
                            aria-label="Aumentar cantidad"
                          >
                            <BsPlus />
                          </button>
                        </div>
                        
                        <button 
                          className="btn-remove"
                          onClick={() => removeItem(item.id)}
                          aria-label="Eliminar producto"
                        >
                          <BsTrash />
                        </button>
                      </div>
                      
                      <p className="cart-item-subtotal">
                        Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="cart-total-amount">${getTotalPrice().toLocaleString('es-AR')}</span>
                </div>
                <button className="btn-checkout">
                  <BsCreditCard />
                  Finalizar Compra
                </button>
                <button className="btn-clear-cart" onClick={clearCart}>
                  <BsTrash />
                  Vaciar Carrito
                </button>
              </div>
            </>
          ) : (
            <div className="cart-empty">
              <HiOutlineShoppingBag className="empty-icon" />
              <p>Tu carrito está vacío</p>
              <button className="btn-continue" onClick={onClose}>
                Seguir Comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};