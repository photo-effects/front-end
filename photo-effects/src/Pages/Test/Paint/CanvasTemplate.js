import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CanvasTemplate extends Component {
  state = {
    painting: false,
    height: 0,
    width: 0
  };

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const parent = node.offsetParent.getBoundingClientRect();

    this.setState({
      height: parent.height - 8,
      width: parent.width - 4
    });

    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
  }

  test = () => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(0, 0, 55, 50);
  };

  mouseup = e => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');

    this.setState({ painting: false });
    ctx.beginPath();
  };

  draw = e => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const boundingRect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');

    if (!this.state.painting) {
      return null;
    }

    ctx.lineWidth = 15;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - boundingRect.left, e.clientY - boundingRect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - boundingRect.left, e.clientY - boundingRect.top);
  };

  render() {
    return (
      <>
        <canvas
          ref="canvas"
          style={{
            border: '2px solid red',
            marginTop: '16px',
            marginLeft: '16px'
          }}
          // style = { this.style(this.state.cursor) }
          height={this.state.height}
          width={this.state.width}
          onMouseDown={() => this.setState({ painting: true })}
          onMouseUp={e => this.mouseup(e)}
          onMouseMove={e => this.draw(e)}
        ></canvas>
        <button onClick={() => this.test()}>test</button>
      </>
    );
  }
}

// export default class CanvasTemplate extends Component {
//   state = {
//     cursor: 'default',
//     strokeColor: 'black',
//     fillColor: 'black',
//     loc: {
//       x: null,
//       y: null
//     },
//     mousedown: {
//       x: null,
//       y: null
//     },
//     dragging: false,
//     savedImage: null,
//     usingBrush: false,
//     brushX: [],
//     brushY: [],
//     brushDownPos: [],
//     boundBox: {
//       left: null,
//       top: null,
//       width: null,
//       height: null
//     },
//     height: null,
//     width: null,
//     polygonSides: 6,
//     offset_x: null
//   }

//   style = cursor => ({
//     cursor: cursor,
//     border: '2px solid blue'
//   })

//   componentDidMount() {
//     const node = ReactDOM.findDOMNode(this);
//     const parent = node.offsetParent.getBoundingClientRect();

//     this.setState({
//       height: parent.height,
//       width: parent.width,
//       offset_x: parent.left
//     })
//   }

//   test = () => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = 'rgb(200,0,0)';
//     ctx.fillRect(100, 100, 55, 50);
//   }

//   addBrushPoint = (x, y, mousedown) => {
//     const brushX = this.state.brushX;
//     const brushY = this.state.brushY;
//     const brushDownPos = this.state.brushDownPos;

//     brushX.push(x);
//     brushY.push(y);
//     brushDownPos.push(mousedown)

//     this.setState({
//       brushX,
//       brushY,
//       brushDownPos
//     })
//   }

//   getPolygonPoints = () => {
//     const { loc, mousedown, boundBox, polygonSides } = this.state;
//     let adj = mousedown.x - loc.x;
//     let opp = mousedown.y - loc.y;
//     let angle = Math.atan2(opp, adj) * (Math.PI / 180);
//     let radiusX = boundBox.width;
//     let radiusY = boundBox.height;
//     let polygonPoints = [];

//     for(let i = 0; i < polygonSides; i++){
//       polygonPoints.push({
//         x: loc.x + radiusX * Math.sin(angle),
//         y: loc.y - radiusY * Math.cos(angle)
//       });
//       angle += 2 * Math.PI / polygonSides;
//     }
//     return polygonPoints;
//  }

//   updateRubberBandOnMove = () => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');
//     const { boundBox, loc, mousedown, strokeColor, fillColor, polygonSides } = this.state;

//     this.setState({
//       boundBox: {
//         width: Math.abs(loc.x - mousedown.x),
//         height: Math.abs(loc.y - mousedown.y),
//         left: loc.x > mousedown.x ? mousedown.x : loc.x,
//         top: loc.y > mousedown.y ? mousedown.y : loc.y
//       }
//     })

//     ctx.strokeStyle = strokeColor;
//     ctx.fillStyle = fillColor;

//     switch(this.props.currentTool) {
//       case 'brush':
//         this.drawBrush();
//         break;
//       case 'line':
//         ctx.beginPath();
//         ctx.moveTo(mousedown.x, mousedown.y);
//         ctx.lineTo(loc.x, loc.y);
//         ctx.stroke();
//         break;
//       case 'rectangle':
//         ctx.strokeRect(boundBox.left, boundBox.top, boundBox.width, boundBox.height);
//         break;
//       case 'circle':
//         let radius = boundBox.width;
//         ctx.beginPath();
//         ctx.arc(mousedown.x, mousedown.y, radius, 0, Math.PI * 2);
//         ctx.stroke();
//         break;
//       case 'ellipse':
//         let radiusX = boundBox.width / 2;
//         let radiusY = boundBox.height / 2;
//         ctx.beginPath();
//         ctx.ellipse(mousedown.x, mousedown.y, radiusX, radiusY, Math.PI / 4, 0, Math.PI * 2);
//         ctx.stroke();
//       case 'polygon':
//         let polygonPoints = this.getPolygonPoints();
//         ctx.beginPath();
//         ctx.moveTo(polygonPoints[0].x, polygonPoints[0].y);
//         for(let i = 1; i < polygonSides; i++){
//             ctx.lineTo(polygonPoints[i].x, polygonPoints[i].y);
//         }
//         ctx.closePath();
//         ctx.stroke();
//     }
//   }

//   drawBrush = () => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');
//     const { brushX, brushDownPos, brushY } = this.state;

//     for(let i = 1; i < brushX.length; i++){
//         ctx.beginPath();

//         if(brushDownPos[i]){
//             ctx.moveTo(brushX[i-1], brushY[i-1]);
//         } else {
//             ctx.moveTo(brushX[i]-1, brushY[i]);
//         }
//         ctx.lineTo(brushX[i], brushY[i]);
//         ctx.closePath();
//         ctx.stroke();
//     }
// }

//   saveCanvasImage() {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');

//     this.setState({ savedImage: ctx.getImageData(0,0,canvas.width,canvas.height) })
//   }

//   mousedown = e => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const canvasSizeData = canvas.getBoundingClientRect();
//     const ctx = canvas.getContext('2d');

//     let savedImage = ctx.getImageData(0,0,canvas.width,canvas.height)

//     let loc = {
//       x: (e.clientX - canvasSizeData.left) * (canvas.width / canvasSizeData.width),
//       y: (e.clientY - canvasSizeData.top) * (canvas.height / canvasSizeData.height)
//     }

//     let mousedown = {
//       x: e.clientX - canvasSizeData.left,
//       y: e.clientY
//     }

//     this.setState({
//       cursor: 'crosshair',
//       // loc,
//       mousedown,
//       dragging: true,
//       usingBrush: this.props.currentTool === 'brush',
//       savedImage,
//     })
//     // this.saveCanvasImage();

//     if(this.props.currentTool === 'brush') {
//         this.addBrushPoint(e.clientX, e.clientY, false);
//     }
//   }

//   mouseup = e => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');

//     this.setState({
//       cursor: 'default',
//       loc: {
//         x: e.clientX,
//         y: e.clientY
//       },
//       dragging: false,
//       usingBrush: false
//     })
//     ctx.putImageData(this.state.savedImage, 0, 0);
//     this.updateRubberBandOnMove();
//   }

//   mousemove = e => {
//     const canvas = ReactDOM.findDOMNode(this.refs.canvas);
//     const ctx = canvas.getContext('2d');
//     const canvasSizeData = canvas.getBoundingClientRect();

//     const { dragging, usingBrush, height, width } = this.state;

//     let loc = {
//       // x: (e.clientX - canvasSizeData.left) * (canvas.width / canvasSizeData.width),
//       // y: (e.clientY - canvasSizeData.top) * (canvas.height / canvasSizeData.height)
//       x: (e.clientX - canvasSizeData.left),
//       y: (e.clientY - canvasSizeData.top)
//     }

//     this.setState({
//       cursor: 'crosshair',
//       loc
//     })

//     if(this.props.currentTool === 'brush' && dragging && usingBrush) {
//       if(loc.x > 0 && loc.x < width && loc.y > 0 && loc.y < height) {
//         this.addBrushPoint(loc.x, loc.y, true)
//       }
//       ctx.putImageData(this.state.savedImage, 0, 0);
//       this.drawBrush();
//     } else {
//       if(dragging) {
//         ctx.putImageData(this.state.savedImage, 0, 0);
//         this.updateRubberBandOnMove();
//       }
//     }
//   }

//   render() {
//     return (
//       <>
//       <canvas
//         ref = 'canvas'
//         onMouseDown = { e => this.mousedown(e) }
//         onMouseMove = { e => this.mousemove(e) }
//         onMouseUp = { e => this.mouseup(e) }
//         style = { this.style(this.state.cursor) }
//         height = { this.state.height }
//         width = { this.state.width }
//       ></canvas>
//       <button onClick = { () => this.test() }>test</button>
//       </>
//     )
//   }
// }
