import React, { Component } from 'react';

import Tools from './layout/ToolsArea/ToolsArea';
import CanvasArea from './layout/CanvasArea/CanvasArea';
import ToolPanel from './components/LeftPanelArea/ToolPanel'

export default class Canvas extends Component {
  render() {
    return (
      <div style = { page }>
        <Tools />
        <CanvasArea />
      </div>
    )
  }
}

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
}