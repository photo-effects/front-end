import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import html2canvas from 'html2canvas';

import Toolbar from './Toolbar';

export default class Paint extends Component {
  state = {
    tools: { 
      'brush': false,
      'line': false,
      'rectangle': false,
      'eraser': false
    },
    currentTool: null,
    paintColor: {
      red: 0,
      green: 0,
      blue: 0
    },
    height: 0,
    width: 0,
    brush_width: 15,
    saved: [],
    removed: [],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    preview: null
  }

  componentDidMount() { console.log(this.props.id)
    const node = ReactDOM.findDOMNode(this.refs.canvas);
    const parent = node.offsetParent.getBoundingClientRect();

    this.setState({
      height: parent.height - 12,
      width: parent.width - 12,
      id: this.props.id
    })
  }

  handlePreview = () => {
    html2canvas(document.querySelector(`#canvas-${this.state.id}`)).then(canvas => {
      const image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      
      this.setState({ preview: image })
    });
  };

  actions = e => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');
    const temp = ReactDOM.findDOMNode(this.refs.canvasTemp);
    const temp_ctx = temp.getContext('2d');
    const boundingRect = canvas.getBoundingClientRect();

    const { tools, start, end, paintColor, brush_width, currentTool } = this.state;
    const { red, green, blue } = paintColor;

    const getColor = `rgb(${red},${green},${blue})`
    
    ctx.lineWidth = temp_ctx.lineWidth = brush_width;
    ctx.lineCap = temp_ctx.lineCap = 'round';
    ctx.fillStyle = temp_ctx.fillStyle = ctx.strokeStyle = temp_ctx.strokeStyle = getColor;

    const drawLine = (toX, toY, context) =>{
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(toX, toY);
      context.stroke();
    }

    const drawRect = (x, y, width, height, context) => {
      context.beginPath();
      context.rect(x,y,width,height);
      context.stroke();
    }

    const clear = (cnv, ctx) => {
      ctx.clearRect(0, 0, cnv.width, cnv.height)
    }

    const x = e.clientX - boundingRect.left
    const y = e.clientY - boundingRect.top

    const width = x-start.x;
    const height = y-start.y;
    
    const save = () => {
      const _img = canvas.toDataURL('image/png');
      let saved = this.state.saved;
      saved.push(_img);
      this.setState({ saved })
    }

    const remove = () => {
      const _img = canvas.toDataURL('image/png');
      let removed = this.state.removed;
      removed.push(_img);
      this.setState({ removed })
    }

    return {
      undo: () => {
        if(this.state.saved.length > 0) {
          remove();
          clear(canvas, ctx);
          const _img = new Image();
          _img.onload = () => {
            ctx.drawImage(_img, 0, 0);
          }
          let saved = this.state.saved;
          _img.src = saved.pop();
          this.setState({ saved })
        }

        setTimeout(this.handlePreview, 50);
      },

      redo: () => {
        if(this.state.removed.length > 0) {
          save();
          clear(canvas, ctx);
          clear(temp, temp_ctx);
          const _img = new Image();
          _img.onload = () => {
            ctx.drawImage(_img, 0, 0);
          }
          let removed = this.state.removed;
          _img.src = removed.pop();
          this.setState({ removed })
        }

        setTimeout(this.handlePreview, 50);
      },

      click: () => {
        if(currentTool === 'brush') {
          ctx.arc(x, y, brush_width / 2, 0, Math.PI * 2, true);
          ctx.fill();
        }
      },

      mousedown: () => {
        save();
        this.setState({ 
          tools: {
            ...this.state.tools,
            [currentTool]: true
          },
          start: { x, y },
        });

        clear(temp, temp_ctx);
        ctx.beginPath();
      },

      mousemove: () => {
        if(tools.brush) {
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y)
        }

        if(tools.line) {
          this.setState({ end: { x, y } })
          clear(temp, temp_ctx);
          drawLine(x, y, temp_ctx)
        }

        if(tools.rectangle) {
          clear(temp, temp_ctx);
          drawRect(start.x, start.y, width, height, temp_ctx)
        }

        if(tools.eraser) {
          // clear(temp, temp_ctx);
          // clear(canvas, ctx);
          // ctx.globalCompositeOperation="destination-out";
          // ctx.beginPath();
          // ctx.arc(end.x,end.y,8,0,Math.PI*2,false);
          // ctx.fill();

          ctx.globalCompositeOperation = 'destination-out';

          ctx.beginPath();
          ctx.arc(x, y, 10, 0, 2 * Math.PI);
          ctx.fill();

          ctx.lineWidth = 20;
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(x, y);
          ctx.stroke();

          this.setState({x: start.x, y: start.y});
        }
      },

      mouseup: () => {
        clear(temp, temp_ctx);

        if(tools.line) {
          drawLine(end.x, end.y, ctx)
        }

        if(tools.rectangle) {
          drawRect(start.x, start.y, width, height, ctx)
        }

        this.setState({ 
          tools: { 
            'brush': false,
            'line': false,
            'rectangle': false
          },
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
          left: '-150%',
        })

        this.handlePreview();
      }
    }
  }

  toolbar = {
    undo: e => this.actions(e).undo(),
    redo: e => this.actions(e).redo(),

    changeTool: tool => {
      this.setState({ currentTool: tool })
    },
  
    changePaintColor: (color, val) => {
      this.setState({
        paintColor: {
          ...this.state.paintColor,
          [color]: val
        }
      })
    },
  
    changeWidth: brush_width => {
      this.setState({ brush_width })
    }
  }

  render() {
    const _ = React.createElement;
    const { height, width, brush_width, currentTool, paintColor, preview } = this.state;

    const toolbar_props = {
      currentTool, brush_width, paintColor, preview,
      changeTool: this.toolbar.changeTool,
      changePaintColor: this.toolbar.changePaintColor,
      changeWidth: this.toolbar.changeWidth,
      undo: this.toolbar.undo,
      redo: this.toolbar.redo,
      z: this.props.z + 1
    }

    const canvasProps = temp => ({ 
      ref: temp ? 'canvasTemp' : 'canvas', 
      id: temp ? 'canvasTemp' : `canvas-${this.state.id}`,
      height, width, 
      style: {
        border: '2px solid red',
        position: 'absolute',
        bottom: 4,
        left: temp ? this.state.hide : 4,
        zIndex: this.props.z
      },
      onMouseDown: e => this.actions(e).mousedown(),
      onMouseUp: e => this.actions(e).mouseup(),
      onMouseMove: e => this.actions(e).mousemove(),
      onClick: e => this.actions(e).click()
    })

    return (
      _('div', { style: { zIndex: 1000000 } }, [
        _(Toolbar, toolbar_props, null),
        _('canvas', canvasProps(false), null),
        _('canvas', canvasProps(true), null)
      ])
    )
  }
}