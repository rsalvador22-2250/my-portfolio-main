import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: isDarkMode ? '#667eea' : '#764ba2',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;