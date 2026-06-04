import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_8euxkcc',
      'template_o0sttay',
      form.current,
      'vh3GLxorH4DkK-rz5'
    )
    .then((result) => {
      console.log('Success:', result.text);
      alert('✨ Message sent successfully! I will get back to you soon.');
      form.current.reset();
      setFormData({ from_name: '', from_email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Error:', error.text);
      alert('❌ Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="sectionTitle">Contact Me</h2>
        <div style={styles.content}>
          <div style={styles.info} className="info">
            <h3>Let's Connect!</h3>
            <p>I'm always interested in hearing about new opportunities and collaborations.</p>
            <div style={styles.details}>
              <p>📧 salvadorrio639@gmail.com</p>
              <p>📱 +63 912 345 6789</p>
              <p>🌐 github.com/rsalvador22-2250</p>
              <div style={styles.socialLinks}>
                <a href="https://github.com/rsalvador22-2250" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                  <FaGithub size={18} style={{ marginRight: '8px' }} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/rio-salvador-76963a3b8/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                  <FaLinkedin size={18} style={{ marginRight: '8px' }} /> LinkedIn
                </a>
                <a href="https://www.facebook.com/riosalvadorr" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                  <FaFacebook size={18} style={{ marginRight: '8px' }} /> Facebook
                </a>
                <a href="https://www.instagram.com/rio__salvador/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                  <FaInstagram size={18} style={{ marginRight: '8px' }} /> Instagram
                </a>
              </div>
            </div>
          </div>
          
          <form ref={form} onSubmit={sendEmail} style={styles.form}>
            <div className="inputGroup" style={styles.inputGroup}>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder=" "
              />
              <label style={{
                ...styles.label,
                top: formData.from_name ? '-10px' : '12px',
                fontSize: formData.from_name ? '12px' : '16px',
                backgroundColor: 'transparent'
              }}>
                Your Name
              </label>
            </div>
            
            <div className="inputGroup" style={styles.inputGroup}>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder=" "
              />
              <label style={{
                ...styles.label,
                top: formData.from_email ? '-10px' : '12px',
                fontSize: formData.from_email ? '12px' : '16px',
                backgroundColor: 'transparent'
              }}>
                Your Email
              </label>
            </div>
            
            <div className="inputGroup" style={styles.inputGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={styles.textarea}
                placeholder=" "
              ></textarea>
              <label style={{
                ...styles.label,
                top: formData.message ? '-10px' : '12px',
                fontSize: formData.message ? '12px' : '16px',
                backgroundColor: 'transparent'
              }}>
                Your Message
              </label>
            </div>
            
            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: isSubmitting ? 0.7 : 1
              }}
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <span style={styles.spinner}></span>
              ) : (
                'Send Message ✨'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    padding: '80px 5%',
    backgroundColor: '#f8f9fa'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem'
  },
  info: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  details: {
    marginTop: '1rem',
    lineHeight: '2'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap'
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '25px'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    outline: 'none',
    resize: 'vertical'
  },
  label: {
    position: 'absolute',
    left: '12px',
    padding: '0 4px',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    color: '#999'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    padding: '14px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    fontWeight: 'bold'
  },
  spinner: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    border: '2px solid white',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }
};

export default Contact;