import React from 'react';

import TopBar from './TopBar';
import ToolsContainer from './ToolsContainer';
// import toolpanel

const ToolsArea = props => {
  return (
    <div style={container}>
      <TopBar auth={props.auth} />
      {/* <ToolsContainer /> */}
      {/* <ToolPanel /> */}
    </div>
  );
};

const container = {
  height: '100%',
  width: '20%',
  borderRight: '2px solid black'
};

export default ToolsArea;
