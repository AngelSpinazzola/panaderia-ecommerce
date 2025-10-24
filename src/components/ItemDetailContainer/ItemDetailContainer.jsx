import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontró el producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main>
        <div className="loading-detail">
          <p>Cargando producto...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="product-not-found">
          <p>{error}</p>
          <button onClick={() => window.history.back()}>Volver</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ItemDetail detail={detail} />
    </main>
  );
};