import React, { Component } from 'react'

export default class Toolbar extends Component {
  state = {
    open: false
  }

  container = open => ({
    width: '100%',
    position: 'absolute',
    top: this.state.open ? 0 : '-47px',
    // top: '-28px',
    left: 0,
    transition: 'top 1s ease-out'
  })

  arrowContainer = open => ({
    width: '100%',
    color: 'black',
    position: 'absolute',
    top: this.state.open ? 0 : 47,
    zIndex: this.state.open ? -1 : 1000,
    transition: this.state.open ? 'top 1s ease-out' : 'top 1s ease-out, z-index 1s ease 1s'
  })

  tools = [
    'open',
    'save',
    'brush',
    'line',
    'rectangle',
    'circle',
    'ellipse',
    'polygon'
  ]

  render() {
    return (
      <div style = { this.container(this.state.open) }>
        <div 
          style = { toolbar }
          onMouseEnter = { e => e.preventDefault() }
          onMouseLeave = { () => this.setState({ open: !this.state.open })}
        >
          { this.tools.map(tool => {
            if(tool === this.props.currentTool) {
              return (
                <span
                  key = { tool }
                  style = { item }
                  onClick = { () => this.props.changeTool(tool) }
                >
                  { tool.toUpperCase() }
                </span> 
              )
            } else {
              return (
                <span
                  key = { tool }
                  style = { item }
                  onClick = { () => this.props.changeTool(tool) }
                >
                  { tool }
                </span>
              )
            }
          }) }
        </div>
        <div style = { this.arrowContainer(this.state.open) }>
          <div 
            style = { arrow }
            onMouseEnter = { this.state.open ? null : () => this.setState({ open: !this.state.open })}
          >
            >
          </div>
        </div>
      </div>
    )
  }
}

const toolbar = {
  backgroundColor: '#444',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  borderBottom: '2px solid black'
}

const item = {
  width: '12%',
  textAlign: 'center',
  padding: '15px 5px',
  transition: 'all 0.5s ease',
  cursor: 'pointer'
}

const arrow = {
  borderRight: '2px solid black',
  borderBottom: '2px solid black',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'rotate(90deg)',
  marginRight: '1px',
  position: 'absolute',
  right: 0
}