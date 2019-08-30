import React from 'react';
import Tabs from './Tabs';
import UploadedPhotosTool from './Tools/UploadedPhotosTool';
import TextEditorTool from './Tools/TextEditorTool';
import Layers from './Tools/Layers';
import GraphicsTool from './Tools/GraphicsTool';
import StockPhotosTool from './Tools/StockPhotosTool';

function ToolPanel() {
  return (
    <div style={toolPanelStyle}>
      <Tabs>
        <div label="Photos">
          <UploadedPhotosTool /> 
          {/* <StockPhotosTool /> */}
        </div>
        <div label="Graphics">
          <GraphicsTool />
        </div>
        <div label="Text">
          <TextEditorTool />
        </div>
        <div label="Layers">
          <Layers />
        </div>
      </Tabs>
    </div>
  );
}

const toolPanelStyle = {
  fontFamily: 'Arial',
  fontSize: '16px',
  minWidth: '360px'
}

export default ToolPanel;