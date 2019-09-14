import React from 'react';
import Tabs from './Tabs';
import TextEditorTool from './Tools/TextEditorTool';
import Layers from './Tools/Layers';
import GraphicsTool from './Tools/GraphicsTool';
import PhotosPanel from './Tools/PhotosPanel';

function ToolPanel(props) {
  return (
    <div>
      <Tabs>
        <div label="Photos">
          <PhotosPanel 
            addItem = { props.addItem }
          />
        </div>
        <div label="Graphics">
          <GraphicsTool 
            addItem = { props.addItem }
          />
        </div>
        <div label="Text">
          <TextEditorTool 
            addItem = { props.addItem }
          />
        </div>
        {/* <div label="Layers">
          <Layers />
        </div> */}
      </Tabs>
    </div>
  );
}

export default ToolPanel;

// import React from 'react';
// import Tabs from './Tabs';
// // import UploadedPhotosTool from './Tools/UploadedPhotosTool';
// import TextEditorTool from './Tools/TextEditorTool';
// // import Layers from './Tools/Layers';
// import GraphicsTool from './Tools/GraphicsTool';
// // import StockPhotosTool from './Tools/StockPhotosTool';
// import PhotosPanel from './Tools/PhotosPanel';

// function ToolPanel(props) {
//   return (
//     <div style={toolPanelStyle}>
//       <Tabs>
//         <div label="Photos">
//           <PhotosPanel 
//             addItem = { props.addItem }
//           />
//         </div>
//         <div label="Graphics">
//           <GraphicsTool 
//             addItem = { props.addItem }
//           />
//         </div>
//         <div label="Text">
//           <TextEditorTool 
//             addItem = { props.addItem }
//           />
//         </div>
//         {/* <div label="Layers">
//           <Layers />
//         </div> */}
//       </Tabs>
//     </div>
//   );
// }

// const toolPanelStyle = {
//   fontFamily: 'Arial',
//   fontSize: '16px',
//   minWidth: '360px'
// }

// export default ToolPanel;