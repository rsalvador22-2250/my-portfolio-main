import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        style={{
          ...styles.backToTop,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: isDarkMode
            ? '0 6px 20px rgba(102, 126, 234, 0.5)'
            : '0 6px 20px rgba(102, 126, 234, 0.3)',
          bottom: isMobile ? '70px' : '80px',
          right: isMobile ? '15px' : '30px'
        }} 
        className="backToTop"
        aria-label="Back to top"
        title="Scroll to top"
      >
        <span style={styles.arrow}>↑</span>
      </button>
    )
  );
}

const styles = {
  backToTop: {
    position: 'fixed',
    width: 'clamp(44px, 10vw, 55px)',
    height: 'clamp(44px, 10vw, 55px)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 999,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'clamp(20px, 4vw, 28px)',
    fontWeight: '700',
    opacity: 0.95,
    backdropFilter: 'blur(10px)'
  },
  arrow: {
    display: 'block',
    transition: 'transform 0.3s ease',
    animation: 'bounce 2s ease-in-out infinite'
  }
};

// Add animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .backToTop {
    animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .backToTop:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.6) !important;
  }

  .backToTop:active {
    transform: scale(0.95);
  }

  .backToTop span {
    animation: bounce 1.5s ease-in-out infinite;
  }

  .backToTop:hover span {
    animation: bounceUp 0.6s ease-in-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.8);
    }
    to {
      opacity: 0.95;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes bounceUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .backToTop {
      width: 48px !important;
      height: 48px !important;
      font-size: 22px !important;
      bottom: 70px !important;
    }

    .backToTop:hover {
      transform: scale(1.08) translateY(-3px);
    }
  }

  @media (max-width: 480px) {
    .backToTop {
      width: 44px !important;
      height: 44px !important;
      font-size: 20px !important;
      bottom: 65px !important;
      right: 12px !important;
    }

    .backToTop:hover {
      transform: scale(1.05);
    }
  }

  /* Prevent animation on first load */
  @media (prefers-reduced-motion: reduce) {
    .backToTop,
    .backToTop span {
      animation: none !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default BackToTop;