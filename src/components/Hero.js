import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    // I-check kung available ang mga files
    fetch('/cv.pdf')
      .then(response => {
        if (response.ok) {
          console.log('✅ CV file is available!');
        } else {
          console.log('❌ CV file NOT found!');
        }
      })
      .catch(error => console.log('Error checking CV:', error));
    
    fetch('/resume.pdf.pdf')
      .then(response => {
        if (response.ok) {
          console.log('✅ Resume file is available!');
        } else {
          console.log('❌ Resume file NOT found!');
        }
      })
      .catch(error => console.log('Error checking Resume:', error));
  }, []);

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img 
            src="/rio.png"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
        
        <h1 style={styles.title}>
          Hi, I'm <span style={styles.name}>RIO SALVADOR</span>
        </h1>
        
        <h2 style={styles.subtitle}>
          Frontend Developer & UI Enthusiast
        </h2>
        
        <p style={styles.description}>
          I create beautiful and responsive websites that provide amazing user experiences.
        </p>
        
        <div style={styles.buttons}>
          <a href="#projects" style={styles.btnPrimary}>
            📁 View Projects
          </a>
          <a href="#contact" style={styles.btnSecondary}>
            📧 Contact Me
          </a>
          <a href="/cv.pdf" download style={styles.btnCV}>
            📄 Download CV
          </a>
          <a href="/resume.pdf.pdf" download style={styles.btnResume}>
            📋 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '800px',
    zIndex: 2
  },
  imageContainer: {
    marginBottom: '2rem'
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ffd700',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  name: {
    color: '#ffd700',
    textShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: '500',
    opacity: 0.95
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9,
    lineHeight: 1.6
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    padding: '12px 30px',
    backgroundColor: '#ffd700',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    cursor: 'pointer',
    border: 'none'
  },
  btnSecondary: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    border: '2px solid white',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    cursor: 'pointer'
  },
  btnCV: {
    padding: '12px 30px',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    cursor: 'pointer',
    border: 'none'
  },
  btnResume: {
    padding: '12px 30px',
    backgroundColor: '#dc3545',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    cursor: 'pointer',
    border: 'none'
  }
};

// Add hover effects via CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .btnPrimary:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    background-color: #e6c200 !important;
  }
  
  .btnSecondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  .btnCV:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
    background-color: #218838 !important;
  }
  
  .btnResume:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
    background-color: #c82333 !important;
  }
  
  .profileImage:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .imageContainer, h1, h2, p, .buttons {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
  }
  
  .imageContainer { animation-delay: 0s; }
  h1 { animation-delay: 0.2s; }
  h2 { animation-delay: 0.4s; }
  p { animation-delay: 0.6s; }
  .buttons { animation-delay: 0.8s; }
`;
document.head.appendChild(styleSheet);

export default Hero;