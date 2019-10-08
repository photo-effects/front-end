import React, { Component } from 'react';

import TextEdit from '../../components/LeftPanelArea/Tools/TextBox/TextEdit';
import TextToolbar from '../../components/LeftPanelArea/Tools/TextBox/TextToolbar';

export default class Toolbar extends Component {
  state = {
    open: true,
    item: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item !== prevState.item) {
      return {
        item: nextProps.item
      };
    } else return null;
  }

  container = open => ({
    height: '72px',
    borderBottom: '2px solid black',
    width: '100%',
    background: 'white',
    transition: 'margin-top 1s ease',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: this.state.item.props.style.zIndex
  });

  render() {
    return (
      <div style={this.container(this.state.open)}>
        {this.state.item ? (
          this.state.item.type === TextEdit ? (
            <TextToolbar
              setTextbox={this.props.setTextbox}
              textbox={this.props.textbox}
              item={this.state.item}
              removeImage={this.props.removeImage}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'white',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <span>{this.props.alt}</span>
              <button
                style={btnBackground}
                onClick={() => this.props.removeImage(this.props.id)}
              >
                <i class="far fa-trash-alt fa-fw fa-3x"></i>
              </button>
            </div>
          )
        ) : null}
        {/* <div 
          style = { openBtn }
          onClick = { () => this.setState({ open: !this.state.open }) }
        >
          open
        </div> */}
      </div>
    );
  }
}

const btnBackground = {
  background: 'white',
  border: 'none'
};

// const openBtn = {
//   position: 'absolute',
//   bottom: '-20px',
//   height: '20px',
//   width: '35px',
//   borderBottom: '2px solid black',
//   borderRight: '2px solid black',
//   cursor: 'pointer'
// }
