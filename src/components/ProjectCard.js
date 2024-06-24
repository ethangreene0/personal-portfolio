import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './ProjectCard.css'; // Import the CSS file

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [showTitle, setShowTitle] = useState(true);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setShowTitle(false);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowTitle(true);
    }, 200); // delay of 500ms
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="overlay">
          <h4 className={`title ${showTitle ? 'visible' : 'hidden'}`}>
            {title}
          </h4>
          <img src={imgUrl} alt={title} style={{ width: '100%' }} />
        </div>
        <div className="proj-txtx">
          <span>{description}</span>
          <span style={{ display: 'none' }}>{title}</span>
        </div>
      </div>
    </Col>
  );
};
