import React, { Component } from 'react';
import Tabs from '../../components/LeftPanelArea/Tabs';
import TextEditorTool from '../../components/LeftPanelArea/Tools/TextEditorTool';
// import Layers from './Tools/Layers';
import GraphicsTool from '../../components/LeftPanelArea/Tools/GraphicsTool';
import PhotosPanel from '../../components/LeftPanelArea/Tools/PhotosPanel';

class ToolPanel extends Component {
  state = {
    open: false
  }

  close = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state;
    const { addItem } = this.props;

    const container = {
      position: 'absolute',
      top: '10%',
      height: '90%',
      width: '100%',
      left: open ? 0 : '-100%',
      border: '1px solid gray',
      transition: 'left 750ms ease-out',
      zIndex: 10000
    }

    const btnContainer = {
      position: 'absolute',
      top: 0,
      zIndex: 1000000000,
      height: '72px',
      width: '72px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem'
    }

    return (
      <>
        <div style = { container }>
          <Tabs>
            <div label="Photos">
              <PhotosPanel 
                addItem = { addItem }
                close = { this.close }
              />
            </div>
            <div label="Graphics">
              <GraphicsTool 
                addItem = { addItem }
                close = { this.close }
              />
            </div>
            <div label="Text">
              <TextEditorTool 
                addItem = { addItem }
                close = { this.close }
              />
            </div>
            {/* <div label="Layers">
              <Layers />
            </div> */}
          </Tabs>
        </div>
        <div
          style = { btnContainer }
          onClick = { () => this.setState({ open: !open }) }
        >
          { open ? 
            <i class="far fa-minus-square"></i>
          :
            <i class="far fa-plus-square"></i>
          }
        </div>
      </>
    );
  }
}


export default ToolPanel;
