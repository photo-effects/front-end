import React, { Component } from 'react'

export default class TopBar extends Component {
  container = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    padding: '5px'
  }

  tools = [
    // 'Share',
    // 'Print',
    'Home',
    'Save',
    'Logout'
  ]

  clickHandler = type => {
    switch(type) {
      case 'Share':
        // do something
        break;
      case 'Print':
        // do something
        break;
      case 'Logout': 
        return this.props.auth.logout();

      default: return;
    }
  }

  render = () => (
    <div style = { this.container }>
      { this.tools.map(tool => (
        <Tool 
          key = { tool }
          tool = { tool }
          clickHandler = { this.clickHandler }
        />
      )) }
    </div>
  )
}

class Tool extends Component {
  state = {
    hover: false
  }

  btn = hover => ({
    borderRadius: '100%',
    padding: '10px',
    border: '1px solid black',
    background: hover ? 'black' : 'white',
    color: hover ? 'white' : 'black',
    cursor: 'pointer'
  })

  render() {
    return (
      <div 
        // style = { this.btn(this.state.hover) }
        style = {buttonStyle}
        onMouseEnter = { this.state.hover ? null : () => this.setState({ hover: true }) }
        onMouseLeave = { this.state.hover ? () => this.setState({ hover: false }) : null }
        onClick = { () => this.props.clickHandler(this.props.tool) }
      >
        { this.props.tool }
      </div>
    )
  }
}

const buttonStyle = {
  display: 'inline-block',
  width: '45%',
  border: '0px solid #000',
  padding: '5px',
  textAlign: 'center',
  margin: '5px',
  borderRadius: '5px',
  background: '#43DDE6',
  cursor: 'pointer',
  color: '#2f2f2f',
  fontSize: '16px',
  fontWeight: '700',
}