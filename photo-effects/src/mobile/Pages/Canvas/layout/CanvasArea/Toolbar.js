import React, { Component } from 'react';

import TextEdit from '../../components/LeftPanelArea/Tools/TextBox/TextEdit';
import TextToolbar from '../../components/LeftPanelArea/Tools/TextBox/TextToolbar';

export default class Toolbar extends Component {
  state = {
    item: {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.item !== prevState.item) {
      return {
        item: nextProps.item
      }
    } else return null;
  }

  render() { 
    const container = {
      height: '10%',
      border: '1px solid gray',
      width: '100%',
      background: 'white',
      position: 'absolute',
      bottom: 0,
      zIndex: this.state.item.props.style.zIndex,
      background: 'white', 
      color: 'black', 
      fontWeight: 'bold', 
      fontSize: '2rem', 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center' 
    }

    return (
      <div style = { container }>
        { this.state.item ? 
          this.state.item.type === TextEdit ? 
          <TextToolbar 
            setTextbox = { this.props.setTextbox }
            textbox = { this.props.textbox }
            item = { this.state.item }
            removeImage= { this.props.removeImage }
          /> 
        : 
          <>
            <span>{ this.props.alt }</span>
            <button 
              style={btnBackground} 
              onClick={() => this.props.removeImage(this.props.id)}
            >
              <i class="far fa-trash-alt fa-fw fa-3x"></i>
            </button>
          </>
        :
          null
        }
      </div>
    )
  } 
}

const btnBackground = {
  background:'white',
  border: 'none'
}