import React from 'react';

import TopBar from './TopBar';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import ToolsTopArea from './ToolsTopArea';

const ToolsArea = props => {
  return (

    <div  className="panel-container">
      
      {/* <ToolsContainer /> */}
     <ToolsTopArea />
      <ToolPanel 
        addText = { props.addText }
      />

    </div>
  );
};

export default ToolsArea;
