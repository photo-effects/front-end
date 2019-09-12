import React from 'react';
import Tabs from './Tabs';
import UploadedPhotosTool from './Tools/UploadedPhotosTool';
import TextEditorTool from './Tools/TextEditorTool';
import Layers from './Tools/Layers';
import GraphicsTool from './Tools/GraphicsTool';
import StockPhotosTool from './Tools/StockPhotosTool';
import PhotosPanel from './Tools/PhotosPanel';

function ToolPanel(props) {
  return (
    <div>
      <Tabs>
        <div label="Photos">
          <PhotosPanel />
        </div>
        <div label="Graphics">
          <GraphicsTool />
        </div>
        <div label="Text">
          <TextEditorTool 
            addText = { props.addText }
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