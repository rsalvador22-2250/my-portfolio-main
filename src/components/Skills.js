import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

function Skills() {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: '85%', icon: '⚛️', color: '#61dafb' },
        { name: 'JavaScript', level: '88%', icon: '⚡', color: '#f0db4f' },
        { name: 'HTML5', level: '92%', icon: '🌐', color: '#e44d26' },
        { name: 'CSS3', level: '90%', icon: '🎨', color: '#264de4' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: '80%', icon: '🚀', color: '#68a063' },
        { name: 'MongoDB', level: '75%', icon: '🗄️', color: '#13aa52' }
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', level: '85%', icon: '📦', color: '#f34f29' },
        { name: 'Vue.js', level: '82%', icon: '💚', color: '#42b883' }
      ]
    }
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.getAttribute('data-width');
          progressBar.style.width = width;
          observer.unobserve(progressBar);
        }
      });
    }, { threshold: 0.3 });

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" style={{
      ...styles.skills,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      backgroundImage: isDarkMode 
        ? 'none' 
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)'
    }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={{
            ...styles.title,
            color: isDarkMode ? '#ffffff' : '#1a1a2e'
          }}>
            Technical Skills
          </h2>
          <div style={{
            ...styles.titleDecor,
            background: 'linear-gradient(90deg, #667eea, #764ba2)'
          }}></div>
          <p style={{
            ...styles.subtitle,
            color: isDarkMode ? '#b0b0b0' : '#666'
          }}>
            Technologies and tools I excel at
          </p>
        </div>

        {/* Skills Grid */}
        <div style={styles.categoriesGrid}>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} style={styles.categorySection}>
              {/* Category Title */}
              <h3 style={{
                ...styles.categoryTitle,
                color: isDarkMode ? '#e0e0e0' : '#333'
              }}>
                {category.title}
              </h3>

              {/* Skills in Category */}
              <div style={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    style={{
                      ...styles.skillCard,
                      backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa',
                      border: isDarkMode 
                        ? '1px solid rgba(102, 126, 234, 0.2)' 
                        : '1px solid rgba(102, 126, 234, 0.15)'
                    }}
                    className="skill-card"
                  >
                    {/* Top: Icon & Name & Level */}
                    <div style={styles.skillTop}>
                      <div style={styles.iconNameWrapper}>
                        <div style={{
                          ...styles.iconBox,
                          background: `${skill.color}20`
                        }}>
                          <span style={styles.skillIcon}>{skill.icon}</span>
                        </div>
                        <div>
                          <h4 style={{
                            ...styles.skillName,
                            color: isDarkMode ? '#e0e0e0' : '#1a1a2e'
                          }}>
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                      <div style={{
                        ...styles.levelBadge,
                        color: skill.color,
                        backgroundColor: `${skill.color}15`
                      }}>
                        {skill.level}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div style={styles.progressWrapper}>
                      <div style={{
                        ...styles.progressTrack,
                        backgroundColor: isDarkMode ? '#0f1535' : '#e8ecf2'
                      }}>
                        <div
                          ref={el => progressRefs.current[catIndex * 10 + skillIndex] = el}
                          data-width={skill.level}
                          style={{
                            ...styles.progressBar,
                            backgroundColor: skill.color,
                            width: '0%'
                          }}
                          className="progress-fill"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
    padding: '120px 5%',
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
    textAlign: 'center',
    marginBottom: '4rem'
  },
  title: {
    fontSize: '3rem',
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
    fontSize: '1.1rem',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '1.5rem auto 0'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3rem'
  },
  categorySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  categoryTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '0.5rem'
  },
  skillsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  skillCard: {
    padding: '1.3rem',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  skillTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  iconNameWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: 1
  },
  iconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  skillIcon: {
    fontSize: '1.5rem'
  },
  skillName: {
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: '700',
    display: 'block'
  },
  levelBadge: {
    fontSize: '0.85rem',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '20px',
    whiteSpace: 'nowrap'
  },
  progressWrapper: {
    marginTop: '0.5rem'
  },
  progressTrack: {
    height: '8px',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative'
  }
};

// Animations and effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .skill-card {
    animation: skillSlideIn 0.6s ease-out;
    animation-fill-mode: both;
  }

  .skill-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.12);
  }

  .skill-card:hover .iconBox {
    transform: scale(1.08);
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes skillSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .skill-card:nth-child(1) { animation-delay: 0.1s; }
  .skill-card:nth-child(2) { animation-delay: 0.2s; }
  .skill-card:nth-child(3) { animation-delay: 0.3s; }
  .skill-card:nth-child(4) { animation-delay: 0.4s; }
  .skill-card:nth-child(5) { animation-delay: 0.5s; }
  .skill-card:nth-child(6) { animation-delay: 0.6s; }

  @media (max-width: 768px) {
    #skills .title {
      font-size: 2.2rem;
    }

    #skills .subtitle {
      font-size: 1rem;
    }

    #skills .categoryTitle {
      font-size: 1.1rem;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Skills;