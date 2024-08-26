import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';

emailjs.init('user_Sw2s7VVzPl5weNvxj');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');

    emailjs.send(
      'service_hpjhmd6', // Replace with your EmailJS service ID
      'template_ytoifba', // Replace with your EmailJS template ID
      formData,
      'Sw2s7VVzPl5weNvxj' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', address: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        setSubmitStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      
      <main role="main">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <section id="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Here's how you can reach us:</p>
            <ul>
              <li>Phone: (555) 123-4567</li>
              <li>Email: lcutler63@gmail.com</li>
              <li>Address: 1205 S. 4th St., Nebraska City, NE 68410</li>
            </ul>
          </section>

          <section id="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
              {submitStatus && <p className="submit-status">{submitStatus}</p>}
            </form>
          </section>
        </div>

        <section id="map">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2113692181624!2d-95.85203287329496!3d40.666344071607086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM5JzU4LjgiTiA5NcKwNTAnNTkuNCJX!5e0!3m2!1sen!2sus!4v1682301234567!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          <p>
            <a
              href="https://nebraskacity.com/wp-content/uploads/2014/02/nebraskacity-website-map.pdf"
              className="pdf-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Nebraska City Map (PDF)
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Cozy Retreats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;