import React, { Component } from 'react';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import './SliderStyle.css';

export class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 30
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.initialValue ? this.props.initialValue : 15
    });
  }

  getValue = value => {
    this.setState({ value });
    this.props.sliderValue(value);
  };

  render() {
    return (
      <div style={container}>
        <InputRange
          maxValue={150}
          minValue={0}
          value={this.state.value}
          onChange={value => this.getValue(value)}
          onChangeComplete={value => this.getValue(value)}
        />
      </div>
    );
  }
}

const container = {
  marginTop: '30px',
  height: '50px',
  width: '80%',
  display: 'flex',
  flexDirection: 'column'
};

export default Slider;
