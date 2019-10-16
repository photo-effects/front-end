import React, { Component } from 'react';

import Toolbar from '../../layout/CanvasArea/Toolbar';
import TextEdit from '../LeftPanelArea/Tools/TextBox/TextEdit';

export default class Box extends Component {
  state = {
    item: null,
    capture: false,
    prevLeft: null,
    prevTop: null,
    prevWidth: null,
    prevHeight: null,
    dragging: false,
    resizing: false,
    x: 0,
    y: 0,
    clicks: 0,
    textbox: {
      color: null,
      background: null,
      style: null,
      weight: null,
      decoration: null,
      slider: null,
      editable: false
    },
    blur: 0,
    opacity: 1,
    grayscale: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item !== prevState.item) {
      return {
        item: nextProps.item,
        x: nextProps.item.props.x,
        y: nextProps.item.props.y,
        width: nextProps.item.props.width,
        height: nextProps.item.props.height,
        z: nextProps.item.props.style.zIndex
      };
    } else return null;
  }

  onDown = (e, type) => {
    if (type === 'resizing') {
      this.setState({ resizing: true });
    } else {
      this.setState({ dragging: true });
    }

    setTimeout(() => {
      this.setState({ clicks: 0 });
    }, 500);

    e.target.setPointerCapture(e.pointerId);
    this.getPosition(e);
    this.props.bringToTop(this.state.item.props.id);
  };

  onUp = () => {
    const { item, width, height, x, y } = this.state;
    const { id } = item.props;

    if (this.state.clicks === 0) {
      this.setState({
        textbox: {
          ...this.state.textbox,
          editable: true
        }
      });
    }

    this.setState({
      dragging: false,
      resizing: false,
      prevWidth: width,
      prevHeight: height,
      top: y,
      left: x,
      clicks: this.state.clicks + 1
    });

    this.props.setItem(id, width, height, x, y);
  };

  onMove = e => {
    e.preventDefault();

    if (
      this.state.textbox.editable === true &&
      this.state.item.type === TextEdit
    ) {
      return null;
    }

    if (this.state.dragging && !this.state.resizing) {
      const { left, top } = this.getPosition(e);

      this.setState({
        x: this.state.x + left,
        y: this.state.y + top,
        left,
        top,
        clicks: 0
      });
    } else if (this.state.resizing) {
      const { left, top } = this.getPosition(e);

      this.setState({
        width: e.pageX - (this.state.x + left),
        height: e.pageY - (this.state.y + top)
      });
    }
  };

  getPosition = e => {
    const left = e.pageX;
    const top = e.pageY;

    const position = {
      left: left - this.state.prevLeft,
      top: top - this.state.prevTop
    };

    this.setState({
      prevLeft: left,
      prevTop: top
    });

    return position;
  };

  setTextbox = (set, val) => {
    this.setState({
      textbox: {
        ...this.state.textbox,
        [set]: val
      }
    });
  };

  textboxFinish = () => {
    this.setState({
      clicks: 0,
      textbox: {
        ...this.state.textbox,
        editable: false
      }
    });
  };

    changeBlur = blur => {
    this.setState({ blur: blur });
  };

  changeOpacity = opacity => {
    this.setState({ opacity: opacity });
  };

  changeGrayscale = grayscale => {
    this.setState({ grayscale: grayscale });
  };

  render() {
    const { capture, item, width, height, y, x, z } = this.state;

    const overlay = {
      width: item.type === TextEdit ? 'auto' : width,
      height: item.type === TextEdit ? 'auto' : height,
      padding: item.type === TextEdit ? '5px' : 0,
      position: 'absolute',
      top: y,
      left: x,
      zIndex: z,
      boxShadow: capture ? '2px 2px 15px black' : 'none'
    };

    return (
      <>
        <Toolbar
          item={this.state.item}
          id={this.state.item.props.id}
          setTextbox={this.setTextbox}
          textbox={this.state.textbox}
          removeImage={this.props.removeImage}
          changeOpacity={this.changeOpacity}
          opacity={this.state.opacity}
          blur={this.state.blur}
          changeBlur={this.changeBlur}
          grayscale={this.state.grayscale}
          changeGrayscale={this.changeGrayscale}
        />
        <div
          style={overlay}
          onGotPointerCapture={() => this.setState({ capture: true })}
          onLostPointerCapture={() => this.setState({ capture: false })}
          onPointerDown={e => this.onDown(e, 'dragging')}
          onPointerUp={this.onUp}
          onPointerCancel={this.onUp}
          onPointerMove={e => this.onMove(e)}
        >
          {item.type === TextEdit ? (
            <TextEdit
              textbox={this.state.textbox}
              textboxFinish={this.textboxFinish}
            />
          ) : (
            item
          )}
        </div>
      </>
    );
  }
}

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import Toolbar from '../../layout/CanvasArea/Toolbar';
// import CanvasItem from './CanvasItem';

// export default class Box extends Component {
//   state = {
//     dragging: false,
//     resizing: false,
//     x: 0,
//     y: 0,
//     nodeX: 0,
//     nodeY: 0,
//     nodeWidth: 0,
//     nodeHeight: 0,
//     nodeLeft: 0,
//     nodeTop: 0,
//     max_x: 0,
//     max_y: 0,
//     left: null,
//     top: null,
//     item: {},
//     hover: false,
//     overlay: {
//       top: null,
//       left: null,
//       width: null,
//       height: null
//     },
//     textbox: {
//       color: null,
//       background: null,
//       style: null,
//       weight: null,
//       decoration: null,
//       slider: null
//     },
//       blur: 0,
//       opacity: 1,
//       grayscale: 0
//   };

//   componentDidMount() {
//     const { item } = this.props;
//     const { width, height, x, y } = item.props;
//     const _this = ReactDOM.findDOMNode(this);

//     const parent = this.props.parent.getBoundingClientRect();
//     const grand = this.props.parent.offsetParent.getBoundingClientRect();

//     const { left, top } = parent;

//     this.setState({
//       item,
//       left,
//       top,
//       nodeWidth: width,
//       nodeHeight: height,
//       max_x: parent.width,
//       max_y: parent.height,
//       nodeX: x + width / 2 - (parent.left - grand.left),
//       nodeY: y + height / 2 - (parent.top - grand.top),
//       overlay: {
//         top: y,
//         left: x,
//         width: width,
//         height: height
//       }
//     });
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.item !== prevState.item) {
//       return {
//         item: nextProps.item,
//         overlay: {
//           ...nextProps.overlay,
//           top: nextProps.item.y,
//           left: nextProps.item.x
//         }
//       };
//     } else return null;
//   }

//   container = () => {
//     const { overlay } = this.state;
//     const { top, left, width, height } = overlay;

//     return {
//       position: 'absolute',
//       height: height,
//       width: width,
//       top: top,
//       left: left,
//       zIndex: this.state.item.props.style.zIndex,
//       opacity: this.state.opacity,
//       filter: `blur(${this.state.blur}px)`,
//       filter: `grayscale(${this.state.grayscale}%)`
//     };
//   };

//   onMouseMove = e => {
//     e.stopPropagation();

//     const { left, nodeLeft, top, nodeTop, resizing, dragging } = this.state;

//     const { clientX, clientY } = e;
//     const x = clientX;
//     const y = clientY;

//     if (resizing) {
//       this.setState({
//         nodeWidth: x - left - (nodeLeft - left),
//         nodeHeight: y - top - (nodeTop - top)
//       });
//     }

//     if (dragging) {
//       this.setState({
//         nodeX: x - left,
//         nodeY: y - top
//       });
//     }

//     this.setState({
//       x: x - left,
//       y: y - top
//     });
//   };

//   getPosition = e => {
//     e.preventDefault();

//     this.props.bringToTop(this.state.item.props.id);

//     const mouseup = () => {
//       this.setState({ dragging: false });
//       const { item, nodeWidth, nodeHeight, nodeX, nodeY } = this.state;
//       const { id } = item.props;
//       this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY);
//       window.removeEventListener('mouseup', mouseup);
//     };

//     this.setState({ dragging: true });
//     window.addEventListener('mouseup', mouseup);
//   };

//   resize = (bool, left, top) => {
//     const { x, y } = this.state;

//     this.setState({
//       resizing: bool,
//       nodeLeft: left,
//       nodeTop: top
//     });

//     if (!bool) {
//       const { nodeWidth, nodeHeight } = this.state;

//       this.setState({
//         nodeX: x - nodeWidth / 2,
//         nodeY: y - nodeHeight / 2
//       });

//       const { item, nodeX, nodeY } = this.state;
//       const { id } = item.props;
//       this.props.setItem(id, nodeWidth, nodeHeight, nodeX, nodeY);
//     }
//   };

//   overlay = (top, left, width, height, bool) => {
//     this.setState({
//       hover: bool,
//       overlay: {
//         top,
//         left,
//         width,
//         height
//       }
//     });
//   };

//   setTextbox = (set, val) => {
//     this.setState({
//       textbox: {
//         ...this.state.textbox,
//         [set]: val
//       }
//     });
//   };

//   changeBlur = blur => {
//     this.setState({ blur: blur });
//   };

//   changeOpacity = opacity => {
//     this.setState({ opacity: opacity });
//   };

//   changeGrayscale = grayscale => {
//     this.setState({ grayscale: grayscale });
//   };

//   render() {
//     return (
//       <>
//         <Toolbar
//           item={this.state.item}
//           id={this.state.item.props.id}
//           setTextbox={this.setTextbox}
//           textbox={this.state.textbox}
//           removeImage={this.props.removeImage}
//           changeOpacity={this.changeOpacity}
//           opacity={this.state.opacity}
//           blur={this.state.blur}
//           changeBlur={this.changeBlur}
//           grayscale={this.state.grayscale}
//           changeGrayscale={this.changeGrayscale}
//         />
//         <div
//           style={this.container()}
//           ref="box"
//           onMouseMove={e => this.onMouseMove(e)}
//           onClick={() =>
//             this.props.getJsonData(ReactDOM.findDOMNode(this).offsetParent)
//           }
//         >
//           <CanvasItem
//             item={this.state.item}
//             new_x={this.state.x}
//             new_y={this.state.y}
//             max_x={this.state.max_x}
//             max_y={this.state.max_y}
//             x={this.state.nodeX}
//             y={this.state.nodeY}
//             left={this.state.left}
//             top={this.state.top}
//             nodeWidth={this.state.nodeWidth}
//             nodeHeight={this.state.nodeHeight}
//             nodeX={this.state.nodeX}
//             nodeY={this.state.nodeY}
//             resize={this.resize}
//             resizing={this.state.resizing}
//             overlay={this.overlay}
//             hover={this.state.hover}
//             getPosition={this.getPosition}
//             dragging={this.state.dragging}
//             textbox={this.state.textbox}
//             removeImage={this.props.removeImage}
//             parent={this.props.parent}
//           />
//         </div>
//       </>
//     );
//   }
// }
