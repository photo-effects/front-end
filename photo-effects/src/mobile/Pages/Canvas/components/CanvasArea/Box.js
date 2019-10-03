import React, { Component } from "react";
import ReactDOM from "react-dom";

import Toolbar from "../../layout/CanvasArea/Toolbar";

export default class Box extends Component {
  state = {
    capture: false,
    dragging: false,
    resizing: false,
    item: null,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    previousLeft: 0,
    previousTop: 0,
    previousWidth: 0,
    previousHeight: 0,
    textbox: {
      color: null,
      background: null,
      style: null,
      weight: null,
      decoration: null,
      slider: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item !== prevState.item) {
      return {
        item: nextProps.item,
      };
    } else return null;
  }

  componentDidMount() {
    const { item } = this.props;
    const { width, height, x, y } = item.props;

    const viewport = ReactDOM.findDOMNode(this).offsetParent.getBoundingClientRect()

    this.setState({
      item, width, height, x, y,
      top: viewport.height / 10,
      left: viewport.left,
      previousWidth: width,
      previousHeight: height,
      holdW: width,
      holdH: height
    })
  }

  startResize = (bool) => {
    this.setState({ capture: bool })
  }

  onDown = (e, type) => {
    if(type === 'resizing') {
      this.setState({ resizing: true })
    } else {
      this.setState({ dragging: true })
    }

    e.target.setPointerCapture(e.pointerId);
    this.getPosition(e);
    
    this.props.bringToTop(this.state.item.props.id)
  }

  onUp = () => {
    let { item, width, height, x, y } = this.state;

    this.setState({ 
      dragging: false,
      resizing: false,
      previousWidth: width,
      previousHeight: height,
      top: y,
      left: x,
    })
    
    const { id } = item.props;

    this.props.setItem(id, width, height, x, y);
  }

  onMove = e => {

    if(this.state.dragging && !this.state.resizing) {
      const { left, top } = this.getPosition(e);

      this.setState({
        x: this.state.x + left,
        y: this.state.y + top,
        left, top,
      });
    } else if(this.state.resizing) {
      const { left, top } = this.getPosition(e);

      this.setState({
        width: e.pageX - (this.state.x + left),
        height: e.pageY - (this.state.y + top),
      })
    }
  };

  getPosition = e => {
    const left = e.pageX;
    const top = e.pageY;

    const position = {
      left: left - this.state.previousLeft,
      top: top - this.state.previousTop,
    };

    this.setState({
      previousLeft: left,
      previousTop: top,
    })
  
    return position;
  }

  setTextbox = (set, val) => {
    this.setState({
      textbox: {
        ...this.state.textbox,
        [set]: val
      }
    });
  };

  render() {
    const { capture, item, width, height, x, y } = this.state;

    const overlay = {
      width: width, 
      height: height,
      position: 'absolute',
      top: y,
      left: x,
      zIndex: this.props.item.props.style.zIndex,
      boxShadow: capture ? '2px 2px 15px black' : 'none'
    }

    return (
      <>
      <Toolbar
        item={this.props.item}
        id={this.props.item.props.id}
        setTextbox={this.setTextbox}
        textbox={this.state.textbox}
        removeImage={this.props.removeImage}
        alt={this.props.item.props.alt.alt}
      />
      <div
        style = { overlay }
        onGotPointerCapture = { () => this.setState({ capture: true }) }
        onLostPointerCapture = { () => this.setState({ capture: false }) }
        onPointerDown = { e => this.onDown(e, 'dragging') }
        onPointerUp = { this.onUp }
        onPointerCancel = { this.onUp }
        onPointerMove = { this.onMove }
        touch-action="none"
      >
        { item }
        <Resizer 
          bottom 
          gotCapture = { this.gotCapture }
          onPointerDown = { e => this.onDown(e, 'resizing') }
          onUp = { this.onUp }
          onMove = { this.onMove }
          startResize = { this.startResize }
        />
      </div>
      </>
    )
  }
}

const Resizer = props => {
  const style = type => ({
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: type === 'top' ? -20 : null,
    left: type === 'top' ? -20 : null,
    right: type === 'bottom' ? -20 : null,
    bottom: type === 'bottom' ? -20 : null,
    borderLeft: type === 'top' ? '1px solid red' : null,
    borderTop: type === 'top' ? '1px solid red' : null,
    borderRight: type === 'bottom' ? '1px solid black' : null,
    borderBottom: type === 'bottom' ? '1px solid black' : null,
    zIndex: 1000000
  })

  if(props.top) {
    return (
      <div 
        style = { style('top') }
        
      ></div>
    )
  } else return (
    <div 
      style = { style('bottom') }
      onGotPointerCapture = { () => props.startResize(true) }
      onLostPointerCapture = { () => props.startResize(false) }
      onPointerDown = { props.onPointerDown }
      onPointerUp = { props.onUp }
      onPointerCancel = { props.onUp }
      onPointerMove = { props.onMove }
      touch-action="none"
    ></div> 
  )
}