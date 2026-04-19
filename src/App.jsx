import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";
import { useProducts } from "./hooks/useProducts";


function App() {
  const { products, error, success, handleCreate, handleDelete, handleUpdate} = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  function handleEdit(product) {
  setEditingProduct(product);
}

function handleCancelEdit() {
  setEditingProduct(null);
}
  

  return (
    <div>
      <h1>Stock</h1>

      
      <ErrorMessage message={error} />
      <SuccessMessage message={success} />

      <ProductForm onCreate={handleCreate}  editingProduct={editingProduct} 
      onUpdate={handleUpdate} onCancelEdit={handleCancelEdit} />
      
      <ProductList products={products} onDelete={handleDelete}
       onEdit={handleEdit}  />
    
    </div>
  );
}

export default App;