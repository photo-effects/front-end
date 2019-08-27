import React from 'react';

import TopBar from './TopBar';
import ToolsContainer from './ToolsContainer';

const ToolsArea = () => {
  return (
    <div style = { container }>
      <TopBar />
      <ToolsContainer />
    </div>
  );
}

const container = {
  height: '100%',
  width: '20%',
  borderRight: '2px solid black'
}

export default ToolsArea;
