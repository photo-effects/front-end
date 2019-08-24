import React, { Component } from 'react';
import ToolLayers from './Tools/ToolLayers';
import ToolTextEditor from './Tools/ToolTextEditor';
import ToolUploads from './Tools/ToolUploads';

class ToolPanel extends Component {
   state = {
      activeTool: "Uploads",
      clicked: 1
   }

   changeActiveTool = newActiveTool => {
      this.setState({
         ...this.state,
         activeTool: newActiveTool,
         clicked: this.state.clicked + 1
      })
   }

   makeUploadsActive = () => {
      this.setState({
         ...this.state,
         activeTool: "Uploads"
      })
   }

   makeTextEditorActive = () => {
      this.setState({
         ...this.state,
         activeTool: "TextEditor"
      })
   }

   makeLayersActive = () => {
      this.setState({
         ...this.state,
         activeTool: "Layers"
      })
   }

   render() {
      return (
         <div>
            {this.state.clicked}
            <h2>Active Tool: </h2>
            {/* {this.state.activeTool === "Uploads" ? <ToolUploads /> : <ToolTextEditor />} */}
            {this.state.activeTool === "Uploads" ? <ToolUploads /> : (this.state.activeTool === "TextEditor" ? <ToolTextEditor /> : <ToolLayers />)}
         
            <button onClick={this.changeActiveTool}>Test Active Change Tool</button>

            <button onClick={this.makeUploadsActive}>Make Uploads Active</button>
            <button onClick={this.makeTextEditorActive}>Make Text Editor Active</button>
            <button onClick={this.makeLayersActive}>Make Layers Active</button>
         </div>
      )
   }
}

export default ToolPanel;