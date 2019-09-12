import React, { Component } from 'react';


// import TextToolbar from '../../../TextBox/TextToolbar';

export default class Toolbar extends Component {
  state = {
    open: false
  }

  container = open => ({
    height: '52px',
    marginTop: open ? 0 : '-52px',
    borderBottom: '2px solid black',
    width: '100%',
    background: 'white',
    transition: 'margin-top 1s ease',
    position: 'relative',
    zIndex: 100001
  })

  render() {
    return (
      <div style = { this.container(this.state.open) }>
        {/* <TextToolbar /> */}
        <div 
          style = { openBtn }
          onClick = { () => this.setState({ open: !this.state.open }) }
        >
          open
          
        </div>
      </div>
    )
  } 
}

const openBtn = {
  position: 'absolute',
  bottom: '-20px',
  height: '20px',
  width: '35px',
  borderBottom: '2px solid black',
  borderRight: '2px solid black',
  cursor: 'pointer'
}