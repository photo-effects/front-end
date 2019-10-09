import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TextEdit from '../LeftPanelArea/Tools/TextBox/TextEdit';

export default class CanvasItem extends Component {
  state = {
    resizing: false,
    x: 0,
    y: 0,
    max_x: 0,
    max_y: 0,
    item: {}
  };

  // i think this whole CDM is unneeded lol
  componentDidMount() {
    // gathering the dom node and it's bounding rectangle
    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();

    // just getting what we need from these values. left and top are the node's left and top position, but i think these values might actually be unneeded.
    const { left, top } = node;
    // const parent = _this.offsetParent.getBoundingClientRect();
    const parent = this.props.parent.getBoundingClientRect();

    // this would be the canvas's width and height
    const { width, height } = parent;
    const { nodeWidth, nodeHeight, item } = this.props;

    this.setState({
      // since positioning is tracked based on the top and left values, if we set max_x and max_y to just the width and height of the canvas, you'd be able to drag the element off screen by it's full width and height. so we subtract the width and height of the element to set the maximum values so the element stops when it hits the edge of the canvas
      max_x: width - nodeWidth,
      max_y: height - nodeHeight,

      // not sure that i needed to set left and top here
      item: {
        ...item,
        left,
        top
      }
    });
  }

  // this makes sure the item's width and height are only updated on this component's state when we're NOT resizing. if the state was updated while resizing, the element would grow outward from it's center, rather than maintaining it's top and left positioning and growing at a 1:1 ratio with the mouse movement. while growing outward from the center looks cool, the UX is just inappropriate for this particular app.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.resizing) {
      return {
        item: {
          width: nextProps.nodeWidth,
          height: nextProps.nodeHeight
        }
      };
    } else return null;
  }

  // this monstrosity sets the element's size and position styles.
  item = () => {
    // grabbing some stuff from props
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

    // item from state
    const { item } = this.state;

    // its current width and height
    const { width, height } = item;

    // initialize a couple obv variables.
    let left = 0;
    let top = 0;

    if (dragging) {
      // if we're dragging the element, we need its new_x and new_y values from props, which correlate to the mouse's current position within the canvas. we subtract 1/2 the width and height of the element's current state value, since 1/2 width and height are added previously (just to maintain the center position while dragging, but correlating the left and top position to 0,0 of the element when not)
      left = new_x - width / 2;
      top = new_y - height / 2;
    } else if (resizing) {
      // if resizing, we take the nodeX and nodeY values from props, which correlate to the item's position at element 0,0
      left = nodeX - width / 2;
      top = nodeY - height / 2;
    } else {
      // otherwise, nodeX and nodeY minue 1/2 width and height to capture and maintain it's current size and position.
      left = nodeX - nodeWidth / 2;
      top = nodeY - nodeHeight / 2;
    }

    // if top or left are less than 0, element stays at the minimum edges of the canvas. if top or left plus the height or width of the element are greater than the element's height and width minus the max_x and max_y values from props, then the element stops at the maximum edges of the canvas. other wise, top and left are as defined above.
    top = top < 0 ? 0 : top + height > max_y ? max_y - height : top;
    left = left < 0 ? 0 : left + width > max_x ? max_x - width : left;

    // applying the styles
    return {
      position: 'absolute',
      cursor: 'pointer',
      // if the element is being hovered, it's overlay Box is the full width and height of the canvas, so the top and left position correlate to top and left defined above. if not, the overlay Box is the size of the element and positioned at the element's current position within canvas, so we place the item at the 0,0 corner of its overlay box.
      top: hover ? top : 0,
      left: hover ? left : 0,
      color: 'black',
      width: nodeWidth,
      height: nodeHeight,
      zIndex: this.props.z,
      boxShadow: hover ? '2px 2px 15px black' : null
      // border: "3px solid black"
    };
  };

  // this correlates to the resize function on the Box component. this is where those left and top values get passed in.
  resize = e => {
    e.preventDefault();
    e.stopPropagation();

    // mouseup on window for fluidity/avoiding bad mouseup calls
    const mouseup = () => {
      this.props.resize(false);
      window.removeEventListener('mouseup', mouseup);
    };

    // getting bouding rect values
    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const { left, top } = node;

    // passing those values up to Box
    this.props.resize(true, left, top);
    window.addEventListener('mouseup', mouseup);
  };

  // this sets the overlay box to cover the area of the canvas by calling the overlay method in the Box component, and passing in 100% values for its width and height, and 0,0 values for its coordinates on the canvas.
  setOverlayCover = e => {
    e.preventDefault();
    e.stopPropagation();

    // happens when we hover over the element
    this.setState({ hover: true });

    const parent = this.props.parent.getBoundingClientRect();
    const grand = this.props.parent.offsetParent.getBoundingClientRect();

    this.props.overlay(
      parent.top - grand.top,
      parent.left - grand.left,
      parent.width,
      parent.height,
      true
    );
  };

  // this sets the overlay box to be the size and position of the element.
  setOverlayContain = e => {
    e.preventDefault();
    e.stopPropagation();

    // no longer hovering
    this.setState({ hover: false });

    // get bounding rect values
    const _this = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const { top, left, width, height } = _this;
    const parent = this.props.parent.getBoundingClientRect();
    const grand = this.props.parent.offsetParent.getBoundingClientRect();

    // calling the overlay method to pass the proper top, left, width and height values up to the Box, so its styling can be updated. top and left are subtracted by the canvas top and left position in the window, so the box snaps to the proper position.
    this.props.overlay(
      top - this.props.top + (parent.top - grand.top),
      left - this.props.left + (parent.left - grand.left),
      width,
      height,
      false
    );
  };

  // just using the bottom-right for now. need to work out some trigonomotry for the others.
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
  ];

  render() {
    const { resizing, dragging, getPosition, item } = this.props;

    // special canvas item for text boxes
    if (item.type === TextEdit) {
      return (
        <div
          style={this.item()}
          onMouseOver={e => this.setOverlayCover(e)}
          onMouseOut={
            !resizing && !dragging ? e => this.setOverlayContain(e) : null
          }
        >
          <TextEdit textbox={this.props.textbox} />
          <div
            draggable
            onMouseDown={!resizing ? e => getPosition(e) : null}
            style={textEditMove}
          >
            <i class="fas fa-arrows-alt"></i>
          </div>
          <Resizer
            resizer={{
              right: -5,
              bottom: -5,
              name: 'bottom-right'
            }}
            cursor={'nwse-resize'}
            resize={this.resize}
            hover={this.state.hover}
          />
        </div>
      );
    } /* just build out the element with its resizer, box for the image to fill the width and height of, and the element itself */ else
      return (
        <div
          draggable
          onMouseDown={!resizing ? e => getPosition(e) : null}
          style={this.item()}
          onMouseOver={e => this.setOverlayCover(e)}
          onMouseOut={
            !resizing && !dragging ? e => this.setOverlayContain(e) : null
          }
        >
          <item.type
            {...item.props}
            style={{
              ...item.style,
              height: '100%',
              width: '100%'
            }}
          />
          <Resizer
            resizer={{
              right: -5,
              bottom: -5,
              name: 'bottom-right'
            }}
            cursor={'nwse-resize'}
            resize={this.resize}
            hover={this.state.hover}
          />
        </div>
      );
  }
}

// stupid little dumb-looking box to move the textboxes, since we need to be able to click within the box to manipulate its text
const textEditMove = {
  cursor: 'grab',
  position: 'absolute',
  right: 'calc(50% - 10px)',
  bottom: 'calc(50% - 10px)',
  zIndex: 10000,
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem'
};

// the resizer. lil circle that can be clicked and dragged
const Resizer = props => {
  const { cursor, hover, resizer, resize } = props;
  const { top, left, right, bottom } = resizer;

  const style = () => ({
    zIndex: 10,
    border: '2px solid red',
    borderRadius: '100%',
    height: '12px',
    width: '12px',
    position: 'absolute',
    visibility: hover ? 'visible' : 'hidden',
    cursor,
    top,
    left,
    right,
    bottom
  });

  return <div style={style()} onMouseDown={e => resize(e)}></div>;
};
