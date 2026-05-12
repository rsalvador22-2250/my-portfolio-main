import React, { useEffect, useRef } from 'react';

function Skills() {
  const skills = [
    { name: 'HTML5', level: '90%', color: '#e44d26', icon: '🌐' },
    { name: 'CSS3', level: '85%', color: '#264de4', icon: '🎨' },
    { name: 'JavaScript', level: '80%', color: '#f0db4f', icon: '⚡' },
    { name: 'React', level: '75%', color: '#61dafb', icon: '⚛️' },
    { name: 'Node.js', level: '70%', color: '#68a063', icon: '🚀' },
    { name: 'Vue.js', level: '85%', color: '#42b883', icon: '💚' }
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
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <div style={styles.headerSection}>
          <h2 className="skills-title" style={styles.sectionTitle}>My Skills</h2>
          <p className="skills-subtitle" style={styles.subtitle}>Technologies and tools I work with</p>
        </div>
        <div style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={styles.skillCard}>
              <div style={styles.skillHeader}>
                <span style={styles.skillIcon}>{skill.icon}</span>
                <div style={styles.skillInfo}>
                  <h3 style={styles.skillName}>{skill.name}</h3>
                  <span style={styles.skillLevel}>{skill.level}</span>
                </div>
              </div>
              <div style={styles.progressWrapper}>
                <div style={styles.progressBar} className="progressBar">
                  <div
                    ref={el => progressRefs.current[index] = el}
                    data-width={skill.level}
                    style={{
                      ...styles.progress,
                      width: '0%',
                      backgroundColor: skill.color
                    }}
                    className="progress-fill"
                  ></div>
                </div>
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
    padding: '100px 5%',
    background: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  sectionTitle: {
    fontSize: '3.2rem',  // <-- LAKI NA! Dating 2.5rem lang
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block',
    letterSpacing: '-0.5px'
  },
  subtitle: {
    color: '#666',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  skillsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem'
  },
  skillCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102, 126, 234, 0.1)',
    cursor: 'pointer'
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1rem'
  },
  skillIcon: {
    fontSize: '2rem',
    transition: 'transform 0.3s ease'
  },
  skillInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  skillName: {
    margin: 0,
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: '600'
  },
  skillLevel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#667eea',
    background: 'rgba(102, 126, 234, 0.1)',
    padding: '4px 10px',
    borderRadius: '20px'
  },
  progressWrapper: {
    marginTop: '0.5rem'
  },
  progressBar: {
    backgroundColor: '#e8ecf2',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '8px'
  },
  progress: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative'
  }
};

// Add animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  .skill-card:hover .skillIcon {
    transform: scale(1.1);
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
    animation: progressShimmer 1.5s infinite;
  }
  
  @keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .skill-card {
    animation: skillFadeIn 0.6s ease-out;
    animation-fill-mode: both;
  }
  
  .skill-card:nth-child(1) { animation-delay: 0.1s; }
  .skill-card:nth-child(2) { animation-delay: 0.2s; }
  .skill-card:nth-child(3) { animation-delay: 0.3s; }
  .skill-card:nth-child(4) { animation-delay: 0.4s; }
  .skill-card:nth-child(5) { animation-delay: 0.5s; }
  .skill-card:nth-child(6) { animation-delay: 0.6s; }
  
  @keyframes skillFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Dark mode styles */
  .dark-mode #skills {
    background-color: #0a0e27 !important;
  }
  
  .dark-mode .skill-card {
    background-color: #1a1f4e !important;
    border-color: rgba(102, 126, 234, 0.2) !important;
  }
  
  .dark-mode .skillName {
    color: #ffffff !important;
  }
  
  .dark-mode .skillLevel {
    background: rgba(102, 126, 234, 0.2) !important;
    color: #667eea !important;
  }
  
  .dark-mode .skills-title {
    background: linear-gradient(135deg, #667eea, #764ba2) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
  }
  
  .dark-mode .skills-subtitle {
    color: #cccccc !important;
  }
  
  .dark-mode .progressBar {
    background-color: #0f1535 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Skills;