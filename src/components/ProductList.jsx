import "./ProductList.css"
import formatPrice from "../utils/format"; "../utils/format"

function ProductList({ products, onDelete, onEdit, loading }) {


  if (loading) {
    return <p className="spinner">Loading...</p>;
  }

  if ( !loading && products.length === 0) {
    return <p style={{ marginTop: "20px", textAlign: "center" }}>No products found 📭.</p>;
  }


  return (
    <div className="product-flex">
      {products.map((product) => (

        <div className="product-card" key={product.id}>

          <div className="product-info">
            <strong>{product.name}</strong>
            <span>Quantity: {product.quantity}</span>
            <span>Price: {formatPrice(product.price)}</span>
            <span>Category: {product.category}</span>
          </div>


          <div className="product-actions">
            <button onClick={() => onDelete(product.id)}>Delete</button>
            <button onClick={() => onEdit(product)}>Edit</button>

          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;