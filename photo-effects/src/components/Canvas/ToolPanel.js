import React from 'react';
import Tabs from './Tabs';
import ToolUploads from './Tools/ToolUploads';
import ToolTextEditor from './Tools/ToolTextEditor';
import ToolLayers from './Tools/ToolLayers';

function ToolPanel() {
  return (
    <div>
      <Tabs>
        <div label="Upload Tools">
          <ToolUploads />
        </div>
        <div label="Text Editor">
          <ToolTextEditor />
        </div>
        <div label="Layer Tools">
          <ToolLayers />
        </div>
      </Tabs>
    </div>
  );
}

export default ToolPanel;