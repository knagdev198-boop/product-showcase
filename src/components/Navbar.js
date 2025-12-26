import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>🧵 Ghansham Textile</h2>
        
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? 'active' : ''}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
          <li><a href="#register" onClick={() => scrollToSection('register')}>Register</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}