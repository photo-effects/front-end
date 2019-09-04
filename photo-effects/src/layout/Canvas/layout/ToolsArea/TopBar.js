import React, { Component } from 'react'

export default function TopBar() {
  const container = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    padding: '5px'
  }

  const tools = [
    'Share',
    'Print',
    'Save'
  ]

  return (
    <div style = { container }>
      { tools.map(tool => (
        <Tool 
          key = { tool }
          tool = { tool }
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
        style = { this.btn(this.state.hover) }
        onMouseEnter = { this.state.hover ? null : () => this.setState({ hover: true }) }
        onMouseLeave = { this.state.hover ? () => this.setState({ hover: false }) : null }
      >
        { this.props.tool }
      </div>
    )
  }
}