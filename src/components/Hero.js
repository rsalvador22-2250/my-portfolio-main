import React, { useState, useEffect } from 'react';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Add mouse move effect for desktop only
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section id="home" style={{
      ...styles.hero,
      background: isMobile 
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #667eea 0%, #764ba2 100%)`
    }}>
      <div style={{
        ...styles.container,
        padding: isMobile ? '0 1rem' : '0 2rem'
      }}>
        <div style={styles.imageContainer}>
          <img 
            src="/rio.png"
            alt="Rio Salvador - Frontend Developer"
            style={{
              ...styles.profileImage,
              width: isMobile ? '120px' : '150px',
              height: isMobile ? '120px' : '150px'
            }}
            className="profile-image"
            loading="eager"
          />
        </div>
        
        <h1 style={{
          ...styles.title,
          fontSize: isMobile ? '2rem' : '3rem'
        }}>
          Hi, I'm <span style={styles.name}>RIO SALVADOR</span>
        </h1>
        
        <h2 style={{
          ...styles.subtitle,
          fontSize: isMobile ? '1.1rem' : '1.5rem'
        }}>
          Frontend Developer & UI Enthusiast
        </h2>
        
        <p style={{
          ...styles.description,
          fontSize: isMobile ? '0.95rem' : '1.1rem',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          I create beautiful and responsive websites that provide amazing user experiences.
        </p>
        
        <div style={{
          ...styles.buttons,
          gap: isMobile ? '0.8rem' : '1rem'
        }}>
          <a 
            href="#projects" 
            style={{
              ...styles.btnPrimary,
              padding: isMobile ? '10px 20px' : '12px 30px',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            className="btn-primary"
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
          >
            📁 View Projects
          </a>
          <a 
            href="#contact" 
            style={{
              ...styles.btnSecondary,
              padding: isMobile ? '10px 20px' : '12px 30px',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            className="btn-secondary"
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
          >
            📧 Contact Me
          </a>
          <a 
            href="/cv.pdf" 
            download 
            style={{
              ...styles.btnCV,
              padding: isMobile ? '10px 20px' : '12px 30px',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            className="btn-cv"
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
          >
            📄 Download CV
          </a>
        </div>
      </div>
      
      {/* Floating animated shapes for visual interest */}
      <div style={styles.floatingShapes}>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 0.1s ease'
  },
  container: {
    maxWidth: '900px',
    zIndex: 2,
    width: '100%'
  },
  imageContainer: {
    marginBottom: '1.5rem',
    position: 'relative',
    display: 'inline-block'
  },
  profileImage: {
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ffd700',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  title: {
    marginBottom: '0.8rem',
    fontWeight: 'bold',
    lineHeight: '1.3'
  },
  name: {
    color: '#ffd700',
    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
    display: 'inline-block'
  },
  subtitle: {
    marginBottom: '0.8rem',
    fontWeight: '500',
    opacity: 0.95,
    lineHeight: '1.4'
  },
  description: {
    marginBottom: '2rem',
    opacity: 0.9,
    lineHeight: '1.6',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    backgroundColor: '#ffd700',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    border: 'none',
    minHeight: '44px',
    minWidth: '140px'
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    border: '2px solid white',
    fontWeight: 'bold',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    minHeight: '44px',
    minWidth: '140px'
  },
  btnCV: {
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    border: 'none',
    minHeight: '44px',
    minWidth: '140px'
  },
  floatingShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
    pointerEvents: 'none'
  }
};

// Add CSS animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .btn-primary, .btn-secondary, .btn-cv, .profile-image {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
    background-color: #e6c200 !important;
  }

  .btn-primary:active {
    transform: translateY(0) scale(0.98);
  }

  .btn-secondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.15) !important;
    border-color: #ffd700 !important;
  }

  .btn-secondary:active {
    transform: translateY(0) scale(0.98);
  }

  .btn-cv:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(40, 167, 69, 0.4);
    background-color: #218838 !important;
  }

  .btn-cv:active {
    transform: translateY(0) scale(0.98);
  }

  .profile-image:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: #ffed4a !important;
  }

  .profile-image:active {
    transform: scale(0.98);
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

  .image-container, h1, h2, p, .buttons {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
  }

  .image-container { animation-delay: 0s; }
  h1 { animation-delay: 0.2s; }
  h2 { animation-delay: 0.4s; }
  p { animation-delay: 0.6s; }
  .buttons { animation-delay: 0.8s; }

  /* Floating shapes animation */
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }

  @keyframes floatReverse {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(20px) rotate(-10deg); }
  }

  .shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
  }

  .shape-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
    animation: float 20s ease-in-out infinite;
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    right: -100px;
    animation: floatReverse 15s ease-in-out infinite;
  }

  .shape-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 10%;
    animation: float 18s ease-in-out infinite;
  }

  .shape-4 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 5%;
    animation: floatReverse 12s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    .shape-1 {
      width: 150px;
      height: 150px;
      top: -75px;
      left: -75px;
    }
    
    .shape-2 {
      width: 100px;
      height: 100px;
      bottom: -50px;
      right: -50px;
    }
    
    .shape-3 {
      width: 80px;
      height: 80px;
    }
    
    .shape-4 {
      width: 60px;
      height: 60px;
    }
    
    .btn-primary, .btn-secondary, .btn-cv {
      min-width: 130px;
    }
  }

  /* Typing animation for subtitle */
  @keyframes blink {
    50% { opacity: 0; }
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Improve touch targets */
  @media (max-width: 768px) {
    .btn-primary, .btn-secondary, .btn-cv {
      width: auto;
      min-width: 130px;
      touch-action: manipulation;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;