import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.backToTop} className="backToTop">
        ↑
      </button>
    )
  );
}

const styles = {
  backToTop: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '50px',
    height: '50px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'all 0.3s',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  }
};

export default BackToTop;