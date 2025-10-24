import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list-container">
      {lista.length ? (
        lista.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))
      ) : (
        <p className="no-products">No hay productos disponibles</p>
      )}
    </div>
  );
};