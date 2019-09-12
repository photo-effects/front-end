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
        addItem = { props.addItem }
      />

    </div>
  );
};


const container = {
  height: '100%',
  width: '20%',
  borderRight: '2px solid black'
};


export default ToolsArea;
