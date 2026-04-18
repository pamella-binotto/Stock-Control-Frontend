import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ErrorMessage from "./components/ErrorMessage";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, error, handleCreate, handleDelete, handleUpdate} = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  function handleEdit(product) {
  setEditingProduct(product);
}
  

  return (
    <div>
      <h1>Stock</h1>

      
      <ErrorMessage message={error} />

      <ProductForm onCreate={handleCreate}  editingProduct={editingProduct} onUpdate={handleUpdate} />
      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;