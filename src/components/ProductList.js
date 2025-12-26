import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(list);
    };
    loadProducts();
  }, []);

  return (
    <div className="grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          {p.image && <img src={p.image} alt={p.name} />}
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}
