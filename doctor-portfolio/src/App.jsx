
import { useState } from "react";
import "./App.css";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-content">

        <div className="navbar-logo">
          Dr. Rahim
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#location">Location</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#appointment" className="navbar-btn">
          Book Appointment
        </a>

      </div>

    </nav>
  );
}


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Dr. Rahim</h1>
          <p>Professional Doctor</p>
          <p className="hero-specialist">Professional Cardiologist</p>
          <p className="hero-description">
            Providing compassionate, trusted, and professional cardiac care
            focused on every patient's health and well-being.
          </p>
          <button className="hero-btn">Book Appointment</button>
        </div>

        <div className="hero-image">
          <img src="/doctor.png" alt="Dr. Rahim" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">

        <div className="about-text">
          <span className="section-label">ABOUT THE DOCTOR</span>

          <h2>Dedicated to Your Heart Health</h2>

          <p>
            Dr. Rahim is an experienced cardiologist dedicated to providing
            trusted and compassionate cardiac care. With a patient-centered
            approach, he focuses on accurate diagnosis, effective treatment,
            and long-term heart health.
          </p>

          <p>
            His goal is to help every patient understand their condition
            and receive personalized care in a comfortable environment.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="info-card">
            <h3>5000+</h3>
            <p>Patients Treated</p>
          </div>

          <div className="info-card">
            <h3>15+</h3>
            <p>Medical Certifications</p>
          </div>
        </div>

      </div>
    </section>
  )
}
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">

        <span className="section-label">EXPERTISE & QUALIFICATIONS</span>

        <h2>Skills & Certifications</h2>

        <p className="skills-intro">
          Professional expertise and medical qualifications focused on
          providing reliable and comprehensive cardiac care.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Cardiology</h3>
            <p>
              Specialized in cardiovascular health, diagnosis, and treatment.
            </p>
          </div>

          <div className="skill-card">
            <h3>Heart Disease Management</h3>
            <p>
              Focused on effective management and long-term heart care.
            </p>
          </div>

          <div className="skill-card">
            <h3>MBBS</h3>
            <p>
              Bachelor of Medicine and Bachelor of Surgery.
            </p>
          </div>

          <div className="skill-card">
            <h3>FCPS</h3>
            <p>
              Fellowship in specialized medical training and practice.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-content">

        <span className="section-label">PATIENT FEEDBACK</span>

        <h2>What Patients Say</h2>

        <p className="testimonials-intro">
          Trusted by patients for professional, compassionate, and
          personalized cardiac care.
        </p>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "Dr. Rahim is very caring and professional. He explained
              everything clearly and made me feel comfortable."
            </p>
            <h3>Ahmed Rahman</h3>
            <span>Patient</span>
          </div>

          <div className="testimonial-card">
            <p>
              "I received excellent care and guidance throughout my
              treatment. Highly professional experience."
            </p>
            <h3>Sarah Ahmed</h3>
            <span>Patient</span>
          </div>

          <div className="testimonial-card">
            <p>
              "A very knowledgeable doctor who takes time to understand
              his patients and their concerns."
            </p>
            <h3>Mohammad Hasan</h3>
            <span>Patient</span>
          </div>

        </div>

      </div>
    </section>
  );
}
function Location() {
  return (
    <section className="location" id="location">
      <div className="location-content">

        <span className="section-label">VISIT THE CLINIC</span>

        <h2>Locations & Availability</h2>

        <p className="location-intro">
          Visit the clinic for professional consultation and personalized
          cardiac care.
        </p>

        <div className="location-card">

          <div className="location-info">
            <h3>City Hospital</h3>
            <p>📍 Chattogram, Bangladesh</p>
          </div>

          <div className="availability">
            <h3>Available Days</h3>
            <p>Saturday - Thursday</p>
          </div>

          <div className="availability">
            <h3>Consultation Time</h3>
            <p>5:00 PM - 9:00 PM</p>
          </div>

        </div>

      </div>
    </section>
  );
}

function Appointment() { 
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [date, setDate] = useState("") 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Appointment Request 
Name: ${name} 
Email: ${email} 
Date: ${date}`); 
setName(""); 
setEmail(""); 
setDate(""); 
  } 
 
  return ( 
    <section className="appointment" id="appointment"> 
      <div className="appointment-content"> 
 
        <span className="section-label">BOOK A CONSULTATION</span> 
 
        <h2>Book an Appointment</h2> 
 
        <p className="appointment-intro"> 
          Schedule your consultation and take the first step toward 
          better heart health. 
        </p> 
 
      <form className="appointment-form" onSubmit={handleSubmit}> 
 
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          /> 
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /> 
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          /> 
 
          <button type="submit"> 
            Book Appointment 
          </button> 
 
        </form> 
 
      </div> 
    </section> 
  ); 
}
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">

        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>Contact the Doctor</h2>

          <p>
            Have a question or need more information? Feel free to get in
            touch with Dr. Rahim.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-card">
              <h3>Phone</h3>
              <p>+880 1234-567890</p>
            </div>

            <div className="contact-card">
              <h3>Email</h3>
              <p>doctor@example.com</p>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p>Chattogram, Bangladesh</p>
            </div>

          </div>

          <div className="contact-message">
            <h3>Send a Message</h3>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button>Send Message</button>
          </div>

        </div>

      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer " id="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Dr. Rahim</h2>
          <p>
            Professional Cardiologist providing trusted and compassionate
            cardiac care.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>+880 1234-567890</p>
          <p>doctor@example.com</p>
          <p>Chattogram, Bangladesh</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dr. Rahim. All rights reserved.</p>
      </div>

    </footer>
  );
}

function App() {
  return (
    <div>
         <Navbar />
      <Hero />
      <About />
      <Skills />
      <Testimonials />
      <Location />
      <Appointment />
      <Contact />
      <Footer />
    </div>

  )
}
export default App;