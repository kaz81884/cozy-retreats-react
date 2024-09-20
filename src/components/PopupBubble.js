import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PopupBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    console.log('PopupBubble component mounted');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: 9999,
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}>
     
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Text Us
        </button>
      )}
      {isOpen && (
        <div>
          <button 
            onClick={() => setIsOpen(false)}
            style={{
              float: 'right',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <X size={24} />
          </button>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
            />
            <button 
              type="submit"
              style={{
                width: '100%',
                backgroundColor: 'blue',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupBubble;