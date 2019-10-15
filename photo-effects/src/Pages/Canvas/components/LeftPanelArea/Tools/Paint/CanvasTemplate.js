import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const _ = React.createElement;

export default class CanvasTemplate extends Component {
  state = {
    tools: { 
      'brush': false,
      'line': false,
      'rectangle': false
    },
    height: 0,
    width: 0,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    saved: [],
    removed: [],
    hide: 4,
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const parent = node.offsetParent.getBoundingClientRect();

    this.setState({
      height: parent.height - 12,
      width: parent.width - 12,
    })

    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');

    const _img = new Image();
    _img.onload = () => {
      ctx.drawImage(_img,0,0)
    }
    _img.src = this.props.imgSrc;

    ctx.beginPath();
  }

  componentDidUpdate() {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');

    const _img = new Image();
    _img.onload = () => {
      ctx.drawImage(_img,0,0)
    }
    _img.src = "";
  }

  actions = e => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');
    const temp = ReactDOM.findDOMNode(this.refs.canvasTemp);
    const temp_ctx = temp.getContext('2d');
    const boundingRect = canvas.getBoundingClientRect();

    const { red, green, blue } = this.props.paintColor;

    const getColor = `rgb(${red},${green},${blue})`
    const getWidth = this.props.width;
    
    ctx.lineWidth = temp_ctx.lineWidth = getWidth;
    ctx.lineCap = temp_ctx.lineCap = 'round';
    ctx.fillStyle = temp_ctx.fillStyle = ctx.strokeStyle = temp_ctx.strokeStyle = getColor;

    const { tools, start, end } = this.state;

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
      // this.props.save(_img)
      let saved = this.state.saved;
      saved.push(_img);
      this.setState({ saved })
    }

    const remove = () => {
      const _img = canvas.toDataURL('image/png');
      // this.props.remove(_img)
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
      },

      click: () => {
        if(this.props.currentTool === 'brush') {
          ctx.arc(x, y, getWidth / 2, 0, Math.PI * 2, true);
          ctx.fill();
        }
      },

      mousedown: () => {
        save();
        this.setState({ 
          tools: {
            ...this.state.tools,
            [this.props.currentTool]: true
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
      }
    }
  }

  render() { 
    const { height, width } = this.state;

    const canvasProps = temp => ({ 
      ref: temp ? 'canvasTemp' : 'canvas', 
      height, width, 
      style: {
        border: '2px solid red',
        position: 'absolute',
        bottom: 4,
        left: temp ? this.state.hide : 4
      },
      onMouseDown: e => this.actions(e).mousedown(),
      onMouseUp: e => this.actions(e).mouseup(),
      onMouseMove: e => this.actions(e).mousemove(),
      onClick: e => this.actions(e).click()
    })

    const buttonProps = type => ({
      style: {
        position: 'absolute',
        bottom: 20,
        left: type === 'redo' ? 50 : 10
      },
      onClick: e => this.actions(e)[type]()
    })
    
    return (
      _(React.Fragment, null, [
        _('canvas', canvasProps(false), null),
        _('canvas', canvasProps(true), null),
        _('button', buttonProps('undo'), 'undo'),
        _('button', buttonProps('redo'), 'redo')
      ])
    )
  }
}