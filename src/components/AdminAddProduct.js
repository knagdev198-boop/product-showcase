import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [msg, setMsg] = useState("");

  const addProduct = async () => {
    if (!name || !price) {
      setMsg("❌ Fill all fields");
      return;
    }

    await addDoc(collection(db, "products"), {
      name,
      price,
      image,
      createdAt: new Date()
    });

    setMsg("✅ Product added successfully");
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="admin">
      <h2>🧵 Admin – Add Product</h2>

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
