import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      setSubmitSuccess(true);
      form.current.reset();
      setFormData({ from_name: '', from_email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 4000);
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

  const socialLinks = [
    { 
      icon: FaGithub, 
      label: 'GitHub', 
      url: 'https://github.com/rsalvador22-2250',
      color: '#333'
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/rio-salvador-76963a3b8/',
      color: '#0077b5'
    },
    { 
      icon: FaFacebook, 
      label: 'Facebook', 
      url: 'https://www.facebook.com/riosalvadorr',
      color: '#1877f2'
    },
    { 
      icon: FaInstagram, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/rio__salvador/',
      color: '#e4405f'
    }
  ];

  return (
    <section id="contact" style={{
      ...styles.contact,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      padding: isMobile ? '80px 4%' : '120px 5%',
      backgroundImage: isDarkMode 
        ? 'none' 
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)'
    }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{
          ...styles.header,
          marginBottom: isMobile ? '2rem' : '4rem'
        }}>
          <h2 style={{
            ...styles.title,
            fontSize: isMobile ? '2rem' : '3rem',
            color: isDarkMode ? '#ffffff' : '#1a1a2e'
          }}>
            Get In Touch
          </h2>
          <div style={{
            ...styles.titleDecor,
            background: 'linear-gradient(90deg, #667eea, #764ba2)'
          }}></div>
          <p style={{
            ...styles.subtitle,
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            color: isDarkMode ? '#b0b0b0' : '#666'
          }}>
            Have a project in mind? Let's talk! I'm always open to new opportunities.
          </p>
        </div>

        {/* Content Grid */}
        <div style={{
          ...styles.contentGrid,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '1.5rem' : '2.5rem'
        }}>
          {/* Left: Contact Info */}
          <div style={{
            ...styles.infoSection,
            padding: isMobile ? '1.5rem' : '2.5rem',
            backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa',
            borderLeft: '6px solid #667eea'
          }}>
            <h3 style={{
              ...styles.infoTitle,
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              color: isDarkMode ? '#e0e0e0' : '#1a1a2e'
            }}>
              Let's Connect
            </h3>
            <p style={{
              ...styles.infoText,
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: isDarkMode ? '#b0b0b0' : '#666'
            }}>
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>

            {/* Contact Details */}
            <div style={styles.contactDetails}>
              <div style={styles.detailItem}>
                <span style={{
                  ...styles.detailIcon,
                  fontSize: isMobile ? '1.5rem' : '1.8rem'
                }}>📧</span>
                <div>
                  <div style={{
                    ...styles.detailLabel,
                    color: isDarkMode ? '#a0a0a0' : '#999'
                  }}>Email</div>
                  <div style={{
                    ...styles.detailValue,
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>salvadorrio639@gmail.com</div>
                </div>
              </div>

              <div style={styles.detailItem}>
                <span style={{
                  ...styles.detailIcon,
                  fontSize: isMobile ? '1.5rem' : '1.8rem'
                }}>📍</span>
                <div>
                  <div style={{
                    ...styles.detailLabel,
                    color: isDarkMode ? '#a0a0a0' : '#999'
                  }}>Location</div>
                  <div style={{
                    ...styles.detailValue,
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>Pampanga, Philippines</div>
                </div>
              </div>

              <div style={styles.detailItem}>
                <span style={{
                  ...styles.detailIcon,
                  fontSize: isMobile ? '1.5rem' : '1.8rem'
                }}>💬</span>
                <div>
                  <div style={{
                    ...styles.detailLabel,
                    color: isDarkMode ? '#a0a0a0' : '#999'
                  }}>Response Time</div>
                  <div style={{
                    ...styles.detailValue,
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={styles.socialSection}>
              <h4 style={{
                ...styles.socialTitle,
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: isDarkMode ? '#e0e0e0' : '#1a1a2e'
              }}>
                Follow Me
              </h4>
              <div style={{
                ...styles.socialGrid,
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '0.5rem' : '0.8rem'
              }}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.socialButton,
                        width: isMobile ? '45px' : '50px',
                        height: isMobile ? '45px' : '50px',
                        backgroundColor: isDarkMode ? '#0f1535' : '#ffffff',
                        borderColor: social.color,
                        color: social.color,
                        border: `2px solid ${social.color}`
                      }}
                      className="social-btn"
                      title={social.label}
                      onTouchStart={(e) => {
                        e.currentTarget.style.transform = 'scale(0.95)';
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                    >
                      <Icon size={isMobile ? 18 : 20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form ref={form} onSubmit={sendEmail} style={{
            ...styles.formSection,
            padding: isMobile ? '1.5rem' : '2.5rem',
            backgroundColor: isDarkMode ? '#1a1f3a' : '#ffffff',
            border: isDarkMode 
              ? '1px solid rgba(102, 126, 234, 0.2)' 
              : '1px solid rgba(102, 126, 234, 0.1)'
          }}>
            {/* Success Message */}
            {submitSuccess && (
              <div style={{
                ...styles.successMessage,
                padding: isMobile ? '0.8rem 1rem' : '1rem 1.2rem',
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderLeft: '4px solid #28a745',
                color: '#28a745'
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Name Input */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.formLabel,
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                color: isDarkMode ? '#e0e0e0' : '#333'
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                style={{
                  ...styles.formInput,
                  padding: isMobile ? '0.8rem 0.9rem' : '0.9rem 1rem',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  backgroundColor: isDarkMode ? '#0f1535' : '#f8f9fa',
                  borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#e0e0e0',
                  color: isDarkMode ? '#e0e0e0' : '#333'
                }}
                placeholder="Rio Salvador"
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.99)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>

            {/* Email Input */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.formLabel,
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                color: isDarkMode ? '#e0e0e0' : '#333'
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                style={{
                  ...styles.formInput,
                  padding: isMobile ? '0.8rem 0.9rem' : '0.9rem 1rem',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  backgroundColor: isDarkMode ? '#0f1535' : '#f8f9fa',
                  borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#e0e0e0',
                  color: isDarkMode ? '#e0e0e0' : '#333'
                }}
                placeholder="your@email.com"
              />
            </div>

            {/* Message Textarea */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.formLabel,
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                color: isDarkMode ? '#e0e0e0' : '#333'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isMobile ? "5" : "6"}
                style={{
                  ...styles.formTextarea,
                  padding: isMobile ? '0.8rem 0.9rem' : '0.9rem 1rem',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  backgroundColor: isDarkMode ? '#0f1535' : '#f8f9fa',
                  borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#e0e0e0',
                  color: isDarkMode ? '#e0e0e0' : '#333'
                }}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.submitBtn,
                padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                fontSize: isMobile ? '0.9rem' : '1rem',
                opacity: isSubmitting ? 0.7 : 1
              }}
              className="submit-btn"
              onTouchStart={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
            >
              {isSubmitting ? (
                <span style={styles.spinner}></span>
              ) : (
                <>
                  <span>Send Message</span>
                  <span style={{ marginLeft: '8px' }}>✨</span>
                </>
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
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  header: {
    textAlign: 'center'
  },
  title: {
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-0.5px'
  },
  titleDecor: {
    width: '80px',
    height: '5px',
    margin: '1rem auto',
    borderRadius: '3px'
  },
  subtitle: {
    fontWeight: '400',
    maxWidth: '600px',
    margin: '1.5rem auto 0',
    lineHeight: '1.5'
  },
  contentGrid: {
    display: 'grid',
    alignItems: 'start'
  },
  infoSection: {
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  infoTitle: {
    fontWeight: '700',
    marginBottom: '0.5rem'
  },
  infoText: {
    lineHeight: '1.6',
    fontWeight: '400'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  detailItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  detailIcon: {
    minWidth: '40px'
  },
  detailLabel: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.3rem'
  },
  detailValue: {
    fontWeight: '500',
    lineHeight: '1.4',
    wordBreak: 'break-word'
  },
  socialSection: {
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(102, 126, 234, 0.2)'
  },
  socialTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem'
  },
  socialGrid: {
    display: 'grid'
  },
  socialButton: {
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  formSection: {
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  successMessage: {
    borderRadius: '8px',
    fontWeight: '500',
    animation: 'slideDown 0.3s ease'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem'
  },
  formLabel: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  formInput: {
    border: '2px solid',
    borderRadius: '8px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
    WebkitAppearance: 'none'
  },
  formTextarea: {
    border: '2px solid',
    borderRadius: '8px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
    resize: 'vertical'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    letterSpacing: '0.5px'
  },
  spinner: {
    display: 'inline-block',
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTopColor: 'white',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }
};

// Inject animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .social-btn {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .social-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
    background-color: var(--color) !important;
    color: white !important;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
  }

  .submit-btn:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .submit-btn:active {
    transform: scale(0.98) !important;
  }

  #contact input:focus,
  #contact textarea:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
    outline: none;
  }

  /* Better touch targets for mobile */
  @media (max-width: 768px) {
    .social-btn {
      min-height: 44px;
      min-width: 44px;
    }
    
    input, textarea, button {
      font-size: 16px !important; /* Prevents zoom on iOS */
    }
  }
`;
document.head.appendChild(styleSheet);

export default Contact;