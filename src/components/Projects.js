import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Clinic Management System',
      description: 'A secure medical system for managing student health records, clinic appointments, and generating health reports.',
      tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      demoLink: 'https://clinic-system-cca.vercel.app/login.html',
      icon: '🏥'
    },
    {
      title: 'SASO System',
      description: 'A comprehensive student affairs and services management system for handling student records and administrative tasks.',
      tech: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://sasosystem-cca.vercel.app/login.html',
      icon: '📚'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my skills, projects, and professional experience as a frontend developer.',
      tech: ['React', 'CSS3', 'EmailJS'],
      demoLink: 'https://my-porfolio-2-murex.vercel.app/', // <--- BAGONG LINK
      icon: '💼'
    }
  ];

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="sectionTitle">My Projects</h2>
        <p style={styles.subtitle}>Here are some of my recent works</p>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={styles.projectCard}>
              <div style={styles.projectIcon}>{project.icon}</div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech" style={styles.tech}>{tech}</span>
                ))}
              </div>
              <div style={styles.projectLinks}>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.demoLink}
                  className="demo-link"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  // ... (mananatili ang lahat ng styles mo, walang babaguhin dito)
  projects: {
    padding: '100px 5%',
    backgroundColor: '#ffffff',
    position: 'relative'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
    color: '#1a1a2e'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '3rem',
    fontSize: '1rem'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '1.8rem',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid rgba(102, 126, 234, 0.1)',
    textAlign: 'center'
  },
  projectIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  projectTitle: {
    color: '#667eea',
    marginBottom: '1rem',
    fontSize: '1.3rem',
    fontWeight: '600'
  },
  projectDesc: {
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  techStack: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
    justifyContent: 'center'
  },
  tech: {
    backgroundColor: '#f0f0f0',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    color: '#667eea'
  },
  projectLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  demoLink: {
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: '500'
  }
};

// Add styles (mananatili rin ang mga styles na ito)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  .demo-link:hover {
    background-color: #764ba2 !important;
    transform: translateY(-2px);
  }
  
  /* Dark mode styles */
  .dark-mode #projects {
    background-color: #0a0e27 !important;
  }
  
  .dark-mode .project-card {
    background-color: #1a1f4e !important;
    border-color: rgba(102, 126, 234, 0.2) !important;
  }
  
  .dark-mode .project-title {
    color: #667eea !important;
  }
  
  .dark-mode .project-desc {
    color: #cccccc !important;
  }
  
  .dark-mode .sectionTitle {
    color: #ffffff !important;
  }
  
  .dark-mode .subtitle {
    color: #aaaaaa !important;
  }
  
  .dark-mode .tech {
    background-color: #0f1535 !important;
    color: #667eea !important;
  }
  
  .project-title {
    color: #667eea;
  }
  
  .sectionTitle {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
document.head.appendChild(styleSheet);

export default Projects;