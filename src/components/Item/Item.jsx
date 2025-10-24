import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, description, imageUrl, children }) => {
  return (
    <Link to={`/detail/${id}`} className="product-link">
      <article className="product-item">
        <img src={imageUrl} alt={description} />
        <div className="product-content">
          <h2 className="product-title">{name}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">${price.toLocaleString('es-AR')}</p>
          {children && <div className="product-actions">{children}</div>}
        </div>
      </article>
    </Link>
  );
};