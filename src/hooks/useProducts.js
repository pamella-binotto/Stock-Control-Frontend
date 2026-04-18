import { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products.");
    }
  }

  async function handleCreate(product) {
    try {
      const newProduct = await createProduct(product);
      setProducts((prev) => [...prev, newProduct]);
      setError(null);
    } catch (err) {
      setError("Failed to create product.");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError("Failed to delete product.");
    }
  }

  async function handleUpdate(id, product) {
  try {
    const updated = await updateProduct(id, product);

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updated : p))
    );

    setError(null);
  } catch (err) {
    setError("Failed to update product.");
  }
}

  return {
    products,
    error,
    handleCreate,
    handleDelete,
    handleUpdate
  };
}