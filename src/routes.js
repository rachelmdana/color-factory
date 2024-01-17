import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ColorsIndex from './ColorsIndex';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

const AppRoutes = ({ selectedColor, onColorChange, addColorToIndex, colorList }) => {
  return (
    <Routes>
      <Route
        path="/colors/new"
        element={<NewColorForm addColorToIndex={addColorToIndex} />}
      />

      <Route
        path="/colors/:color"
        element={<ColorDetails selectedColor={selectedColor} />}
      />
      <Route
        path="/colors"
        element={<ColorsIndex colorList={colorList} />}
      />
      <Route path="*" element={<ColorsIndex colorList={colorList} />} />
    </Routes>
  );
};

export default AppRoutes;