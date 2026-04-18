import { useState, useEffect } from "react";

function ProductForm({ onCreate, onUpdate, editingProduct }) {
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
  } else {
    onCreate(product);
  }

    onCreate(product);

    setName("");
    setQuantity("");
    setPrice("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button type="submit">{editingProduct ? "Update" : "Register"}</button>
    </form>
  );

}

export default ProductForm;