import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { BsCheckCircle } from "react-icons/bs";
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
    navigate("/");
  };

  const lote = String(detail.id ?? "").slice(-3).padStart(3, "0");
  const isDulce = detail.category === "dulce";

  return (
    <div className="ficha">
      <button className="ficha__back" onClick={handleGoBack}>
        <IoArrowBack /> Volver a la vidriera
      </button>

      <article className="ficha__container">
        <div className="ficha__media">
          <img src={detail.imageUrl} alt={detail.description} />
          <span className="ficha__seal" aria-hidden="true">
            <span className="ficha__seal-l1">lote</span>
            <span className="ficha__seal-l2">N.º {lote}</span>
            <span className="ficha__seal-l3">recién hecho</span>
          </span>
        </div>

        <div className="ficha__info">
          <header className="ficha__meta">
            <span className={`ficha__cat ficha__cat--${detail.category}`}>
              {isDulce ? <LuCakeSlice /> : <LuWheat />}
              <span>{isDulce ? "Dulce" : "Salado"}</span>
            </span>
            <span className="ficha__rule" aria-hidden="true"></span>
            <span className="ficha__lot">lote N.º {lote}</span>
          </header>

          <h1 className="ficha__title">{detail.name}</h1>

          <p className="ficha__desc">{detail.description}</p>

          <dl className="ficha__specs">
            <div>
              <dt>Horneado</dt>
              <dd>cada mañana</dd>
            </div>
            <div>
              <dt>Conservación</dt>
              <dd>48 h en lugar fresco</dd>
            </div>
            <div>
              <dt>Retiro</dt>
              <dd>en local · 7 a 20 h</dd>
            </div>
          </dl>

          <div className="ficha__buy">
            <span className="ficha__price-label">Precio</span>
            <span className="ficha__dots" aria-hidden="true"></span>
            <span className="ficha__price">
              ${detail.price?.toLocaleString("es-AR")}
            </span>
          </div>

          <button
            className={`ficha__cta${added ? " is-added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <BsCheckCircle /> Agregado a tu bolsa
              </>
            ) : (
              <>Agregar a la bolsa <span aria-hidden="true">+</span></>
            )}
          </button>
        </div>
      </article>
    </div>
  );
};
