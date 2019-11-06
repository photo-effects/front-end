import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import html2canvas from 'html2canvas';

import Toolbar from './Toolbar';

export default class Paint extends Component {
  state = {
    tools: {
      brush: false,
      line: false,
      rectangle: false,
      circle: false,
      eraser: false
    },
    currentTool: null,
    paintColor: {
      red: 0,
      green: 0,
      blue: 0
    },
    height: 0,
    width: 0,
    left: null,
    brush_width: 5,
    saved: [],
    removed: [],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    preview: null,
    toolbar: {},
    boxShadow: '2px 2px 15px black'
  };

  componentDidMount() {
    const parent = this.props.parent.getBoundingClientRect();
    const container = this.props.container.getBoundingClientRect();

    const left = parent.left - container.left;
    const top = parent.top - container.top;

    this.setState({
      height: parent.height / 2,
      width: parent.width / 2,
      left: parent.width / 2 / 2,
      id: this.props.id,
      toolbar: {
        width: container.width,
        left,
        top
      }
    });
  }

  handlePreview = () => {
    this.setState({ boxShadow: 'none' });
    setTimeout(() => {
      html2canvas(document.querySelector(`#canvas-${this.state.id}`), {
        backgroundColor: 'rgba(0,0,0,0)'
      }).then(canvas => {
        const image = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');

        this.setState({ preview: image, boxShadow: '2px 2px 15px black' });
      });
    }, 50);
  };

  saveLayer = () => {
    setTimeout(() => {
      this.props.setPaint(
        this.state.id,
        this.state.preview,
        this.state.width / 2,
        this.state.height / 2,
        this.state.width,
        this.state.height
      );
    }, 500);
  };

  actions = e => {
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const ctx = canvas.getContext('2d');
    const temp = ReactDOM.findDOMNode(this.refs.canvasTemp);
    const temp_ctx = temp.getContext('2d');
    const boundingRect = canvas.getBoundingClientRect();

    const {
      tools,
      start,
      end,
      paintColor,
      brush_width,
      currentTool
    } = this.state;
    const { red, green, blue } = paintColor;

    const getColor = `rgb(${red},${green},${blue})`;

    ctx.lineWidth = temp_ctx.lineWidth = brush_width;
    ctx.lineCap = temp_ctx.lineCap = 'round';
    ctx.fillStyle = temp_ctx.fillStyle = ctx.strokeStyle = temp_ctx.strokeStyle = getColor;

    const drawLine = (toX, toY, context) => {
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(toX, toY);
      context.stroke();
    };

    const drawRect = (x, y, width, height, context) => {
      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();
    };

    const drawCirc = (x1, y1, x2, y2, context) => {
      const radius = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      context.beginPath();
      context.arc(x1, y1, radius, 0, 2 * Math.PI);
      context.stroke();
    };

    const clear = (cnv, ctx) => {
      ctx.clearRect(0, 0, cnv.width, cnv.height);
    };

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    const width = x - start.x;
    const height = y - start.y;

    const save = () => {
      const _img = canvas.toDataURL('image/png');
      let saved = this.state.saved;
      saved.push(_img);
      this.setState({ saved });
    };

    const remove = () => {
      const _img = canvas.toDataURL('image/png');
      let removed = this.state.removed;
      removed.push(_img);
      this.setState({ removed });
    };

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }

    return {
      undo: () => {
        if (this.state.saved.length > 0) {
          remove();
          clear(canvas, ctx);
          const _img = new Image();
          _img.onload = () => {
            ctx.drawImage(_img, 0, 0);
          };
          let saved = this.state.saved;
          _img.src = saved.pop();
          this.setState({ saved });
        }

        setTimeout(this.handlePreview, 50);
      },

      redo: () => {
        if (this.state.removed.length > 0) {
          save();
          clear(canvas, ctx);
          clear(temp, temp_ctx);
          const _img = new Image();
          _img.onload = () => {
            ctx.drawImage(_img, 0, 0);
          };
          let removed = this.state.removed;
          _img.src = removed.pop();
          this.setState({ removed });
        }

        setTimeout(this.handlePreview, 50);
      },

      click: () => {
        this.props.bringToTop(this.state.id);
        if (currentTool === 'brush' || currentTool === 'eraser') {
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
          left: this.state.width / 2
        });

        clear(temp, temp_ctx);
        ctx.beginPath();
      },

      mousemove: () => {
        if (tools.brush || tools.eraser) {
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
        }

        if (tools.line) {
          this.setState({ end: { x, y } });
          clear(temp, temp_ctx);
          drawLine(x, y, temp_ctx);
        }

        if (tools.rectangle) {
          clear(temp, temp_ctx);
          drawRect(start.x, start.y, width, height, temp_ctx);
        }

        if (tools.circle) {
          clear(temp, temp_ctx);
          drawCirc(start.x, start.y, x, y, temp_ctx);
        }
      },

      mouseup: () => {
        clear(temp, temp_ctx);

        if (tools.line) {
          drawLine(end.x, end.y, ctx);
        }

        if (tools.rectangle) {
          drawRect(start.x, start.y, width, height, ctx);
        }

        if (tools.circle) {
          drawCirc(start.x, start.y, x, y, ctx);
        }

        this.setState({
          tools: {
            brush: false,
            line: false,
            rectangle: false,
            circle: false
          },
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
          left: '-10000%'
        });

        this.handlePreview();
      }
    };
  };

  toolbar = {
    undo: e => this.actions(e).undo(),
    redo: e => this.actions(e).redo(),

    changeTool: tool => {
      this.setState({ currentTool: tool });
    },

    changePaintColor: (color, val) => {
      this.setState({
        paintColor: {
          ...this.state.paintColor,
          [color]: val
        }
      });
    },

    changeWidth: brush_width => {
      this.setState({ brush_width });
    }
  };

  render() {
    const _ = React.createElement;
    const {
      height,
      width,
      brush_width,
      currentTool,
      paintColor,
      preview
    } = this.state;

    const toolbar_props = {
      currentTool,
      brush_width,
      paintColor,
      preview,
      changeTool: this.toolbar.changeTool,
      changePaintColor: this.toolbar.changePaintColor,
      changeWidth: this.toolbar.changeWidth,
      undo: this.toolbar.undo,
      redo: this.toolbar.redo,
      saveLayer: this.saveLayer,
      z: this.props.z + 1,
      toolbar: this.state.toolbar
    };

    const canvasProps = temp => ({
      ref: temp ? 'canvasTemp' : 'canvas',
      id: temp ? 'canvasTemp' : `canvas-${this.state.id}`,
      height,
      width,
      style: {
        position: 'absolute',
        bottom: this.state.height / 2,
        left: temp ? this.state.left : this.state.width / 2,
        zIndex: this.props.z,
        boxShadow: this.state.boxShadow
      },
      onMouseDown: e => this.actions(e).mousedown(),
      onMouseUp: e => this.actions(e).mouseup(),
      onMouseMove: e => this.actions(e).mousemove(),
      onClick: e => this.actions(e).click()
    });

    return _(React.Fragment, null, [
      _(Toolbar, toolbar_props, null),
      _('div', { style: { zIndex: 1000000 } }, [
        _('canvas', canvasProps(false), null),
        _('canvas', canvasProps(true), null)
      ])
    ]);
  }
}
