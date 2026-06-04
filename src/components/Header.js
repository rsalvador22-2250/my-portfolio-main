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

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: isDarkMode ? '#0f1535' : '#ffffff',
      boxShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={styles.logo}>
        <h2 style={{ color: isDarkMode ? '#667eea' : '#667eea' }}>RIO SALVADOR</h2>
      </div>
      
      {/* Desktop Menu - laging nakikita sa computer */}
      <ul style={{
        ...styles.navLinksDesktop,
        display: isMobile ? 'none' : 'flex'
      }}>
        {navItems.map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              style={{
                ...styles.link,
                color: isDarkMode ? '#ffffff' : '#333333',
              }}
              className="nav-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Hamburger Menu Button - sa phone lang */}
      <div style={{
        ...styles.menuIcon,
        display: isMobile ? 'block' : 'none'
      }} onClick={toggleMenu}>
        <span style={{
          ...styles.hamburger,
          backgroundColor: isDarkMode ? '#ffffff' : '#667eea',
          transform: isMenuOpen ? 'rotate(45deg)' : 'none',
          position: 'absolute',
          top: '0'
        }}></span>
        <span style={{
          ...styles.hamburger,
          backgroundColor: isDarkMode ? '#ffffff' : '#667eea',
          opacity: isMenuOpen ? 0 : 1,
        }}></span>
        <span style={{
          ...styles.hamburger,
          backgroundColor: isDarkMode ? '#ffffff' : '#667eea',
          transform: isMenuOpen ? 'rotate(-45deg)' : 'none',
          position: 'absolute',
          bottom: '0'
        }}></span>
      </div>
      
      {/* Mobile Menu - lumalabas kapag clinick ang hamburger */}
      <ul style={{
        ...styles.navLinksMobile,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        backgroundColor: isDarkMode ? '#0f1535' : '#ffffff',
      }}>
        {navItems.map((item) => (
          <li key={item} style={styles.liItem}>
            <a 
              href={`#${item.toLowerCase()}`} 
              style={{
                ...styles.link,
                color: isDarkMode ? '#ffffff' : '#333333',
                fontSize: '1.2rem',
                padding: '12px 0'
              }}
              onClick={closeMenu}
              className="nav-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1001
  },
  menuIcon: {
    position: 'relative',
    width: '30px',
    height: '21px',
    cursor: 'pointer',
    zIndex: 1001
  },
  hamburger: {
    width: '30px',
    height: '3px',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  navLinksDesktop: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  navLinksMobile: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '70%',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    transition: 'all 0.3s ease',
    boxShadow: '-5px 0 20px rgba(0,0,0,0.2)',
    zIndex: 1000
  },
  liItem: {
    width: '100%',
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    fontSize: '1rem',
    padding: '8px 0',
    position: 'relative',
    display: 'block'
  }
};

// Add styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  /* Desktop hover effect */
  @media (min-width: 769px) {
    nav .link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    nav .link:hover::after {
      width: 100%;
    }
    
    nav .link:hover {
      color: #667eea !important;
    }
  }
  
  /* Dark mode styles */
  .dark-mode nav .nav-link {
    color: #ffffff !important;
  }
  
  .dark-mode nav .nav-link:hover {
    color: #667eea !important;
  }
  
  /* Light mode styles */
  nav .nav-link {
    color: #333333 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Header;