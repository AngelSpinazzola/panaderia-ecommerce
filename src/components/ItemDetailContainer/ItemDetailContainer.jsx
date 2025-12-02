import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SkeletonDetail } from "../SkeletonDetail/SkeletonDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((product) => {
        setDetail(product);
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
        <SkeletonDetail />
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