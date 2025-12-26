import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);
  const [products, setProducts] = useState([]);

  // login fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // product fields (admin)
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);

  // Load products and admin role from memory on mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const savedRole = localStorage.getItem("adminRole");
    
    setProducts(savedProducts);
    if (savedRole === "admin") {
      setRole("admin");
    }
  }, []);

  const adminLogin = () => {
    if (username === "admin" && password === "admin123") {
      setRole("admin");
      setPage("admin");
      localStorage.setItem("adminRole", "admin");
    } else {
      alert("⚠ This page is only for admin");
    }
  };

  const adminLogout = () => {
    setRole(null);
    setPage("home");
    localStorage.removeItem("adminRole");
  };

  const addProduct = () => {
    if (!pname || !price) {
      alert("Fill product name & price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: pname,
      price,
      discount,
      image,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    
    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setPname("");
    setPrice("");
    setDiscount("");
    setImage(null);
    
    alert("✅ Product Added Successfully!");
  };

  // WhatsApp contact function for general inquiries
  const openWhatsApp = (number) => {
    const message = "Hello! I'm interested in your textile products.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // WhatsApp for specific product inquiry
  const inquireProduct = (product) => {
    const message = `Hello! I'm interested in this product:

Product: ${product.name}
Price: ₹${product.price}
${product.discount ? `Discount: ${product.discount}%` : ''}

Please provide more details.`;
    
    const url = `https://wa.me/919890652567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>🧵 Ghansham Textile</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("products")}>Products</button>
          <button onClick={() => setPage("contact")}>Contact</button>
          {role === "admin" ? (
            <>
              <button onClick={() => setPage("admin")}>Admin Panel</button>
              <button onClick={adminLogout}>Logout</button>
            </>
          ) : (
            <button onClick={() => setPage("login")}>Admin</button>
          )}
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <section className="page">
          <h1 className="floating">Welcome to Ghansham Textile</h1>
          <p>Premium textile products & offers</p>
          
          {/* WhatsApp Contact Section */}
          <div className="whatsapp-section">
            <h3>📞 Contact Us on WhatsApp</h3>
            <div className="whatsapp-buttons">
              <a 
                href="#" 
                className="whatsapp-btn"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp('919890652567');
                }}
              >
                9890652567
              </a>
              <a 
                href="#" 
                className="whatsapp-btn"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp('917020556866');
                }}
              >
                7020556866
              </a>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS */}
      {page === "products" && (
        <section className="page">
          <h2>Products</h2>

          {products.length === 0 && <p>No products yet</p>}

          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="card">
                {p.image && <img src={p.image} alt={p.name} />}
                <h3>{p.name}</h3>
                <p className="price">₹ {p.price}</p>
                {p.discount && <p className="discount">Discount: {p.discount}%</p>}
                
                {/* WhatsApp button for each product */}
                <button 
                  className="product-whatsapp-btn"
                  onClick={() => inquireProduct(p)}
                >
                  📱 Inquire on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT PAGE */}
      {page === "contact" && (
        <section className="page">
          <h2>Contact Us</h2>
          <p>Get in touch with us through WhatsApp for quick assistance!</p>
          
          <div className="whatsapp-section">
            <h3>📞 WhatsApp Numbers</h3>
            <div className="whatsapp-buttons">
              <a 
                href="#" 
                className="whatsapp-btn"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp('919890652567');
                }}
              >
                9890652567
              </a>
              <a 
                href="#" 
                className="whatsapp-btn"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp('917020556866');
                }}
              >
                7020556866
              </a>
            </div>
          </div>
        </section>
      )}

      {/* LOGIN */}
      {page === "login" && role !== "admin" && (
        <section className="page">
          <h2>Admin Login</h2>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                adminLogin();
              }
            }}
          />

          <button onClick={adminLogin}>Login</button>
        </section>
      )}

      {/* ADMIN PANEL */}
      {page === "admin" && role === "admin" && (
        <section className="page">
          <h2>Add Product (Admin Only)</h2>
          <p style={{color: '#666', fontSize: '0.9rem', textAlign: 'center'}}>
            Note: Products cannot be deleted once added
          </p>

          <input
            placeholder="Product Name"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />

          <input
            placeholder="Price"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Discount (%)"
            value={discount}
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(e) => {
              if (e.target.files[0]) {
                setImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />

          {image && (
            <div style={{textAlign: 'center', margin: '1rem 0'}}>
              <img src={image} alt="Preview" style={{maxWidth: '200px', borderRadius: '10px'}} />
            </div>
          )}

          <button onClick={addProduct}>Add Product</button>
        </section>
      )}
    </div>
  );
}