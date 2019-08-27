import React from 'react';
import Tabs from './Tabs';

function TabsContainer() {
  return (
    <div>
      <h1>Tool Panel</h1>
      <Tabs>
        <div label="Upload Tools">
          These are all the uploaded photos.
        </div>
        <div label="Text Editor">
          These are all the text editor tools.
        </div>
        <div label="Layer Tools">
          These are all the layer tools.
        </div>
      </Tabs>
    </div>
  );
}

export default TabsContainer;