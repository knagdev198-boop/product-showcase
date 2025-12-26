export default function ProductCard({ product }) {
    const whatsappMessage = `Hello, I am interested in ${product.name}`;
    const whatsappLink = `https://wa.me/919890652567?text=${encodeURIComponent(whatsappMessage)}`;
  
    return (
      <div className="product-card">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400";
            }}
          />
        )}
        
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">₹{product.price}</p>
          {product.discount && (
            <p className="discount">🎉 {product.discount}% OFF</p>
          )}
          
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="whatsapp-btn">
              💬 WhatsApp Now
            </button>
          </a>
        </div>
      </div>
    );
  }