import React from 'react';

function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="sectionTitle">About Me</h2>
        <div style={styles.content}>
          <div style={styles.imageContainer}>
            <img 
              src="/rio.png"
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
          
          <div style={styles.text}>
            <p style={styles.paragraph} className="paragraph">
              I'm a passionate frontend developer with 3+ years of experience in building
              responsive and user-friendly websites. I love turning ideas into reality through code.
            </p>
            <p style={styles.paragraph} className="paragraph">
              When I'm not coding, you can find me reading tech blogs, contributing to open source,
              or learning new technologies to stay up-to-date with the latest trends.
            </p>
            <div style={styles.info} className="info">
              <div><strong>📧 Email:</strong> salvadorrio639@gmail.com</div>
              <div><strong>📍 Location:</strong> Pampanga, Philippines</div>
              <div><strong>🎂 Birthday:</strong> February 2, 2003</div>
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
    backgroundColor: 'white'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333'
  },
  content: {
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center'
  },
  profileImage: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #667eea',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  text: {
    flex: 2
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
    color: '#666'
  },
  info: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    lineHeight: '2'
  }
};

export default About;