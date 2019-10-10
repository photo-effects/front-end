import React, { Component } from 'react';

import Toolbar from './Toolbar';
import CanvasTemplate from './CanvasTemplate';

export default class Paint extends Component {
  state = {
    currentTool: 'brush',
    usingBrush: false,
    toolbarOpen: true,
  }

  changeTool = tool => {
    this.setState({ currentTool: tool })
  }

  openToolbar = () => {
    this.setState({ toolbarOpen: !this.state.toolbarOpen })
  }

  render() {
    return (
      <div>
        <Toolbar 
          changeTool = { this.changeTool }
          currentTool = { this.state.currentTool }
          open = { this.state.toolbarOpen }
        />
        <CanvasTemplate
          currentTool = { this.state.currentTool } 
        />
      </div>
    )
  }
}