import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Gedefew Dagnew</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="home">
        <div className="home-content">
          <h1>Gedefew Dagnew</h1>
          <h3>Businessman | Car Broker | Car Seller | Counselor</h3>
          <p>
            Helping clients find the right vehicle and guiding entrepreneurs
            toward successful business decisions.
          </p>
          <a href="#contact" className="btn">Get Consultation</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am Gedefew Dagnew, an experienced businessman specializing in car
          brokerage, vehicle sales, and professional business counseling.
          With strong negotiation skills and deep market knowledge, I help
          clients make profitable and confident decisions.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section light">
        <h2>My Services</h2>
        <div className="cards">
          <div className="card">
            <h3>🚗 Car Brokerage</h3>
            <p>Connecting buyers and sellers with trusted and verified vehicles.</p>
          </div>
          <div className="card">
            <h3>💼 Car Sales</h3>
            <p>High-quality vehicles at competitive market prices.</p>
          </div>
          <div className="card">
            <h3>📊 Business Counseling</h3>
            <p>Professional advice for startups and business growth strategies.</p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <h2>Business Insights</h2>
        <div className="cards">
          <div className="card">
            <h3>How to Buy a Reliable Used Car</h3>
            <p>Important tips before making your car purchase decision.</p>
          </div>
          <div className="card">
            <h3>Smart Investment in Auto Business</h3>
            <p>Strategies for growing your car trading business.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
   {/* CONTACT */}
<section id="contact" className="section light">
  <h2>Contact Gedefew Dagnew</h2>

  <div className="contact-box">

    <div className="contact-left">
      <h3>Direct Contact</h3>

      <p>
        📞 <strong>Phone:</strong>{" "}
        <a href="tel:+251912345678" className="contact-link">
          +251 912 345 678
        </a>
      </p>

      <p>
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:gedefew@example.com" className="contact-link">
          gedefew@example.com
        </a>
      </p>

      <p>📍 <strong>Location:</strong> Addis Ababa, Ethiopia</p>

      <div className="social-icons">
        <a href="https://wa.me/251912345678" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>

    <div className="contact-right">
      <h3>Send a Message</h3>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Gedefew Dagnew | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;