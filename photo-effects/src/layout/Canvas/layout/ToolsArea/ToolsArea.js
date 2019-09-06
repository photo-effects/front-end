import React from 'react';

import TopBar from './TopBar';
import ToolsContainer from './ToolsContainer';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import SaveDOMtoImage from './Save/SaveDOMtoImage';

const ToolsArea = props => {
  return (
    <div style = { container }>
      <TopBar />
      {/* <ToolsContainer /> */}
      <SaveDOMtoImage />
      <ToolPanel />
    </div>
  );
};

const container = {
  width: '360px',
  background: '#323F4B',
};

export default ToolsArea;
