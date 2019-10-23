import React, { Component } from 'react';

import EditButton from './EditButton';
import Slider from './Slider';

class TextToolbar extends Component {
  state = {
    color: null,
    background: null,
    slider: null,
    txtcolor: false,
    bgcolor: false
  };

  sliderValue = value => {
    this.props.setTextbox('slider', value);
  };

  editBtns = [
    {
      action: 'bold',
      type: 'weight',
      bg: '#fc5185'
    },
    {
      action: 'italic',
      type: 'style',
      bg: '#43dde6'
    },
    {
      action: 'underline',
      type: 'decoration',
      bg: '#ffdb27'
    }
  ];

  editBtn = color => ({
    fontWeight: 'bold',
    fontSize: '2rem',
    border: 'none',
    padding: '10px',
    borderRadius: '10px',
    background: color
  });

  colors = ['white', 'black', 'red', 'blue', 'green'];

  colorToggle = color => ({
    background: color,
    border: 'black 1px solid',
    fontSize: '3rem',
    width: '25px',
    height: '25px',
    borderRadius: '6px'
  });

  render() {
    return (
      <div style={toolbarStyle}>
        <div style={editBtns}>
          {this.editBtns.map(btn => (
            <EditButton
              action={btn.action}
              type={btn.type}
              setTextbox={this.props.setTextbox}
              style={this.editBtn(btn.bg)}
            />
          ))}
        </div>

        <div style={colorBtnsContainer}>
          <p
            onClick={() => this.setState({ txtcolor: !this.state.txtcolor })}
            style={txtColorBtn}
          >
            A
          </p>

          {this.state.txtcolor ? (
            <div style={txtDropdown}>
              {this.colors.map(c => (
                <div
                  onClick={() => this.props.setTextbox('color', c)}
                  style={this.colorToggle(c)}
                ></div>
              ))}
            </div>
          ) : (
            ''
          )}

          <p
            onClick={() => this.setState({ bgcolor: !this.state.bgcolor })}
            style={bgColorBtn}
          >
            Bg
          </p>

          {this.state.bgcolor ? (
            <div style={bgDropdown}>
              {this.colors.map(c => (
                <div
                  onClick={() => this.props.setTextbox('background', c)}
                  style={this.colorToggle(c)}
                ></div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>

        <div style={sliderContainer}>
          <p>Font:</p>
          {/* <input
            type="range"
            min="0"
            max="150"
            value={this.props.textbox.slider}
            onChange={e => this.sliderValue(e.target.value)}
          /> */}
          <Slider
            sliderValue={this.sliderValue}
            inititalVal={this.props.textbox.slider}
          />
        </div>
        <div style={btnBox}>
          <button
            style={btnBackground}
            onClick={() => this.props.removeImage(this.props.item.props.id)}
          >
            <i class="far fa-trash-alt fa-3x"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TextToolbar;

const flex = (direction, justify, align) => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align
});

const spaceBetween = flex('row', 'space-between', 'center');
const spaceEvenly = flex('row', 'space-evenly', 'center');

const toolbarStyle = {
  ...spaceBetween,
  fontSize: '3rem',
  width: '100%',
  border: '1px solid hotpink',
  backgroundColor: '#364F6B',
  color: 'white',
  height: '100%'
};

const editBtns = {
  ...spaceEvenly,
  width: '20%'
};

const colorBtnsContainer = {
  ...spaceBetween,
  width: '150px',
  height: '100%',
  position: 'relative'
};

const txtColorBtn = {
  background: 'white',
  color: '#FC5185',
  padding: '8px 10px',
  borderRadius: '8px',
  fontSize: '3rem',
  textDecoration: 'underline'
};

const txtDropdown = {
  position: 'absolute',
  top: '75px',
  left: '8px'
};

const bgColorBtn = {
  ...txtColorBtn,
  padding: '8px 9px'
};

const bgDropdown = {
  position: 'absolute',
  top: '75px',
  right: '15px'
};

const sliderContainer = {
  ...spaceEvenly,
  width: '40%'
};

const btnBox = {
  padding: '20px'
};

const btnBackground = {
  background: '#364F6B',
  border: 'none'
};
