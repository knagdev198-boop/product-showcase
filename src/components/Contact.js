export default function Contact() {
    return (
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem' }}>
          📞 9890652567 / 7020556866
        </p>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>
          We're here to help! Reach out to us on WhatsApp for instant support.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/919890652567"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    );
  }
  