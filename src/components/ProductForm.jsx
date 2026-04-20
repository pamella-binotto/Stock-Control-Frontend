import { useState, useEffect } from "react";

function ProductForm({ onCreate, onUpdate, editingProduct, onCancelEdit, loading }) {
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
    }
  }, [editingProduct]);


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
      quantity: Number(quantity),
      price: Number(price),
      category,
    };

    if (editingProduct) {
      onUpdate(editingProduct.id, product);
      onCancelEdit(); 
    } else {
      onCreate(product);
    }

    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button type="submit">
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