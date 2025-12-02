import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { SkeletonList } from "../SkeletonList/SkeletonList";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const validCategories = ["dulce", "salado"];
    const isInvalidCategory = categoryId && !validCategories.includes(categoryId);

    useEffect(() => {
        if (isInvalidCategory) {
            setLoading(false);
            return;
        }

        setLoading(true);

        getProducts()
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
    }, [categoryId, isInvalidCategory]);

    if (isInvalidCategory) {
        return <Navigate to="/" replace />;
    }

    const getTitle = () => {
        if (categoryId === "dulce") return "Productos dulces";
        if (categoryId === "salado") return "Productos salados";
        return titulo;
    };

    return (
        <>
            {!categoryId && (
                <section className="hero-section">
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet="/images/bg-hero-mobile.jpg"
                        />
                        <img
                            src="/images/bg-hero-desktop.jpg"
                            alt="Elaboración artesanal de productos de panadería"
                            className="hero-image"
                            loading="eager"
                        />
                    </picture>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">{titulo}</h1>
                        <p className="hero-subtitle">
                            Productos frescos hechos con amor de cada día
                        </p>
                    </div>
                </section>
            )}

            {!categoryId && (
                <div className="products-header">
                    <h2 className="products-title">Nuestros productos</h2>
                    <p className="products-subtitle">¡Explorá toda nuestra variedad artesanal!</p>
                </div>
            )}

            <section className="item-list-section">
                {categoryId && (
                    <div className="section-header">
                        <h3 className="section-title">{getTitle()}</h3>
                        <p className="section-subtitle">
                            ¡Descubrí nuestros deliciosos productos {categoryId}s!
                        </p>
                    </div>
                )}

                {loading ? (
                    <SkeletonList count={9} />
                ) : (
                    <ItemList lista={products} />
                )}
            </section>
        </>
    );
};