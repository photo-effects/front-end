import React from 'react';

// import TopBar from './TopBar';
import ToolPanel from '../../components/LeftPanelArea/ToolPanel';
import ToolsTopArea from './ToolsTopArea';

const ToolsArea = props => {
  return (
  <div style =  { panel_container }>
      {/* <ToolsContainer /> */}
     <ToolsTopArea />
      <ToolPanel 
        addItem = { props.addItem }
      />

    </div>
  );
};

const panel_container = {
  background: '#d0d0d0',
  width: '25%'
}

export default ToolsArea;

// import React from 'react';

// import TopBar from './TopBar';
// // import ToolsContainer from './ToolsContainer';
// import ToolPanel from '../../components/LeftPanelArea/ToolPanel';

// const ToolsArea = props => {
//   return (
//     <div style = { container }>
//       <TopBar />
//       {/* <ToolsContainer /> */}
//       <ToolPanel 
//         addItem = { props.addItem }
//       />
//     </div>
//   );
// };

// const container = {
//   height: '100%',
//   width: '20%',
//   borderRight: '2px solid black'
// };

// export default ToolsArea;
