import React from 'react';

import Toolbar from './Toolbar';

const CanvasArea= () => {
  return (
    <div style = { container }>
      <Toolbar />
    </div>
  );
}

const container = {
  width: '80%',
  height: '100%'
}

export default CanvasArea;
