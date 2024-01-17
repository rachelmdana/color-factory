import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ColorDetails = ({ selectedColor }) => {
  const { color } = useParams();

  return (
    <div style={{ backgroundColor: color, height: '100vh', transition: 'background-color 0.5s' }}>
      <h1>This is the Color Details Page</h1>
      <Link to="/colors" style={{ color: selectedColor }}>Return to Color Index</Link>
    </div>
  );
};

export default ColorDetails;
