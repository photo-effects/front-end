import React from 'react';
import Tabs from './Tabs';
import UploadedPhotosTool from './Tools/UploadedPhotosTool';
import TextEditorTool from './Tools/TextEditorTool';
import LayersTool from './Tools/LayersTool';
import GraphicsTool from './Tools/GraphicsTool';
import StockPhotosTool from './Tools/StockPhotosTool';

function ToolPanel() {
  return (
    <div>
      <Tabs>
        <div label="Photos">
          <UploadedPhotosTool /> 
          <StockPhotosTool />
        </div>
        <div label="Text">
          <TextEditorTool />
        </div>
        <div label="Layers">
          <LayersTool />
        </div>
        <div label="Graphics">
          <GraphicsTool />
        </div>
      </Tabs>
    </div>
  );
}

export default ToolPanel;