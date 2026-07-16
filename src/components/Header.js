import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

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
    <>
      <nav style={{
        ...styles.nav,
        backgroundColor: isDarkMode 
          ? (scrolled ? '#0a0e27' : 'rgba(10, 14, 39, 0.95)') 
          : (scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)'),
        borderBottom: '4px solid #667eea',
        boxShadow: scrolled 
          ? (isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)')
          : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}>
        <div style={{
          ...styles.container,
          padding: isMobile ? '0.8rem 4%' : '1rem 5%'
        }}>
          {/* Logo - Hidden when mobile menu is open */}
          <div 
            onClick={closeMenu}
            style={{
              ...styles.logo,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '3px',
              padding: isMobile ? '8px 14px' : '10px 18px',
              boxShadow: isDarkMode 
                ? '0 6px 20px rgba(102, 126, 234, 0.6)' 
                : '0 4px 12px rgba(102, 126, 234, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen && isMobile ? 0 : 1,
              visibility: isMenuOpen && isMobile ? 'hidden' : 'visible',
              pointerEvents: isMenuOpen && isMobile ? 'none' : 'auto'
            }}
            className="header-logo"
          >
            <h2 style={{
              margin: 0,
              color: '#ffffff',
              fontSize: isMobile ? '0.85rem' : '1.2rem',
              fontWeight: '900',
              letterSpacing: isMobile ? '1.5px' : '3px',
              textShadow: isDarkMode 
                ? '0 3px 8px rgba(0, 0, 0, 0.6)' 
                : '0 2px 4px rgba(0, 0, 0, 0.2)',
              display: 'block',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}>
              RIO SALVADOR
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: isMobile ? 'none' : 'flex',
            gap: '0.5rem',
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

          {/* Mobile Hamburger - Changes color when menu is open */}
          <div
            style={{
              ...styles.hamburger,
              display: isMobile ? 'flex' : 'none',
              position: 'relative',
              zIndex: 1002
            }}
            onClick={toggleMenu}
            className="hamburger-menu"
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleMenu();
              }
            }}
          >
            <span style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? '#ffffff' : '#667eea',
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? '#ffffff' : '#667eea',
              opacity: isMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? '#ffffff' : '#667eea',
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }}></span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && isMobile && (
          <div
            style={styles.overlay}
            onClick={closeMenu}
            className="mobile-overlay"
          />
        )}

        {/* Mobile Menu */}
        <div style={{
          ...styles.mobileMenu,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
          borderLeft: '4px solid #667eea'
        }}>
          <div style={styles.mobileMenuContent}>
            {/* Mobile Menu Header with close button */}
            <div style={styles.mobileMenuHeader}>
              <div style={styles.closeButton} onClick={closeMenu}>
                ✕
              </div>
            </div>
            
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                style={{
                  ...styles.mobileLink,
                  color: isDarkMode ? '#ffffff' : '#0a0e27',
                  animation: isMenuOpen ? `slideIn 0.3s ease ${index * 0.05}s forwards` : 'none',
                  opacity: 0
                }}
                className="mobile-nav-link"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
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
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  },
  logo: {
    zIndex: 1001,
    transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease'
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '700',
    padding: '10px 14px',
    transition: 'all 0.3s ease',
    position: 'relative',
    letterSpacing: '1px',
    display: 'block',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  hamburger: {
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
    width: '28px',
    height: '22px',
    justifyContent: 'center',
    position: 'relative'
  },
  hamburgerLine: {
    width: '100%',
    height: '3px',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
    backdropFilter: 'blur(5px)',
    animation: 'fadeIn 0.3s ease'
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    maxWidth: '280px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 999,
    boxShadow: '-8px 0 30px rgba(0,0,0,0.3)'
  },
  mobileMenuContent: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '0 20px'
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
    padding: '0 10px'
  },
  closeButton: {
    fontSize: '28px',
    cursor: 'pointer',
    color: '#667eea',
    transition: 'all 0.3s ease',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(102, 126, 234, 0.1)'
  },
  mobileLink: {
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '14px 20px',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    display: 'block',
    borderRadius: '8px',
    marginLeft: '0',
    textAlign: 'center'
  }
};

// Add animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .header-logo {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .header-logo:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.7) !important;
  }

  .header-logo:active {
    transform: translateY(0);
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
    transform: translateY(-2px);
  }

  .mobile-nav-link {
    position: relative;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: transparent;
  }

  .mobile-nav-link:hover {
    background-color: rgba(102, 126, 234, 0.1);
    transform: translateX(5px);
  }

  .mobile-nav-link:active {
    background-color: rgba(102, 126, 234, 0.2);
    transform: scale(0.98);
  }

  .closeButton:hover {
    transform: rotate(90deg);
    backgroundColor: rgba(102, 126, 234, 0.2);
  }

  .hamburger-menu {
    transition: all 0.3s ease;
  }

  .hamburger-menu:hover {
    transform: scale(1.1);
  }

  .hamburger-menu:active {
    transform: scale(0.95);
  }

  .mobile-overlay {
    animation: fadeIn 0.3s ease;
  }

  /* Better touch targets for mobile */
  @media (max-width: 768px) {
    .nav-link-desktop,
    .mobile-nav-link,
    .hamburger-menu,
    .closeButton {
      min-height: 48px;
      touch-action: manipulation;
    }
    
    .mobile-nav-link {
      font-size: 1rem !important;
      padding: 14px 20px !important;
    }
    
    .hamburger-menu {
      width: 32px;
      height: 24px;
    }
    
    .closeButton {
      width: 44px;
      height: 44px;
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .mobileMenu {
      max-width: 100% !important;
    }
    
    .mobileLink {
      padding: 16px 20px !important;
      font-size: 1.1rem !important;
    }
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
  }

  /* Reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .nav-link-desktop:hover::after {
      transform: scaleX(0);
    }
    
    .mobile-nav-link:hover {
      transform: none;
    }
    
    .header-logo:hover {
      transform: none;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Header;