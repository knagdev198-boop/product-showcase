import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState("");

  const add = async () => {
    await addDoc(collection(db, "products"), {
      name, price, offer, image
    });
    alert("Product Added");
  };

  return (
    <div className="admin">
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Price" onChange={e=>setPrice(e.target.value)} />
      <input placeholder="Offer" onChange={e=>setOffer(e.target.value)} />
      <input placeholder="Image URL" onChange={e=>setImage(e.target.value)} />
      <button onClick={add}>Add Product</button>
    </div>
  );
}
