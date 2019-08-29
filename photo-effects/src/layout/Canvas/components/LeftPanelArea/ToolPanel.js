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
        <div label="Graphics">
          <GraphicsTool />
        </div>
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
      </Tabs>
    </div>
  );
}

export default ToolPanel;