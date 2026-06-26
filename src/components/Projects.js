import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Projects() {
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: 'Clinic Management System',
      description: 'A secure medical system for managing student health records, clinic appointments, and generating health reports.',
      tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      demoLink: 'https://clinic-system-cca.vercel.app/login.html',
      icon: '🏥',
      color: '#667eea'
    },
    {
      title: 'SASO System',
      description: 'A comprehensive student affairs and services management system for handling student records and administrative tasks.',
      tech: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://sasosystem-cca.vercel.app/login.html',
      icon: '📚',
      color: '#764ba2'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my skills, projects, and professional experience as a frontend developer.',
      tech: ['React', 'CSS3', 'EmailJS'],
      demoLink: 'https://my-porfolio-2-murex.vercel.app/',
      icon: '💼',
      color: '#f093fb'
    }
  ];

  return (
    <section id="projects" style={{
      ...styles.projects,
      backgroundColor: isDarkMode ? '#0a0e27' : '#ffffff',
      padding: isMobile ? '60px 4%' : '100px 5%'
    }}>
      <div style={styles.container}>
        <h2 style={{
          ...styles.sectionTitle,
          fontSize: isMobile ? '2rem' : '2.5rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }} className="sectionTitle">
          My Projects
        </h2>
        <p style={{
          ...styles.subtitle,
          fontSize: isMobile ? '0.9rem' : '1rem',
          color: isDarkMode ? '#b0b0b0' : '#666',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          Here are some of my recent works
        </p>
        
        <div style={{
          ...styles.projectsGrid,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              style={{
                ...styles.projectCard,
                backgroundColor: isDarkMode ? '#1a1f4e' : '#ffffff',
                border: isDarkMode 
                  ? '1px solid rgba(102, 126, 234, 0.2)' 
                  : '1px solid rgba(102, 126, 234, 0.1)',
                transform: hoveredCard === index && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() => {
                setHoveredCard(index);
                setTimeout(() => setHoveredCard(null), 300);
              }}
            >
              <div style={{
                ...styles.projectIcon,
                fontSize: isMobile ? '2.5rem' : '3rem'
              }}>
                {project.icon}
              </div>
              
              <h3 style={{
                ...styles.projectTitle,
                color: project.color,
                fontSize: isMobile ? '1.2rem' : '1.3rem',
                marginBottom: isMobile ? '0.8rem' : '1rem'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                ...styles.projectDesc,
                color: isDarkMode ? '#cccccc' : '#666',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: isMobile ? '1.5' : '1.6'
              }}>
                {project.description}
              </p>
              
              <div style={{
                ...styles.techStack,
                gap: isMobile ? '0.4rem' : '0.5rem',
                marginBottom: isMobile ? '1.2rem' : '1.5rem'
              }}>
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="tech" 
                    style={{
                      ...styles.tech,
                      backgroundColor: isDarkMode ? '#0f1535' : '#f0f0f0',
                      color: project.color,
                      fontSize: isMobile ? '0.7rem' : '0.8rem',
                      padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={styles.projectLinks}>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.demoLink,
                    backgroundColor: project.color,
                    padding: isMobile ? '8px 16px' : '10px 20px',
                    fontSize: isMobile ? '0.85rem' : '0.9rem'
                  }}
                  className="demo-link"
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.98)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div style={styles.decorElements}>
        <div className="decor decor-1"></div>
        <div className="decor decor-2"></div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
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
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontWeight: '800',
    letterSpacing: '-0.5px'
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '400'
  },
  projectsGrid: {
    display: 'grid'
  },
  projectCard: {
    padding: '1.8rem',
    borderRadius: '20px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  projectIcon: {
    marginBottom: '1rem',
    display: 'inline-block',
    animation: 'float 3s ease-in-out infinite'
  },
  projectTitle: {
    fontWeight: '700',
    letterSpacing: '-0.3px'
  },
  projectDesc: {
    fontWeight: '400'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tech: {
    borderRadius: '20px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  projectLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  demoLink: {
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontWeight: '600',
    minHeight: '44px',
    minWidth: '130px',
    justifyContent: 'center'
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
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .project-card {
    position: relative;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .project-card:hover {
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }

  .demo-link {
    position: relative;
    overflow: hidden;
  }

  .demo-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .demo-link:hover::before {
    width: 300px;
    height: 300px;
  }

  .demo-link:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
  }

  .demo-link:active {
    transform: translateY(0) scale(0.98);
  }

  .tech {
    transition: all 0.3s ease;
  }

  .tech:hover {
    transform: translateY(-2px);
    filter: brightness(0.95);
  }

  /* Dark mode specific */
  .dark-mode .project-card {
    background-color: #1a1f4e !important;
  }

  /* Decorative elements */
  .decor {
    position: absolute;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent);
    border-radius: 50%;
    pointer-events: none;
  }

  .decor-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
    animation: pulse 8s ease-in-out infinite;
  }

  .decor-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -100px;
    animation: pulse 6s ease-in-out infinite reverse;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .project-card {
      padding: 1.5rem !important;
    }
    
    .project-card:hover {
      transform: translateY(-5px) !important;
    }
    
    .demo-link {
      min-width: 120px;
    }
    
    .decor-1 {
      width: 150px;
      height: 150px;
      top: -75px;
      right: -75px;
    }
    
    .decor-2 {
      width: 100px;
      height: 100px;
      bottom: -50px;
      left: -50px;
    }
  }

  /* Loading animation for cards */
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

  .project-card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
  }

  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }

  /* Improve touch targets */
  @media (max-width: 768px) {
    .demo-link {
      touch-action: manipulation;
    }
    
    .project-card {
      touch-action: pan-y pinch-zoom;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Projects;