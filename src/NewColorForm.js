import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColorToIndex }) => {
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Initial color
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleAddColor = () => {
    // Add the new color to the color index
    addColorToIndex({
      name: colorName,
      color: selectedColor
    });

    // Navigate to the color index page
    navigate('/colors');
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <input
        type="text"
        placeholder="Color Name"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
      <ChromePicker color={selectedColor} onChange={handleColorChange} />
      <div style={{ backgroundColor: selectedColor, height: '100vh', transition: 'background-color 0.5s' }}>
      </div>
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
};

export default NewColorForm;