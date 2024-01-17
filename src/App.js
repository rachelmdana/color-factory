import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';


const App = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default color
  const [colorList, setColorList] = useState([
    { name: 'Red', color: '#FF0000' },
    { name: 'Green', color: '#00FF00' },
    { name: 'Blue', color: '#0000FF' },
  ]);


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const addColorToIndex = (newColor) => {
    // Update the color list
    setColorList([...colorList, newColor]);
    console.log('Adding color to index:', newColor);
  };

  return (
    <Router>
      <div style={{ backgroundColor: selectedColor, height: '100vh', transition: 'background-color 0.5s' }}>
        <AppRoutes
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
        addColorToIndex={addColorToIndex}
        colorList={colorList}
        />
      </div>
    </Router>
  );
};

export default App;