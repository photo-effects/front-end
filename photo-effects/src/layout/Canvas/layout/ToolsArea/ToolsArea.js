import React from 'react';

import TopBar from './TopBar';
import ToolsContainer from './ToolsContainer';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';

const ToolsArea = props => {
  return (
    <div style = { container }>
      <TopBar />
      {/* <ToolsContainer /> */}
      <ToolPanel />
    </div>
  );
};

const container = {
  height: '100%',
  width: '360px',
  borderRight: '2px solid black'
};

export default ToolsArea;
