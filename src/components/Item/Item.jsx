import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, description, imageUrl, children }) => {
  const lote = String(id ?? "").slice(-3).padStart(3, "0");

  return (
    <Link to={`/detail/${id}`} className="card-link">
      <article className="card">
        <div className="card__media">
          <img src={imageUrl} alt={description} />
          <span className="card__seal" aria-hidden="true">
            <span className="card__seal-top">lote</span>
            <span className="card__seal-num">N.º {lote}</span>
          </span>
        </div>

        <div className="card__body">
          <h2 className="card__title">{name}</h2>
          <p className="card__desc">{description}</p>

          <div className="card__foot">
            <span className="card__price">
              ${price.toLocaleString("es-AR")}
            </span>
            <span className="card__dots" aria-hidden="true"></span>
            <span className="card__cta">ver detalle →</span>
          </div>

          {children && <div className="card__actions">{children}</div>}
        </div>
      </article>
    </Link>
  );
};
