import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";
import { useProducts } from "./hooks/useProducts";
import "./App.css";

function App() {
  const { products, error, success, loading, handleCreate, handleDelete, handleUpdate } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase()));

  function handleEdit(product) {
    setEditingProduct(product);
  }

  function handleCancelEdit() {
    clearError();
    setEditingProduct(null);
  }

  useEffect(() => {
    if (success) {
      setEditingProduct(null);
    }
  }, [success]);


  return (
    <div className="app-container">
      <h1 className="title">Stock</h1>

      {loading && <p className="loading">Loading...</p>}


      <ErrorMessage message={error?.general} />
      <SuccessMessage message={success} />

      <ProductForm onCreate={handleCreate} editingProduct={editingProduct}
        onUpdate={handleUpdate} onCancelEdit={handleCancelEdit}
        loading={loading} error={error} />


      <input className="input" placeholder="Search product..." value={search}
        onChange={(e) => setSearch(e.target.value)} />

      <ProductList products={filteredProducts} onDelete={handleDelete}
        onEdit={handleEdit} loading={loading}/>

    </div>
  );
}

export default App;