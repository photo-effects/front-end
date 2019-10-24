import React from 'react';
import Tabs from './Tabs';
import TextEditorTool from './Tools/TextEditorTool';
// import Layers from './Tools/Layers';
import GraphicsTool from './Tools/GraphicsTool';
import PhotosPanel from './Tools/PhotosPanel';
import PaintTool from './Tools/PaintTool';

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
        <div label="Paint">
          <PaintTool 
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
