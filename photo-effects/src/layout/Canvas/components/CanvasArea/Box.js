import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '../../layout/CanvasArea/Toolbar';
import CanvasItem from './CanvasItem';

export default class Box extends Component {
  // plenty of values to go over. these are to capture certain element properties so we can use them in positioning and sizing later
  state = {
    // these 2 are important for the styles. if dragging then {some styles}, if resizing then {some other styles} etc.
    dragging: false,
    resizing: false,

    // x and y are distinct from nodeX and nodeY, because x and y translate to the mouse's position, whereas nodeX and nodeY are the current position of the element.
    x: 0,
    y: 0,
    nodeX: 0,
    nodeY: 0,

    // nodeWidth, nodeHeight, nodeLeft, and nodeTop deal with the current position and size of the element. nodeLeft and nodeTop are the element's position from the left side of the screen
    nodeWidth: 0,
    nodeHeight: 0,
    nodeLeft: 0,
    nodeTop: 0,

    // furthest they can go left or down.
    max_x: 0,
    max_y: 0,

    // the box's position relative to the left and top edges of the window.
    left: null,
    top: null,

    // full html element that gets placed inside the box
    item: {},

    // if hover then {even more styles}
    hover: false,

    // this marks the size and position of the overlay box over the element. if the element is hovered, the box is 100% the canvas area. if not, it's the size and position of the element it contains.
    overlay: {
      top: null,
      left: null,
      width: null,
      height: null
    },

    // styles for the textbox, which are manipulated from the toolbar
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

    // this method finds the dom node and returns its html element
    const _this = ReactDOM.findDOMNode(this);

    // this method gets the parent of the dom node and gets the values for it, such as its size and position.
    const parent = _this.offsetParent.getBoundingClientRect();

    // extracting just what we need from these methods.
    const { left, top } = parent;

    this.setState({ 
      // sets the item from props, and the left and top position from the item's props.
      item, left, top,

      // sets nodeWidth and nodeHeight from the item's props
      nodeWidth: width,
      nodeHeight: height,

      // max_x and max_y are the width and height of the parent container (full canvas area)
      max_x: parent.width,
      max_y: parent.height,

      // we want our cursor to be dragging the element from its center. to do this, we take the x and y values (initial) from the item's props, then add 1/2 its width and 1/2 its height. the reason for this is that absolute positioning is applied from the top-left corner. to push the position into the middle, we just need to add 1/2 the width and height
      nodeX: x + (width / 2),
      nodeY: y + (height / 2),

      // sets the top position at the item's y prop, left at item's x, width and height are the same as the item.
      overlay: {
        top: y,
        left: x,
        width: width,
        height: height
      }
    })
  }

  // only changes state when the item coming from props is different than the one we have on state. this is so size and position are maintained for other boxes and elements when manipulating one of them.
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
    } else return null;
  }

  // this is the styles for the overlay container
  container = () => {

    // get overlay from state
    const { overlay } = this.state;

    // get top, left, width, and height properties from overlay
    const { top, left, width, height } = overlay;

    // sets absolute positioning, values gathered above, and sets the zIndex to the item's style on state when that item is being manipulated. Doing it this way ensures the Box maintains the positioning, size, and layer of the item it holds, since the methods that change these values effect the item higher up. The reason for this, is because all Boxes are the same, but all the elements within them hold distinct values, which will come in handy for saving and returning to an in-progress project, or downloading a project as HTML
    return {
      position: 'absolute',
      height: height,
      width: width,
      top: top,
      left: left,
      zIndex: this.state.item.props.style.zIndex
    }
  }

  // this method gathers the x and y position of the mouse at certain times.
  onMouseMove = e => {
    e.stopPropagation();

    // gather some values from state
    const { left, nodeLeft, top, nodeTop, resizing, dragging } = this.state;

    // while we're at it, make 'e.clientX' and 'e.clientY' easier to type
    const { clientX, clientY } = e;
    const x = clientX;
    const y = clientY;

    // a little arithmetic for when an item is resized. the left and top values indicate the canvas position on within the window. nodeLeft and nodeTop indicate the element's position within the window. x and y are the mouse position within the window. by subtracting the left and top values from both the element and mouse positions, it simulates the element being at x: 0 and y: 0. in order to resize an element, the mouse will be at the bottom-right corner. in effect, the mouse's x and y position are at the element's width and height values. since the x and y values now correlate to the element's width and height, changing the mouse x and mouse y position will change the width and height as well.
    if(resizing) {
      this.setState({ 
        nodeWidth: (x - left) - (nodeLeft - left),
        nodeHeight: (y - top) - (nodeTop - top),
      })
    }

    // the nodeX and nodeY positions are the element's position within the canvas at its top-left corner (getting the drag position in the center of the element happens later). in order to get this position, we have to simply subtract the mouse's x and y position from the canvas's top and left position on the screen. this simulates the canvas being at x: 0, y: 0, so the nodeX and nodeY position will automatically correlate to the mouse's position within the canvas. since the mouse needs to be within the element to drag it, anywhere the mouse moves while dragging will correlate to a new x and y position at its top-left corner.
    if(dragging) {
      this.setState({ 
        nodeX: x - left,
        nodeY: y - top
      })
    }

    // mouse x and y position within the canvas are always kept in state since their immediate value is needed when manipulating an element. however, the this function is only called when the mouse moves within the Box element. since the box is only the size of the element it contains when the element is not being hovered over, generally moving the mouse around the canvas won't call this function, so we avoid uneccessary state calls.
    this.setState({
      x: x - left,
      y: y - top,
    })
  }

  // this function's primary purpose is to set dragging to true on state. that triggers the onMouseMove function to apply x and y values that move the element around. this element is called onMouseDown.
  getPosition = e => {
    e.preventDefault();

    // function that changes zIndex values to bring the item being manipulated to the top.
    this.props.bringToTop(this.state.item.props.id)

    // mouseup function called when the mouseup event is fired on the window. applying the mouseup event listener to the window allows for more fluid dragging motion. also, if mouseup was applied to the element, it can accidentally be called if the mouse leaves the element.
    const mouseup = () => {
      // sets dragging to false, locking in the final x and y values.
      this.setState({ dragging: false })

      // gather element's properties from state.
      const { item, nodeWidth, nodeHeight, nodeX, nodeY } = this.state;
      // get its id so we can apply these values to the proper item in Canvas.jsx state.
      const { id } = item.props
      // call setItem, and pass in its position and size so they're maintained when a new element is added, since all of these items are the result of prop drilling.
      this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY)

      // remove event listener from the window
      window.removeEventListener('mouseup', mouseup);
    }

    // set state dragging to true and add the mouseup event listener to the window
    this.setState({ dragging: true })
    window.addEventListener('mouseup', mouseup);
  }

  // the resizer needs this special function to work properly. bool says if we're resizing or not. left and top are gathered when the resizer is manipulated, and passed in as properties here. they correlate to the item's x and y position, minus 1/2 its width and height. 
  resize = (bool, left, top) => {

    // gather mouse's x and y position within the canvas
    const { x, y } = this.state;

    // resizing property on state gets set to whatever the boolean value is that's passed in as a parameter. nodeLeft and nodeTop get set as the item is being resized to avoid it 'springing' back to a position that correlates to its previous left and top position.
    this.setState({ 
      resizing: bool,
      nodeLeft: left,
      nodeTop: top
    })

    // when we're done resizing, we have to set the element's size and position in Canvas.jsx-level state same way as above
    if(!bool) {
      const { nodeWidth, nodeHeight } = this.state;

      // this sets the nodeX and nodeY position to the center of the element
      this.setState({
        nodeX: x - (nodeWidth / 2),
        nodeY: y - (nodeHeight / 2)
      })

      const { item, nodeX, nodeY } = this.state;
      const { id } = item.props
      this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY)
    }
  }

  // this changes the overlay. in the CanvasItem component, if the element is being hovered over, the overlay goes to the full size of the canvas. if not, it's the size of the element
  overlay = (top, left, width, height, bool) => {
    this.setState({
      hover: bool,
      overlay: {
        top, left, width, height
      }
    })
  }

  // the textbox has different styling values. the 'set' parameter passed in here correlates to the style being changed, and the 'val' is the value it's being changed to.
  setTextbox = (set, val) => {
    this.setState({
      textbox: {
        // spread operator to gather all previous textbox values
        ...this.state.textbox,

        // this changes the appropriate value. syntax is similar to form inputs ([e.target.name]: e.target.value).
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
          
          // temporary. this is for when we implement saving in-progress projects and save as HTML
          onClick = { () => this.props.getJsonData(ReactDOM.findDOMNode(this).offsetParent) }
        >
          <CanvasItem 
            // just throwing everything on it. TODO: reorder by type (f() or state val)
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