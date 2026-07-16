import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Skills() {
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: '85%', icon: '⚛️', color: '#61dafb', description: 'Building dynamic UIs with hooks and components' },
        { name: 'JavaScript', level: '88%', icon: '⚡', color: '#f0db4f', description: 'ES6+, async programming, DOM manipulation' },
        { name: 'HTML5', level: '92%', icon: '🌐', color: '#e44d26', description: 'Semantic markup, accessibility, SEO' },
        { name: 'CSS3', level: '90%', icon: '🎨', color: '#264de4', description: 'Flexbox, Grid, animations, responsive design' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: '80%', icon: '🚀', color: '#68a063', description: 'REST APIs, authentication, file handling' },
        { name: 'MongoDB', level: '75%', icon: '🗄️', color: '#13aa52', description: 'Database design, aggregation, indexing' }
      ]
    },
    {
      title: 'Tools & Other',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: '85%', icon: '📦', color: '#f34f29', description: 'Version control, branching, collaboration' },
        { name: 'Vue.js', level: '82%', icon: '💚', color: '#42b883', description: 'Components, Vuex, routing' }
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

  const handleSkillClick = (index) => {
    if (isMobile) {
      setExpandedSkill(expandedSkill === index ? null : index);
    }
  };

  return (
    <section id="skills" style={{
      ...styles.skills,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      padding: isMobile ? '60px 4%' : '120px 5%',
      backgroundImage: isDarkMode 
        ? 'none' 
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)'
    }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{
          ...styles.header,
          marginBottom: isMobile ? '2rem' : '4rem'
        }}>
          <h2 style={{
            ...styles.title,
            fontSize: isMobile ? '2rem' : '3rem',
            color: isDarkMode ? '#ffffff' : '#1a1a2e'
          }}>
            Technical Skills
          </h2>
          <div style={{
            ...styles.titleDecor,
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '4px' : '5px'
          }}></div>
          <p style={{
            ...styles.subtitle,
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            color: isDarkMode ? '#b0b0b0' : '#666',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Technologies and tools I excel at
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          ...styles.categoriesGrid,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '2rem' : '3rem'
        }}>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} style={styles.categorySection}>
              {/* Category Title */}
              <h3 style={{
                ...styles.categoryTitle,
                fontSize: isMobile ? '1.2rem' : '1.3rem',
                color: isDarkMode ? '#e0e0e0' : '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: isMobile ? '1.3rem' : '1.5rem' }}>{category.icon}</span>
                <span>{category.title}</span>
              </h3>

              {/* Skills in Category */}
              <div style={{
                ...styles.skillsGrid,
                gap: isMobile ? '0.8rem' : '1rem'
              }}>
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = catIndex * 10 + skillIndex;
                  const isExpanded = expandedSkill === globalIndex;
                  
                  return (
                    <div
                      key={skillIndex}
                      style={{
                        ...styles.skillCard,
                        padding: isMobile ? '1rem' : '1.3rem',
                        backgroundColor: isDarkMode ? '#1a1f3a' : '#f8f9fa',
                        border: isDarkMode 
                          ? '1px solid rgba(102, 126, 234, 0.2)' 
                          : '1px solid rgba(102, 126, 234, 0.15)',
                        transform: !isMobile && expandedSkill === globalIndex ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                      className="skill-card"
                      onClick={() => handleSkillClick(globalIndex)}
                    >
                      {/* Top: Icon & Name & Level */}
                      <div style={styles.skillTop}>
                        <div style={styles.iconNameWrapper}>
                          <div style={{
                            ...styles.iconBox,
                            width: isMobile ? '40px' : '48px',
                            height: isMobile ? '40px' : '48px',
                            background: `${skill.color}20`,
                            transition: 'transform 0.3s ease'
                          }}
                          className="icon-box">
                            <span style={{
                              ...styles.skillIcon,
                              fontSize: isMobile ? '1.3rem' : '1.5rem'
                            }}>{skill.icon}</span>
                          </div>
                          <div>
                            <h4 style={{
                              ...styles.skillName,
                              fontSize: isMobile ? '0.95rem' : '1.05rem',
                              color: isDarkMode ? '#e0e0e0' : '#1a1a2e'
                            }}>
                              {skill.name}
                            </h4>
                            {isMobile && isExpanded && (
                              <p style={{
                                ...styles.skillDescription,
                                fontSize: '0.8rem',
                                color: isDarkMode ? '#b0b0b0' : '#666',
                                marginTop: '0.5rem',
                                lineHeight: '1.4'
                              }}>
                                {skill.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div style={{
                          ...styles.levelBadge,
                          fontSize: isMobile ? '0.75rem' : '0.85rem',
                          padding: isMobile ? '4px 8px' : '6px 12px',
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
                          height: isMobile ? '6px' : '8px',
                          backgroundColor: isDarkMode ? '#0f1535' : '#e8ecf2'
                        }}>
                          <div
                            ref={el => progressRefs.current[globalIndex] = el}
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

                      {/* Show description on desktop always */}
                      {!isMobile && (
                        <p style={{
                          ...styles.skillDescription,
                          fontSize: '0.8rem',
                          color: isDarkMode ? '#b0b0b0' : '#666',
                          marginTop: '0.25rem',
                          lineHeight: '1.4'
                        }}>
                          {skill.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
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
    letterSpacing: '-0.5px'
  },
  titleDecor: {
    margin: '1rem auto',
    borderRadius: '3px'
  },
  subtitle: {
    fontWeight: '400',
    maxWidth: '600px',
    margin: '1.5rem auto 0',
    lineHeight: '1.5'
  },
  categoriesGrid: {
    display: 'grid'
  },
  categorySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  categoryTitle: {
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '0.5rem'
  },
  skillsGrid: {
    display: 'flex',
    flexDirection: 'column'
  },
  skillCard: {
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
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
    gap: '0.8rem',
    flex: 1
  },
  iconBox: {
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'transform 0.3s ease'
  },
  skillIcon: {
    display: 'block'
  },
  skillName: {
    margin: 0,
    fontWeight: '700',
    display: 'block'
  },
  skillDescription: {
    margin: 0
  },
  levelBadge: {
    fontWeight: '700',
    borderRadius: '20px',
    whiteSpace: 'nowrap'
  },
  progressWrapper: {
    marginTop: '0.25rem'
  },
  progressTrack: {
    borderRadius: '10px',
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative'
  },
  backgroundElements: {
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

// Animations and effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .skill-card {
    animation: skillSlideIn 0.6s ease-out;
    animation-fill-mode: both;
  }

  .skill-card:hover:not(:active) {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.15);
  }

  .skill-card:hover .icon-box {
    transform: scale(1.08);
  }

  .skill-card:active {
    transform: scale(0.98);
  }

  .progress-fill {
    position: relative;
    overflow: hidden;
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
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

  .skill-card:nth-child(1) { animation-delay: 0.05s; }
  .skill-card:nth-child(2) { animation-delay: 0.1s; }
  .skill-card:nth-child(3) { animation-delay: 0.15s; }
  .skill-card:nth-child(4) { animation-delay: 0.2s; }
  .skill-card:nth-child(5) { animation-delay: 0.25s; }
  .skill-card:nth-child(6) { animation-delay: 0.3s; }

  /* Background circles animation */
  .bg-circle {
    position: absolute;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08), transparent);
    border-radius: 50%;
    pointer-events: none;
  }

  .bg-circle-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    right: -200px;
    animation: float 20s ease-in-out infinite;
  }

  .bg-circle-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -150px;
    animation: float 15s ease-in-out infinite reverse;
  }

  .bg-circle-3 {
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 10s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(5deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .bg-circle-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      right: -100px;
    }
    
    .bg-circle-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      left: -75px;
    }
    
    .bg-circle-3 {
      width: 100px;
      height: 100px;
    }

    .skill-card {
      touch-action: pan-y pinch-zoom;
    }
  }

  /* Reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .skill-card,
    .progress-fill::after,
    .bg-circle {
      animation: none;
    }
    
    .skill-card:hover {
      transform: none;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Skills;