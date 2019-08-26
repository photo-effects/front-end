import React from 'react';

import TopBar from '../components/Tools/TopBar';
import Tools from '../components/Tools/Tools';

const ToolsArea = () => {
  return (
    <div style = { container }>
      <TopBar />
      <Tools />
    </div>
  );
}

const container = {
  height: '100%',
  width: '20%',
  borderRight: '2px solid black'
}

export default ToolsArea;
