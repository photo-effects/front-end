import React from 'react';

import Canvas from '../components/CanvasArea/Canvas';
import Toolbar from '../components/CanvasArea/Toolbar';

const CanvasArea = () => {
  return (
    <div style = { container }>
      <Toolbar />
      <Canvas />
    </div>
  );
}

const container = {
  width: '80%',
  height: '100%'
}

export default CanvasArea;
