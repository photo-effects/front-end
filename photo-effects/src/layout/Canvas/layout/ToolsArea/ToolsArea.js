import React from 'react';

import TopBar from './TopBar';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import ToolsTopArea from './ToolsTopArea';

const ToolsArea = props => {
  return (
    <div className="panel-container">
      {/* <TopBar /> */}
      <ToolsTopArea />
      <ToolPanel />
    </div>
  );
};

export default ToolsArea;
