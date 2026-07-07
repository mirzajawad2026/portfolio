import React from "react";
import "../styles/global.css";
function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Let’s Talk</h2>

      <p>If you have a project or idea, feel free to reach out!</p>

      <a href="mailto:jawad@email.com" className="contact-btn">
        Send Email
      </a>
    </section>
  );
}

export default Contact;
