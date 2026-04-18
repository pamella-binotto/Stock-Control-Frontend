import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ErrorMessage from "./components/ErrorMessage";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, error, handleCreate, handleDelete } = useProducts();

  return (
    <div>
      <h1>Stock</h1>

      
      <ErrorMessage message={error} />

      <ProductForm onCreate={handleCreate} />
      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
}

export default App;