import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Gedefew</div>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
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
        "እኔ ገደፈው እባላለሁ፤ ስኬታማ የንግድ ሰውና ነጋዴ ነኝ። በተለይም በኤክስፖርት 
        እና ኢምፖርት ዘርፍ በስፋት የምንቀሳቀስ ሲሆን፣ ዋነኛ የሥራ መስኬ 
        የመኪና ሽያጭ ነው። ጥራት ያላቸውን ተሽከርካሪዎች ለደንበኞቼ በማቅረብ 
        የምታወቅ ስሆን፣ በተጨማሪም እንደ ደላላ (Broker) የተለያዩ የንግድ 
        ትስስሮችን በመፍጠር እና እንደ ንግድ አማካሪ (Business Consultant) 
        ደንበኞቼ በሥራቸው ውጤታማ እንዲሆኑ ሙያዊ ድጋፍ እሰጣለሁ።"
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section light">
        <h2>My Services</h2>
        <div className="cards">
          <div className="card">
            <h3>🚗 Car Brokerage</h3>
            <p>Connecting buyers and sellers with trusted vehicles.</p>
          </div>
          <div className="card">
            <h3>💼 Car Sales</h3>
            <p>High-quality vehicles at competitive prices.</p>
          </div>
          <div className="card">
            <h3>📊 Business Counseling</h3>
            <p>Professional advice for startups and business growth.</p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <h2>Business Insights</h2>
        <div className="cards">
          <div className="card">
            <h3>How to Buy a Reliable Used Car</h3>
            <p>Important tips before making your purchase decision.</p>
          </div>
          <div className="card">
            <h3>Smart Investment in Auto Business</h3>
            <p>Strategies for growing your car trading business.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section light">
        <h2>Contact Me</h2>

        <div className="contact-box">
          <p>📞 <a href="tel:+251975122222">+251 975 12 2222</a></p>
          <p>📧 <a href="mailto:gedefewdagnew21@gmail.com">gedefewdagnew21@gmail.com</a></p>
          <p>📍 Addis Ababa, Ethiopia</p>

          <div className="social-icons">
            <a href="https://wa.me/251912345678" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
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