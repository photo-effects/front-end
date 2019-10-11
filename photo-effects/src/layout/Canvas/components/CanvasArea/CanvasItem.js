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

  componentDidMount() {
    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const { left, top } = node;
    const parent = this.props.parent.getBoundingClientRect();
    const { width, height } = parent;
    const { nodeWidth, nodeHeight, item } = this.props;

    this.setState({
      max_x: width - nodeWidth,
      max_y: height - nodeHeight,

      item: {
        ...item,
        left,
        top
      }
    });
  }

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

    const { item } = this.state;

    const { width, height } = item;

    let left = 0;
    let top = 0;

    if (dragging) {
      left = new_x - width / 2;
      top = new_y - height / 2;
    } else if (resizing) {
      left = nodeX - width / 2;
      top = nodeY - height / 2;
    } else {
      left = nodeX - nodeWidth / 2;
      top = nodeY - nodeHeight / 2;
    }

    top = top < 0 ? 0 : top + height > max_y ? max_y - height : top;
    left = left < 0 ? 0 : left + width > max_x ? max_x - width : left;

    return {
      position: 'absolute',
      cursor: 'pointer',
      top: hover ? top : 0,
      left: hover ? left : 0,
      color: 'black',
      width: nodeWidth,
      height: nodeHeight,
      zIndex: this.props.z,
      boxShadow: hover ? '2px 2px 15px black' : null
    };
  };

  resize = e => {
    e.preventDefault();
    e.stopPropagation();

    const mouseup = () => {
      this.props.resize(false);
      window.removeEventListener('mouseup', mouseup);
    };

    const _this = ReactDOM.findDOMNode(this);
    const node = _this.getBoundingClientRect();
    const { left, top } = node;

    this.props.resize(true, left, top);
    window.addEventListener('mouseup', mouseup);
  };

  setOverlayCover = e => {
    e.preventDefault();
    e.stopPropagation();

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

  setOverlayContain = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ hover: false });

    const _this = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const { top, left, width, height } = _this;
    const parent = this.props.parent.getBoundingClientRect();
    const grand = this.props.parent.offsetParent.getBoundingClientRect();

    this.props.overlay(
      top - this.props.top + (parent.top - grand.top),
      left - this.props.left + (parent.left - grand.left),
      width,
      height,
      false
    );
  };

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
    } else
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
