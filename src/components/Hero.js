export default function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>We Help You Grow Your Textile Business</h1>
          <p>
            Discover premium fabrics, latest arrivals and exclusive offers.
            Quality textiles for every need.
          </p>
          <a href="#products" className="hero-btn">
            View Products →
          </a>
        </div>
  
        <div className="hero-img">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea3c57db?w=800" 
            alt="Textile Business" 
          />
        </div>
      </section>
    );
  }