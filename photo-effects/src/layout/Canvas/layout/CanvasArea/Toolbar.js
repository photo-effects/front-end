import React, { Component } from 'react';


import TextEdit from '../../components/LeftPanelArea/Tools/TextBox/TextEdit';
import TextToolbar from '../../components/LeftPanelArea/Tools/TextBox/TextToolbar';


export default class Toolbar extends Component {
  state = {
    open: true,
    item: {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.item !== prevState.item) {
      return {
        item: nextProps.item
      }
    } else return null;
  }

  container = open => ({
    height: '72px',
    marginTop: open ? '-72px' : '-144px',
    borderBottom: '2px solid black',
    width: '100%',
    background: 'white',
    transition: 'margin-top 1s ease',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: this.state.item.props.style.zIndex
  })

  render() { 
    return (
      <div style = { this.container(this.state.open) }>

        { this.state.item ? 
          this.state.item.type === TextEdit ? <TextToolbar 
            setTextbox = { this.props.setTextbox }
            textbox = { this.props.textbox }
          /> 
        : 
          <div style = {{ width: '30%', height: 'auto', marginTop: '15px', background: 'black', color: 'red', fontWeight: 'bold', fontSize: '3rem', textAlign: 'center' }}>{ this.props.id }</div>
        :
          null
        }

      </div>
    )
  } 
}

// const openBtn = {
//   position: 'absolute',
//   bottom: '-20px',
//   height: '20px',
//   width: '35px',
//   borderBottom: '2px solid black',
//   borderRight: '2px solid black',
//   cursor: 'pointer'
// }