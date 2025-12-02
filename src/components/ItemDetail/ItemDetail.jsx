import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { BsCartPlus, BsCheckCircle } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { LuCakeSlice, LuWheat } from "react-icons/lu";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(detail);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={detail.imageUrl} alt={detail.description} />
        </div>

        <div className="product-detail-info">
          <div className="product-category">
            {detail.category === "dulce" ? (
              <>
                <LuCakeSlice className="category-icon" />
                <span>Dulce</span>
              </>
            ) : (
              <>
                <LuWheat className="category-icon" />
                <span>Salado</span>
              </>
            )}
          </div>

          <h1 className="product-detail-title">{detail.name}</h1>

          <p className="product-detail-description">{detail.description}</p>

          <div className="product-detail-price">
            ${detail.price?.toLocaleString('es-AR')}
          </div>

          <div className="product-detail-actions">
            <button className="btn-back" onClick={handleGoBack}>
              <IoArrowBack className="btn-icon" />
              Volver
            </button>
            <button
              className={`btn-add-to-cart ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <BsCheckCircle className="btn-icon" />
                  ¡Agregado!
                </>
              ) : (
                <>
                  <BsCartPlus className="btn-icon" />
                  Agregar al Carrito
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};