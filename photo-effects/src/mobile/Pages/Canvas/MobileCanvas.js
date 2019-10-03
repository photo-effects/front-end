import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import ToolsTopArea from './layout/ToolsArea/ToolsTopArea';
import CanvasArea from './layout/CanvasArea/CanvasArea';
import ToolPanel from './layout/ToolsArea/ToolPanel'

const imgsrc = require('./components/LeftPanelArea/Tools/svg/stars.svg')

export default class Canvas extends Component {
  state = {
    items: [],
    w: 0
  }

  componentDidMount() {
    const w = (ReactDOM.findDOMNode(this).getBoundingClientRect().width / 4) * 3;
    console.log(w)
    this.setState({ w })

    // this.addItem(<img src={imgsrc}/>)
  }

  // this.setState({ items: JSON.parse("[{\"type\":\"img\",\"key\":null,\"ref\":null,\"props\":{\"height\":492,\"width\":293.875,\"x\":270.8125,\"y\":-27,\"style\":{\"zIndex\":1},\"id\":\"88b2af17-a46e-4c04-bba2-30508737c444\",\"src\":\"https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg\"},\"_owner\":null,\"_store\":{}}]") })
  
  bringToTop = id => {
    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]

    let items = this.state.items.map(item => {
      if(item.props.id === id) {
        return (
          <item.type
            {...item.props}
            style={{
              ...item.props.style,
              zIndex: this.state.items.length ? z + 1 : 0
            }}
          >
            {item.props.children}
          </item.type>
        )
      } else return item;
    });

    this.setState({ items })
  }

  addItem = item => {
    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]
    
    this.setState({ items: [
      ...this.state.items,
      <item.type 
        height = { 100 }
        width = { 100 }
        x = { 100 }
        y = { 100 }
        style = {{ 
          zIndex: this.state.items.length ? z + 1 : 0,
          width: '100%',
          height: '100%'
        }}
        id = { this.state.items.length || 0 }
        src = { item.type === 'img' ? item.props.src : null }
        alt = { item.props }
      />
    ] })
    console.log(item)
  }

   filter = id => {
    return this.state.items.filter(item => item.props.id !== id);
  };

  removeImage = id => {
    this.setState({ items: this.filter(id) });
    console.log(this.state.items);
  };

  setItem = (id, w, h, x, y) => {  
    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            { ...item.props }
            width = { w }
            height = { h }
            x = { x }
            y = { y }
            style = {{
              ...item.props.style,
              width: '100%',
              height: '100%',
            }}
          >
            {item.props.children}
          </item.type>
        );
      } else return item;
    });

    this.setState({ items })
  }

  getJsonData = () => {
    console.log(JSON.stringify(this.state.items))
  }

  render() { 
    return (
      <div style = { page }>
        <ToolsTopArea 
          auth = { this.props.auth } 
          addItem = { this.addItem }
        />
        <CanvasArea 
          items = { this.state.items }
          bringToTop = { this.bringToTop }
          setItem = { this.setItem }
          getJsonData = { this.getJsonData }
          removeImage={this.removeImage}
          image={this.props.image}
        />
        <ToolPanel 
          auth = { this.props.auth } 
          addItem = { this.addItem }
        />
      </div>
    )
  }
}

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
}
