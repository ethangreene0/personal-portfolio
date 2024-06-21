import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="overlay">
          <h4 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{title}</h4>
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


