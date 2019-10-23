import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Toolbar extends Component {
  state = {
    open: false,
    preview: null,
    warning: {
      message:
        'Save each paint layer as an image before adding new elements, saving, or downloading!',
      open: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.preview !== prevState.preview) {
      return {
        preview: nextProps.preview
      };
    }
  }

  change = tool => {
    this.setState({ open: false });
    this.props.changeTool(tool);
  };

  render() {
    const { open } = this.state;
    const { currentTool, toolbar } = this.props;
    const { width, left } = toolbar;

    const container = {
      width,
      height: '74px',
      position: 'absolute',
      top: -74,
      left: left * -1,
      border: '1px solid black',
      background: 'lightgray',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: this.props.z
    };

    const dropdown = {
      width: '80px',
      height: '70%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      border: '2px solid black',
      cursor: 'pointer'
    };

    const warning = {
      position: 'absolute',
      border: '2px solid black',
      height: '20px',
      bottom: -24,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      fontSize: '1.3rem'
    };

    const tools = ['brush', 'line', 'rectangle', 'circle', 'eraser'];

    return (
      <div style={container}>
        <Tools
          tools={tools}
          change={this.change}
          currentTool={currentTool}
          open={open}
          dropdown={dropdown}
        />

        {this.props.preview ? (
          <img
            src={this.props.preview}
            style={{
              border: '2px solid black',
              height: '50px',
              width: this.props.preview ? 'auto' : '50px'
            }}
            alt="preview"
          />
        ) : (
          <div
            style={{
              border: '2px solid black',
              height: '50px',
              width: this.props.preview ? 'auto' : '50px'
            }}
          ></div>
        )}

        <button onClick={() => this.props.saveLayer()}>
          save as image layer
        </button>

        <div>
          <button onClick={e => this.props.undo(e)}>undo</button>

          <button onClick={e => this.props.redo(e)}>redo</button>
        </div>

        <Width
          changeWidth={this.props.changeWidth}
          brush_width={this.props.brush_width}
        />

        <Colors
          dropdown={dropdown}
          paintColor={this.props.paintColor}
          changePaintColor={this.props.changePaintColor}
        />

        <div style={warning}>{this.state.warning.message}</div>
      </div>
    );
  }
}

class Tools extends Component {
  state = {
    open: false
  };

  change = tool => {
    this.setState({ open: false });
    this.props.change(tool);
  };

  render() {
    const { open } = this.state;
    const { currentTool, tools, dropdown } = this.props;

    const toolsMenu = {
      width: '25%',
      height: 'auto',
      border: '2px solid blue',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: open ? 47 : -500,
      left: 0,
      zIndex: 1000,
      background: 'gray'
    };

    const rotate = {
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)'
    };

    const item = {
      width: '12%',
      textAlign: 'center',
      padding: '15px 5px',
      transition: 'all 0.5s ease',
      cursor: 'pointer'
    };

    return (
      <>
        <div style={dropdown} onClick={() => this.setState({ open: !open })}>
          <div>{open || currentTool === null ? 'Tools' : currentTool}</div>
          <div style={rotate}>{'>'}</div>
        </div>
        <div style={toolsMenu}>
          {tools.map(tool => (
            <span key={tool} onClick={() => this.change(tool)} style={item}>
              {tool === currentTool ? tool.toUpperCase() : tool}
            </span>
          ))}
        </div>
      </>
    );
  }
}

class Width extends Component {
  render() {
    return (
      <form>
        <span>Width: </span>
        <input
          type="range"
          min="0"
          max="100"
          value={this.props.brush_width}
          onChange={e => this.props.changeWidth(e.target.value)}
        />
      </form>
    );
  }
}

class Colors extends Component {
  state = {
    open: false,
    rgb: {
      red: 0,
      green: 0,
      blue: 0
    }
  };

  handleChange = (e, color) => {
    this.setState({
      rgb: {
        ...this.state.rgb,
        [color]: e.target.value
      }
    });

    this.props.changePaintColor(color, e.target.value);
  };

  render() {
    const { open } = this.state;
    const { dropdown } = this.props;

    const colorsMenu = {
      width: '25%',
      height: 'auto',
      border: '2px solid blue',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      top: open ? 72 : -500,
      right: 0,
      zIndex: 1000,
      background: 'gray',
      padding: '10px 0'
    };

    const rotate = {
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)'
    };

    const item = {
      border: '2px solid black',
      padding: '5px 10px',
      margin: '10px 5px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '1.5rem'
    };

    const { red, green, blue } = this.state.rgb;

    const preview = {
      height: '20px',
      width: '50%',
      border: '1px solid black',
      background: `rgb(${red},${green},${blue})`
    };

    const colors = ['Red', 'Green', 'Blue'];

    return (
      <>
        <div style={dropdown} onClick={() => this.setState({ open: !open })}>
          <div>Color</div>
          <div style={rotate}>{'<'}</div>
        </div>
        <div
          style={colorsMenu}
          onMouseEnter={e => e.preventDefault()}
          onMouseLeave={() => this.setState({ open: false })}
        >
          <form>
            <ul>
              {colors.map(color => (
                <li style={item}>
                  <span style={{ color: color.toLowerCase() }}>
                    {color.split('')[0]}:&nbsp;
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value="0"
                    onChange={e => this.handleChange(e, color.toLowerCase())}
                    value={this.props.paintColor[color.toLowerCase()]}
                  />
                </li>
              ))}
            </ul>
          </form>
          <div style={preview}></div>
        </div>
      </>
    );
  }
}
