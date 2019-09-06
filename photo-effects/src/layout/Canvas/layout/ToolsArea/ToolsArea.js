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
  width: '360px',
  background: '#323F4B',
};

export default ToolsArea;
