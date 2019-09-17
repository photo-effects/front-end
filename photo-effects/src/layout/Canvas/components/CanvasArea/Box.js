import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '../../layout/CanvasArea/Toolbar';
import CanvasItem from './CanvasItem';

export default class Box extends Component {
  state = {
    dragging: false,
    resizing: false,
    x: 0,
    y: 0,
    nodeX: 0,
    nodeY: 0,
    nodeWidth: 0,
    nodeHeight: 0,
    nodeLeft: 0,
    nodeTop: 0,
    max_x: 0,
    max_y: 0,
    left: null,
    top: null,
    item: {},
    hover: false,
    overlay: {
      top: null,
      left: null,
      width: null,
      height: null
    },
    textbox: {
      color: null,
      background: null,
      style: null,
      weight: null,
      decoration: null,
      slider: null
    }
  }

  componentDidMount() {
    const { item } = this.props;
    const { width, height, x, y } = item.props;

    const _this = ReactDOM.findDOMNode(this);
    const parent = _this.offsetParent.getBoundingClientRect();
    const { left, top } = parent;

    this.setState({ 
      item, left, top,
      nodeWidth: width || 100,
      nodeHeight: height || 100,
      max_x: parent.width,
      max_y: parent.height,
      nodeX: item.props.x + (width / 2),
      nodeY: item.props.y + (height / 2),
      overlay: {
        top: y,
        left: x,
        width: width || 100,
        height: height || 100
      }
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.item !== prevState.item) {
      return {
        item: nextProps.item,
        overlay: {
          ...nextProps.overlay,
          top: nextProps.item.y,
          left: nextProps.item.x
        }
        
      }
    } if(nextProps.top_id) {
      return {
        z: nextProps.top_z + 1
      }
    } else return null;
  }

  container = () => {
    const { hover, overlay } = this.state;
    const { top, left, width, height } = overlay;

    return {
      position: 'absolute',
      height: height,
      width: width,
      top: top,
      left: left,
      zIndex: this.state.item.props.style.zIndex
    }
  }

  onMouseMove = e => {
    e.stopPropagation();
    const { left, nodeLeft, top, nodeTop, resizing, dragging } = this.state;
    const { clientX, clientY } = e;
    const x = clientX;
    const y = clientY;

    if(resizing) {
      this.setState({ 
        nodeWidth: (x - left) - (nodeLeft - left),
        nodeHeight: (y - top) - (nodeTop - top),
      })
    }

    if(dragging) {
      this.setState({ 
        nodeX: x - left,
        nodeY: y - top
      })
    }

    this.setState({
      x: x - left,
      y: y - top,
    })
  }

  getPosition = e => {
    e.preventDefault();
    this.props.bringToTop(this.state.item.props.id)

    const mouseup = () => {
      this.setState({ dragging: false })
      const { item, nodeWidth, nodeHeight, nodeX, nodeY } = this.state;
      const { id } = item.props
      this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY)
      window.removeEventListener('mouseup', mouseup);
    }
    this.setState({ dragging: true })
    window.addEventListener('mouseup', mouseup);
  }

  resize = (bool, left, top) => {
    const { x, y } = this.state;

    this.setState({ 
      resizing: bool,
      nodeLeft: left,
      nodeTop: top
    })

    if(!bool) {
      const { nodeWidth, nodeHeight } = this.state;
      this.setState({
        nodeX: x - (nodeWidth / 2),
        nodeY: y - (nodeHeight / 2)
      })
      const { item, nodeX, nodeY } = this.state;
      const { id } = item.props
      this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY)
    }
  }

  overlay = (top, left, width, height, bool) => {
    this.setState({
      hover: bool,
      overlay: {
        top, left, width, height
      }
    })
  }

  setTextbox = (set, val) => {
    this.setState({
      textbox: {
        ...this.state.textbox,
        [set]: val
      }
    })
  }

  render() { 
    return (
      <>
      <Toolbar 
        item = { this.state.item }
        id = { this.state.item.props.id }
        setTextbox = { this.setTextbox }
        textbox = { this.state.textbox }
      />
        <div
          style = { this.container() }
          onMouseMove = { e => this.onMouseMove(e) }
        >
          <CanvasItem 
            item = { this.state.item }
            new_x = { this.state.x }
            new_y = { this.state.y }
            max_x = { this.state.max_x }
            max_y = { this.state.max_y }
            x = { this.state.nodeX }
            y = { this.state.nodeY }
            left = { this.state.left }
            top = { this.state.top }
            nodeWidth = { this.state.nodeWidth }
            nodeHeight = { this.state.nodeHeight }
            nodeX = { this.state.nodeX }
            nodeY = { this.state.nodeY }
            resize = { this.resize }
            resizing = { this.state.resizing }
            overlay = { this.overlay }
            hover = { this.state.hover }
            getPosition = { this.getPosition }
            dragging = { this.state.dragging }
            textbox = { this.state.textbox }
          />
        </div>
      </>
    )
  }
}