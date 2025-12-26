import { Link } from "react-router-dom";
import Register from "../components/Register";

export default function Home() {
  return (
    <div className="hero">
      <h1 className="fade">Premium Textile Collection</h1>
      <p className="fade">New arrivals • Best offers • Quality fabrics</p>

      <Register />

      <Link to="/products">
        <button className="slide">View Products</button>
      </Link>
    </div>
  );
}
