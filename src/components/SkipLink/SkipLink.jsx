// File: src/components/SkipLink/SkipLink.jsx

import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#main-content" 
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#2d7d7d',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        textDecoration: 'none',
        zIndex: 9999,
        fontWeight: 600,
        fontSize: '14px',
        transition: 'top 0.3s ease',
        outline: 'none'
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;