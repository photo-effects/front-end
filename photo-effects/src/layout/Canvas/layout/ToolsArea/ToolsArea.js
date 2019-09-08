import React from 'react';

import TopBar from './TopBar';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import SaveImage from './SaveImage';

const ToolsArea = props => {
  return (
    <div style = { container }>
      {/* <TopBar /> */}
      <SaveImage />
      <ToolPanel />
    </div>
  );
};

const container = {
  width: '340px',
};

export default ToolsArea;
