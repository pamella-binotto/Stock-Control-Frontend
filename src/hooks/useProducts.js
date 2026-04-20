import { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() =>
        setSuccess(null),
        3000);

      return () => clearTimeout(timer);

    }
  }, [success])



  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(product) {
    try {
      const newProduct = await createProduct(product);
      setProducts((prev) => [...prev, newProduct]);
      setError(null);
      setSuccess("Product created successfully.")
    } catch (err) {
      setError("Failed to create product.");
      setSuccess(null);
    }
    finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {

    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setSuccess("Product deleted successfully ✅")
    } catch (err) {
      setError("Failed to delete product.");
      setSuccess(null);
    }
    finally {
      setLoading(false);
    }
  }

  async function handleUpdate(id, product) {
    try {
      const updated = await updateProduct(id, product);

      setProducts((prev) =>
        prev.map((p) => (p.id === id ? updated : p))
      );
      setError(null);
      setSuccess("Product updated successfully ✅")
    } catch (err) {
      setError("Failed to update product.");
      setSuccess(null)
    } finally {
      setLoading(false);
    }
  }


  return {
    products,
    error,
    success,
    loading,
    handleCreate,
    handleDelete,
    handleUpdate
  };
}