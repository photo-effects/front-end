import React, { Component } from 'react';

import TextEdit from '../../components/LeftPanelArea/Tools/TextBox/TextEdit';
import TextToolbar from '../../components/LeftPanelArea/Tools/TextBox/TextToolbar';

export default class Toolbar extends Component {
  state = {
    open: true,
    item: {},
    rotate: false
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
    marginTop: open ? '-72px' : '-144px',
    borderBottom: '2px solid black',
    width: this.props.width,
    background: 'white',
    transition: 'margin-top 1s ease',
    position: 'absolute',
    top: 0 - this.props.top,
    left: 0 - this.props.left,
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
              <form>
                <span>Opacity: </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={this.props.opacity}
                  onChange={e => this.props.changeOpacity(e.target.value)}
                />

                <span>Grayscale: </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={this.props.grayscale}
                  onChange={e => this.props.changeGrayscale(e.target.value)}
                />

                <span>Rotate: </span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={this.props.transform}
                  onChange={e => this.props.changeTransform(e.target.value)}
                />

                <button onClick={this.props.flipImage}> Flip Image </button>
              </form>
              <button
                style={btnBackground}
                onClick={e => this.props.removeImage(this.props.id)}
              >
                <i className="far fa-trash-alt fa-fw fa-3x"></i>
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
