import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import toast from "react-hot-toast";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [formKey, setFormKey] = useState(0);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      toast.error("Por favor completá todos los campos");
      return;
    }

    try {
      const loadingToast = toast.loading("Creando producto...");
      const imageUrl = await uploadToImgbb(file);

      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };

      await createProduct(productData);

      toast.success("¡Producto creado exitosamente!", { id: loadingToast });

      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      setFormKey(prev => prev + 1);
    } catch (error) {
      setErrors({ general: error.message });
      toast.error("Error al crear el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      key={formKey}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};