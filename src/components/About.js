import React from 'react';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" style={{
      ...styles.about,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      paddingTop: '120px'
    }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={{
            ...styles.title,
            color: isDarkMode ? '#ffffff' : '#1a1a2e'
          }}>
            About Me
          </h2>
          <div style={{
            ...styles.titleUnderline,
            background: 'linear-gradient(90deg, #667eea, #764ba2)'
          }}></div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Left Column - Image */}
          <div style={styles.leftColumn}>
            <div style={{
              ...styles.imageWrapper,
              background: isDarkMode 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '3px'
            }}>
              <img 
                src="/rio.png"
                alt="Rio Salvador"
                style={{
                  ...styles.profileImage,
                  backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff'
                }}
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div style={styles.rightColumn}>
            {/* Bio Text */}
            <div style={styles.bioSection}>
              <p style={{
                ...styles.bioText,
                color: isDarkMode ? '#d0d0d0' : '#444'
              }}>
                I'm a passionate <span style={styles.highlight}>frontend developer</span> with a keen eye for creating beautiful, responsive websites that provide exceptional user experiences. My journey in web development has been driven by curiosity, creativity, and a commitment to writing clean, maintainable code.
              </p>
              
              <p style={{
                ...styles.bioText,
                color: isDarkMode ? '#d0d0d0' : '#444'
              }}>
                I specialize in modern web technologies and love transforming ideas into interactive digital experiences. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or diving into tech communities.
              </p>
            </div>

            {/* Stats/Info */}
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={{
                  ...styles.statNumber,
                  color: '#667eea'
                }}>1+</div>
                <div style={{
                  ...styles.statLabel,
                  color: isDarkMode ? '#a0a0a0' : '#666'
                }}>Years Experience</div>
              </div>

              <div style={styles.statItem}>
                <div style={{
                  ...styles.statNumber,
                  color: '#764ba2'
                }}>2+</div>
                <div style={{
                  ...styles.statLabel,
                  color: isDarkMode ? '#a0a0a0' : '#666'
                }}>Projects Completed</div>
              </div>

              <div style={styles.statItem}>
                <div style={{
                  ...styles.statNumber,
                  color: '#667eea'
                }}>100%</div>
                <div style={{
                  ...styles.statLabel,
                  color: isDarkMode ? '#a0a0a0' : '#666'
                }}>Client Satisfaction</div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div style={styles.infoSection}>
              <div style={{
                ...styles.infoCard,
                borderLeft: '4px solid #667eea',
                backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa'
              }}>
                <div style={styles.infoIcon}>📧</div>
                <div>
                  <div style={styles.infoTitle}>Email</div>
                  <div style={{
                    ...styles.infoValue,
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>salvadorrio639@gmail.com</div>
                </div>
              </div>

              <div style={{
                ...styles.infoCard,
                borderLeft: '4px solid #764ba2',
                backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa'
              }}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <div style={styles.infoTitle}>Location</div>
                  <div style={{
                    ...styles.infoValue,
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>Pampanga, Philippines</div>
                </div>
              </div>

              <div style={{
                ...styles.infoCard,
                borderLeft: '4px solid #667eea',
                backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa'
              }}>
                <div style={styles.infoIcon}>🎂</div>
                <div>
                  <div style={styles.infoTitle}>Birthday</div>
                  <div style={{
                    ...styles.infoValue,
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>February 2, 2003</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: '80px 5%',
    transition: 'all 0.3s ease'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    marginBottom: '4rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-1px'
  },
  titleUnderline: {
    width: '100px',
    height: '5px',
    margin: '0 auto',
    borderRadius: '3px'
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '4rem',
    alignItems: 'start'
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageWrapper: {
    borderRadius: '12px',
    width: '100%',
    maxWidth: '300px',
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    flexDirection: 'column',
    gap: '2.5rem'
  },
  bioSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  bioText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    fontWeight: '400'
  },
  highlight: {
    color: '#667eea',
    fontWeight: '700'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: '800',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.9rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  infoSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.2rem'
  },
  infoCard: {
    padding: '1.5rem',
    borderRadius: '8px',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease'
  },
  infoIcon: {
    fontSize: '1.8rem',
    minWidth: '40px'
  },
  infoTitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#667eea',
    marginBottom: '0.3rem'
  },
  infoValue: {
    fontSize: '0.95rem',
    fontWeight: '500',
    lineHeight: '1.4'
  }
};

// Responsive styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @media (max-width: 768px) {
    #about .mainContent {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }

    #about .statsGrid {
      grid-template-columns: 1fr !important;
    }

    #about .infoSection {
      grid-template-columns: 1fr !important;
    }

    #about .title {
      font-size: 2rem !important;
    }

    #about .bioText {
      font-size: 1rem !important;
    }

    #about .infoCard {
      flex-direction: column;
      text-align: center;
    }

    #about .infoCard:hover {
      transform: translateY(-5px);
    }
  }

  #about .infoCard:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
  }
`;
document.head.appendChild(styleSheet);

export default About;