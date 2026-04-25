import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";
import { useProducts } from "./hooks/useProducts";
import "./App.css";

function App() {
  const { products, error, success, loading, handleCreate, handleDelete, handleUpdate} = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  function handleEdit(product) {
  setEditingProduct(product);
}

function handleCancelEdit() {
  clearError();
  setEditingProduct(null);
}

useEffect(() => {
  if (success){
    setEditingProduct(null);
  }
}, [success]);
  

  return (
    <div className="app-container">
      <h1 className="title">Stock</h1>

       {loading && <p className="loading">Loading...</p>}

      
      <ErrorMessage message={error?.general} />
      <SuccessMessage message={success} />

      <ProductForm onCreate={handleCreate}  editingProduct={editingProduct} 
      onUpdate={handleUpdate} onCancelEdit={handleCancelEdit} 
      loading={loading} error = {error} />
      
      <ProductList products={products} onDelete={handleDelete}
       onEdit={handleEdit}  />
    
    </div>
  );
}

export default App;