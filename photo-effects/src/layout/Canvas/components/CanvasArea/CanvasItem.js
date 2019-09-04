import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CanvasItem extends Component {
  state = {
    resizing: false,
    x: 0,
    y: 0,
    max_x: 0,
    max_y: 0,
    item: {}
  }

  componentDidMount() { 
    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const { left, top } = node;
    const parent = _this.offsetParent.getBoundingClientRect();
    const { width, height } = parent;
    const { nodeWidth, nodeHeight, item, z } = this.props; 

    this.setState({ 
      max_x: width - nodeWidth,
      max_y: height - nodeHeight,
      item: {
        ...item, left, top
      }
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!nextProps.resizing) {
      return {
        item: {
          width: nextProps.nodeWidth,
          height: nextProps.nodeHeight
        }
      }
    } else return null;
  }
  

  item = () => {
    const { 
      dragging, 
      resizing, 
      new_x, 
      new_y,
      max_x,
      max_y, 
      nodeX,
      nodeY,
      nodeWidth, 
      nodeHeight,
      hover
    } = this.props;

    const {
      item
    } = this.state;

    const {
      width,
      height
    } = item;

    let left = 0;
    let top = 0;

    if(dragging) {
      left = new_x - (width / 2)
      top = new_y - (height / 2)
    } else if(resizing) {
      left = nodeX - (width / 2)
      top = nodeY - (height / 2)
    } else {
      left = nodeX - (nodeWidth / 2)
      top = nodeY - (nodeHeight / 2)
    }

    top = top < 4 ? 4 : top + height > max_y ? max_y - height - 8 : top;
    left = left < 4 ? 4 : left + width > max_x ? max_x - width - 8 : left;

    return {
      position: 'absolute',
      cursor: 'pointer',
      top: hover ? top : 4,
      left: hover ? left : 4,
      color: 'black',
      width: nodeWidth,
      height: nodeHeight,
      zIndex: this.props.z
    }
  }

  resize = e => {
    e.preventDefault();
    e.stopPropagation();

    const mouseup = () => {
      this.props.resize(false)
      window.removeEventListener('mouseup', mouseup);
    }

    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const { left, top } = node;

    this.props.resize(true, left, top)
    window.addEventListener('mouseup', mouseup)
  }

  setOverlayCover = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ hover: true })

    this.props.overlay(
      0, 0, '100%', '100%', true
    )
  }

  setOverlayContain = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ hover: false })

    const _this = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const { top, left, width, height } = _this;

    this.props.overlay(
      (top - 4) - this.props.top,
      (left - 4) - this.props.left,
      width + 12,
      height + 12,
      false
    )
  }

  resizers = [
    {
      top: -5,
      left: -5,
      name: 'top-left'
    },
    {
      top: -5,
      right: -5,
      name: 'top-right'
    },
    {
      right: -5,
      bottom: -5,
      name: 'bottom-right'
    },
    {
      left: -5,
      bottom: -5,
      name: 'bottom-left'
    }
  ]
 
  render() {
    const { 
      resizing,
      getPosition,
      item
    } = this.props;
    
    return (
      <div
        draggable
        onMouseDown = { 
          !resizing ? e => getPosition(e) : null 
        }
        style = { this.item() }
        onMouseOver = { 
          e => this.setOverlayCover(e) 
        }
        onMouseOut = { 
          !resizing ? e => this.setOverlayContain(e) : null 
        }
      >
        <img 
          src = { item.url }
          style = {{ height: '100%', width: '100%' }}
        />
        { this.resizers.map((resizer, i) => (
            <Resizer 
              resizer = { resizer }
              key = { i }
              cursor = { `${i % 2 === 0 ? 'nwse' : 'nesw'}-resize` }
              resize = { this.resize }
              hover = { this.state.hover }
            />
          )) }
      </div>
    )
  }
}

const Resizer = props => {
  const { cursor, hover, resizer, resize } = props;
  const { top, left, right, bottom } = resizer;

  const style = () => ({
    zIndex: 10,
    border: '2px solid red',
    borderRadius: '100%',
    height: '10px',
    width: '10px',
    position: 'absolute',
    visibility: hover ? 'visible' : 'hidden',
    cursor, top, left, right, bottom
  })

  return (
    <div 
      style = { style() }
      onMouseDown = { e => resize(e) }
    ></div>
  )
}