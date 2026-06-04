import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      borderBottom: isDarkMode ? '4px solid #667eea' : '4px solid #667eea'
    }}>
      <div style={styles.container}>
        {/* Logo - RIO VISIBLE IN BOTH MODES */}
        <div 
          style={{
            ...styles.logo,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '3px',
            padding: '10px 18px',
            boxShadow: isDarkMode 
              ? '0 6px 20px rgba(102, 126, 234, 0.6)' 
              : '0 4px 12px rgba(102, 126, 234, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          className="header-logo"
        >
          <h2 style={{
            margin: 0,
            color: '#ffffff',
            fontSize: '1.2rem',
            fontWeight: '900',
            letterSpacing: '3px',
            textShadow: isDarkMode 
              ? '0 3px 8px rgba(0, 0, 0, 0.6)' 
              : '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'block',
            transition: 'all 0.3s ease'
          }}>
            RIO SALVADOR
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                ...styles.navLink,
                color: isDarkMode ? '#ffffff' : '#0a0e27'
              }}
              className="nav-link-desktop"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          style={{
            ...styles.hamburger,
            display: isMobile ? 'flex' : 'none'
          }}
          onClick={toggleMenu}
          className="hamburger-menu"
        >
          <span style={{
            ...styles.hamburgerLine,
            backgroundColor: '#667eea',
            transform: isMenuOpen ? 'rotate(45deg) translateY(11px)' : 'none'
          }}></span>
          <span style={{
            ...styles.hamburgerLine,
            backgroundColor: '#667eea',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            ...styles.hamburgerLine,
            backgroundColor: '#667eea',
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-11px)' : 'none'
          }}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        ...styles.mobileMenu,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
        borderLeft: '4px solid #667eea'
      }}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            style={{
              ...styles.mobileLink,
              color: isDarkMode ? '#ffffff' : '#0a0e27'
            }}
            className="mobile-nav-link"
          >
            {item.label.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    maxWidth: '100%'
  },
  logo: {
    zIndex: 1001
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '700',
    padding: '12px 16px',
    transition: 'all 0.3s ease',
    position: 'relative',
    letterSpacing: '1px',
    display: 'block',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  hamburger: {
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
    zIndex: 1001,
    width: '30px',
    height: '24px',
    justifyContent: 'center'
  },
  hamburgerLine: {
    width: '100%',
    height: '4px',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  mobileMenu: {
    position: 'fixed',
    top: '70px',
    right: 0,
    width: '100%',
    maxWidth: '280px',
    height: 'calc(100vh - 70px)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    transition: 'transform 0.3s ease',
    zIndex: 999,
    boxShadow: '-8px 0 20px rgba(0,0,0,0.2)'
  },
  mobileLink: {
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '18px 0',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    display: 'block',
    textAlign: 'left',
    paddingLeft: '20px',
    borderLeft: '4px solid #667eea'
  }
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .header-logo:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.7) !important;
  }

  .nav-link-desktop {
    position: relative;
    overflow: hidden;
  }

  .nav-link-desktop::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .nav-link-desktop:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .nav-link-desktop:hover {
    color: #667eea !important;
  }

  .mobile-nav-link:hover {
    background-color: rgba(102, 126, 234, 0.1);
    padding-left: 25px;
  }
`;
document.head.appendChild(styleSheet);

export default Header;