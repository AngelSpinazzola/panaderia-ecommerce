import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Hubo un problema al buscar productos");
                }
                return res.json();
            })
            .then((data) => {
                if (categoryId) {
                    const filteredProducts = data.filter(
                        (prod) => prod.category === categoryId
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [categoryId]);

    const getTitle = () => {
        if (categoryId === "dulce") return "Productos Dulces";
        if (categoryId === "salado") return "Productos Salados";
        return titulo;
    };

    return (
        <section className="item-list-section">
            <div className="section-header">
                <h1 className="section-title">{getTitle()}</h1>
                <p className="section-subtitle">
                    {categoryId
                        ? `Descubre nuestros deliciosos productos ${categoryId}s`
                        : "Productos frescos hechos con amor cada día"}
                </p>
            </div>

            {loading ? (
                <div className="loading">
                    <p>Cargando productos...</p>
                </div>
            ) : (
                <ItemList lista={products} />
            )}
        </section>
    );
};