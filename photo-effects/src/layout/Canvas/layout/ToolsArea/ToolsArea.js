import React from 'react';

import TopBar from './TopBar';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import ToolsTopArea from './ToolsTopArea';

const ToolsArea = props => {
  return (

    <div style = { container } className="panel-container">
      <TopBar auth={props.auth}/>

      {/* <ToolsContainer /> */}
     <ToolsTopArea />
      <ToolPanel 
        addText = { props.addText }
      />

    </div>
  );
};

export default ToolsArea;
