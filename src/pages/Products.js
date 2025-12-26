import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "products"));
      setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} item={p} />)}
    </div>
  );
}
