import React, { Component } from 'react';
​
class ToolsContainer extends Component {
  container = {
    borderTop: '2px solid black',
    height: '100%'
  }
​
  toolMenus = [
    'Stickers',
    'Text',
    'Layers'
  ]
​
  render = () => (
    <div style = { this.container }>
      { this.toolMenus.map(menu => (
        <ToolMenu 
          key = { menu }
          menu = { menu }
        />
      ))}
    </div>
  );
}
​
class ToolMenu extends Component {
  state = {
    menuOpen: false
  }
​
  container = {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center'
  }
​
  svg = open => ({
    transform: open ? 'rotate(90deg)' : null,
    transition: 'transform 0.5s ease'
  })
​
  render = () => (
    <div style = { this.container }>
      <svg 
        height="30" 
        width="30" 
        style = { this.svg(this.state.menuOpen) }
        onClick = { () => this.setState({ menuOpen: !this.state.menuOpen })}
      >
		    <polygon points="5,5 20,15 5,25" />
		    Sorry, your browser does not support inline SVG.
	    </svg>
      { this.props.menu }
    </div>
  )
}
​
export default ToolsContainer;

