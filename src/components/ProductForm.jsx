import { useState, useEffect } from "react";
import "./ProductForm.css";

function ProductForm({ onCreate, onUpdate, editingProduct, onCancelEdit, loading, error, success }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setQuantity(editingProduct.quantity);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
    } else{
      resetForm();
    }
  }, [editingProduct]);

  useEffect(() => {
  if (success) {
    resetForm();
  }
}, [success]);


  function resetForm() {
    setName("");
    setQuantity("");
    setPrice("");
    setCategory("");
  }

  function handleSubmit(e) {
    e.preventDefault();


    const product = {
      name,
      quantity: quantity === "" ? null : parseInt(quantity),
      price: price === "" ? null : parseFloat(parseFloat(price).toFixed(2)),
      category,
    };

    console.log("Enviando:", JSON.stringify(product));

    if (editingProduct) {
      onUpdate(editingProduct.id, product);
    } else {
      onCreate(product);
    }

  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input className={error?.name ? "input error" : "input"}
          placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {error?.name && (
          <p className="error-text"> {error.name}</p>
        )}
      </div>

      <div className="form-group">
        <input className={error?.quantity ? "input error" : "input"}
          placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        {error?.quantity && (
          <p className="error-text">{error.quantity}</p>
        )}
      </div>

      <div className="form-group">
        <input className={error?.price ? "input error" : "input"}
          placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />

        {error?.price && (
          <p className="error-text">{error.price}</p>
        )}
      </div>

      <div className="form-group">
        <input className={error?.category ? "input error" : "input"}
          placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />

        {error?.category && (
          <p className="error-text">{error.category}</p>
        )}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : editingProduct ? "Update" : "Register"}
      </button>


      {editingProduct && (
        <button
          type="button"
          onClick={() => {
            resetForm();
            onCancelEdit();
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ProductForm;