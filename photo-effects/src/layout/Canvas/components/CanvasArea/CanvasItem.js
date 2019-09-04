import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Resizer from './Resizer';

export default class CanvasItem extends Component {
  state = {
    drag: false,
    resize: false,
    max_x: 0,
    max_y: 0,
    width: 0,
    height: 0,
    resizeWidth: null,
    resizeHeight: null
  }

  componentDidMount() {
    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const parent = _this.offsetParent.getBoundingClientRect();
    
    this.setState({ 
      max_x: parent.width - node.width,
      max_y: parent.height - node.height,
      width: node.width,
      height: node.height
    })
  }

  item = () => {
    let top = 0;
    if(this.state.drag) {
      if(this.props.new_y - (this.state.height / 2) > this.state.max_y) {
        top = this.state.max_y
      } else if(this.props.new_y - (this.state.height / 2) < 0) {
        top = 0
      } else {
        top = this.props.new_y - (this.state.height / 2)
      }
    } else if(this.props.y - (this.state.height / 2) <= 0) {
      top = 0
    } else {
      top = this.props.y - (this.state.height / 2)
    }

    let left = 0;
    if(this.state.drag) {
      if(this.props.new_x - (this.state.width / 2) > this.state.max_x) {
        left = this.state.max_x
      } else if(this.props.new_x - (this.state.width / 2) < 0) {
        left = 0;
      } else {
        left = this.props.new_x - (this.state.width / 2)
      }
    } else if(this.props.x - (this.state.width / 2) <= 0) {
      left = 0
    } else {
      left = this.props.x - (this.state.width / 2)
    }

    return {
      position: 'absolute',
      cursor: 'pointer',
      top: top,
      left: left,
      color: 'black',
      width: this.props.item.width,
      height: this.props.item.height,
      // width: this.state.resizeWidth || this.props.item.props.style.width || 100,
      // height: this.state.resizeHeight || this.props.item.props.style.height || 100,
    }
  }

  getPosition = e => {
    e.preventDefault();
    e.stopPropagation();
    
    if(this.state.drag) {
      this.props.set(this.props.new_x, this.props.new_y, this.props.id)
    }

    this.setState({ 
      drag: !this.state.drag
    })
  }

  resize = e => {
    e.preventDefault();
    e.stopPropagation();

    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();

    const new_width = (e.clientX - 10) - _this.offsetLeft;
    const new_height = (e.clientY - 10) - _this.offsetTop;

    if(this.state.resize) {
      this.setState({ 
        resizeWidth: new_width, 
        resizeHeight: new_height, 
        width: node.width, 
        height: node.height 
      })
    }
  }

  setResize = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ resize: !this.state.resize })
  }

  render() { 
    return (
      <div
        {...this.props}
        draggable
        onMouseDown = { !this.props.resize ? event => this.getPosition(event) : null }
        onMouseUp = { !this.props.resize ? event => this.getPosition(event) : null }
        style = { this.item() }
      >
        <img 
          src = { this.props.item.url }
          style = {{ height: '100%', width: 'auto' }}
        />
        <Resizer 
          onMouseDown = { this.props.setResize }
          onMouseUp = { this.props.setResize }
          onMouseMove = { this.resize }
        /> 
      </div>
    )
  }
}