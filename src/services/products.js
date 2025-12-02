const BASE_URL = import.meta.env.VITE_API_URL;

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  
  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const products = await res.json();
  return products;
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("No se pudo obtener el producto");
  }

  const product = await res.json();
  return product;
};