import React from 'react';

// import TopBar from './TopBar';

import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import ToolsTopArea from './ToolsTopArea';

const ToolsArea = props => {
  return (
  <div style =  { panel_container }>
      {/* <ToolsContainer /> */}
     <ToolsTopArea auth = { props.auth } />
      <ToolPanel 
        addItem = { props.addItem }
      />

    </div>
  );
};


const panel_container = {
  background: '#d0d0d0',
  height: '25%'
}

export default ToolsArea;