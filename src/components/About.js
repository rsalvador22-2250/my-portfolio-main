import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const stats = [
    { number: '1+', label: 'Years Experience', color: '#667eea' },
    { number: '2+', label: 'Projects Completed', color: '#764ba2' },
    { number: '100%', label: 'Client Satisfaction', color: '#667eea' }
  ];

  const infoItems = [
    { icon: '📧', title: 'Email', value: 'salvadorrio639@gmail.com', color: '#667eea' },
    { icon: '📍', title: 'Location', value: 'Pampanga, Philippines', color: '#764ba2' },
    { icon: '🎂', title: 'Birthday', value: 'February 2, 2003', color: '#667eea' }
  ];

  return (
    <section id="about" style={{
      ...styles.about,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      padding: isMobile ? '80px 4% 50px' : '100px 5% 60px'
    }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{
          ...styles.header,
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <h2 style={{
            ...styles.title,
            fontSize: isMobile ? 'clamp(1.6rem, 5vw, 2rem)' : 'clamp(1.8rem, 5vw, 3rem)',
            color: isDarkMode ? '#ffffff' : '#1a1a2e'
          }}>
            About Me
          </h2>
          <div style={{
            ...styles.titleUnderline,
            width: isMobile ? '60px' : '100px',
            height: isMobile ? '4px' : '5px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)'
          }}></div>
        </div>

        {/* Main Content */}
        <div style={{
          ...styles.mainContent,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: isMobile ? '2rem' : '3rem'
        }}>
          {/* Left Column - Image */}
          <div style={styles.leftColumn}>
            <div 
              style={{
                ...styles.imageWrapper,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '3px',
                maxWidth: isMobile ? '220px' : '280px',
                width: '100%'
              }}
              className="image-wrapper"
            >
              <img 
                src="/rio.png"
                alt="Rio Salvador - Frontend Developer"
                style={{
                  ...styles.profileImage,
                  backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff'
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div style={{
            ...styles.rightColumn,
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {/* Bio Text */}
            <div style={{
              ...styles.bioSection,
              gap: isMobile ? '0.8rem' : '1rem'
            }}>
              <p style={{
                ...styles.bioText,
                fontSize: isMobile ? '0.9rem' : 'clamp(0.95rem, 2vw, 1.05rem)',
                color: isDarkMode ? '#d0d0d0' : '#444',
                lineHeight: isMobile ? '1.7' : '1.8'
              }}>
                I'm a passionate <span style={styles.highlight}>frontend developer</span> with a keen eye for creating beautiful, responsive websites that provide exceptional user experiences. My journey in web development has been driven by curiosity, creativity, and a commitment to writing clean, maintainable code.
              </p>
              
              <p style={{
                ...styles.bioText,
                fontSize: isMobile ? '0.9rem' : 'clamp(0.95rem, 2vw, 1.05rem)',
                color: isDarkMode ? '#d0d0d0' : '#444',
                lineHeight: isMobile ? '1.7' : '1.8'
              }}>
                I specialize in modern web technologies and love transforming ideas into interactive digital experiences. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or diving into tech communities.
              </p>
            </div>

            {/* Stats/Info */}
            <div style={{
              ...styles.statsGrid,
              gridTemplateColumns: isMobile && !isSmallMobile ? 'repeat(3, 1fr)' : (isSmallMobile ? '1fr' : 'repeat(3, 1fr)'),
              gap: isMobile ? '0.8rem' : '1rem'
            }}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  style={styles.statItem}
                  className="stat-item"
                >
                  <div style={{
                    ...styles.statNumber,
                    fontSize: isMobile ? 'clamp(1.4rem, 4vw, 1.6rem)' : 'clamp(1.8rem, 4vw, 2.2rem)',
                    color: stat.color
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    ...styles.statLabel,
                    fontSize: isMobile ? '0.65rem' : 'clamp(0.75rem, 1.5vw, 0.9rem)',
                    color: isDarkMode ? '#a0a0a0' : '#666'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div style={{
              ...styles.infoSection,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '0.8rem' : '1rem'
            }}>
              {infoItems.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.infoCard,
                    borderLeft: `4px solid ${item.color}`,
                    backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa',
                    padding: isMobile ? '0.9rem' : '1.2rem',
                    flexDirection: isMobile ? 'row' : 'row'
                  }}
                  className="info-card"
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.98)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    setTimeout(() => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }, 200);
                  }}
                >
                  <div style={{
                    ...styles.infoIcon,
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    minWidth: isMobile ? '30px' : '35px'
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      ...styles.infoTitle,
                      fontSize: isMobile ? '0.65rem' : '0.75rem',
                      color: item.color
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      ...styles.infoValue,
                      fontSize: isMobile ? '0.8rem' : 'clamp(0.85rem, 1.5vw, 0.95rem)',
                      color: isDarkMode ? '#e0e0e0' : '#333',
                      wordBreak: 'break-word'
                    }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div style={styles.decorElements}>
        <div className="about-decor about-decor-1"></div>
        <div className="about-decor about-decor-2"></div>
      </div>
    </section>
  );
}

const styles = {
  about: {
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
    letterSpacing: '-1px'
  },
  titleUnderline: {
    margin: '0 auto',
    borderRadius: '3px'
  },
  mainContent: {
    display: 'grid',
    alignItems: 'start'
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageWrapper: {
    borderRadius: '12px',
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    display: 'block'
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  bioSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  bioText: {
    fontWeight: '400'
  },
  highlight: {
    color: '#667eea',
    fontWeight: '700'
  },
  statsGrid: {
    display: 'grid'
  },
  statItem: {
    textAlign: 'center',
    padding: '0.5rem',
    transition: 'transform 0.3s ease'
  },
  statNumber: {
    fontWeight: '800',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  infoSection: {
    display: 'grid'
  },
  infoCard: {
    borderRadius: '8px',
    display: 'flex',
    gap: '0.8rem',
    alignItems: 'flex-start',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer'
  },
  infoIcon: {
    display: 'block'
  },
  infoTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.3rem'
  },
  infoValue: {
    fontWeight: '500',
    lineHeight: '1.4'
  },
  decorElements: {
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

// Add CSS animations and styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .image-wrapper {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .image-wrapper:hover {
    transform: scale(1.02);
  }

  .image-wrapper:active {
    transform: scale(0.98);
  }

  .stat-item {
    transition: transform 0.3s ease;
  }

  .stat-item:hover {
    transform: translateY(-5px);
  }

  .stat-item:active {
    transform: scale(0.95);
  }

  .info-card {
    cursor: pointer;
  }

  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
  }

  /* Decorative elements */
  .about-decor {
    position: absolute;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08), transparent);
    border-radius: 50%;
    pointer-events: none;
  }

  .about-decor-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    right: -200px;
    animation: floatAbout 20s ease-in-out infinite;
  }

  .about-decor-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -150px;
    animation: floatAbout 15s ease-in-out infinite reverse;
  }

  @keyframes floatAbout {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  /* Animations */
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

  .image-wrapper, .bioText, .stat-item, .info-card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
  }

  .image-wrapper { animation-delay: 0.1s; }
  .bioText:first-of-type { animation-delay: 0.2s; }
  .bioText:last-of-type { animation-delay: 0.3s; }
  .stat-item:nth-child(1) { animation-delay: 0.4s; }
  .stat-item:nth-child(2) { animation-delay: 0.5s; }
  .stat-item:nth-child(3) { animation-delay: 0.6s; }
  .info-card:nth-child(1) { animation-delay: 0.7s; }
  .info-card:nth-child(2) { animation-delay: 0.8s; }
  .info-card:nth-child(3) { animation-delay: 0.9s; }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .about-decor-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      right: -100px;
    }
    
    .about-decor-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      left: -75px;
    }

    .info-card {
      touch-action: manipulation;
    }

    .info-card:active {
      transform: scale(0.98);
    }

    .stat-item:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 480px) {
    .about-decor-1 {
      width: 150px;
      height: 150px;
    }
    
    .about-decor-2 {
      width: 100px;
      height: 100px;
    }
  }

  /* Reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .image-wrapper,
    .stat-item,
    .info-card,
    .about-decor {
      animation: none;
      transition: none;
    }
    
    .image-wrapper:hover,
    .stat-item:hover,
    .info-card:hover {
      transform: none;
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .stat-item:hover {
      transform: none;
    }
    
    .info-card:hover {
      transform: none;
    }
    
    .image-wrapper:hover {
      transform: none;
    }
  }
`;
document.head.appendChild(styleSheet);

export default About;