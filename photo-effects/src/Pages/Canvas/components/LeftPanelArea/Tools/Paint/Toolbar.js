import React, { Component } from "react";

//colors:
//text: #F4F4F0

export default class Toolbar extends Component {
  state = {
    open: false,
    preview: null,
    hover: false,
    hover1: false,
    hover2: false,
    warning: {
      message:
        "Save each paint layer as an image before adding new elements, saving, or downloading!",
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
    const { width, left, top } = toolbar;

    const container = {
      width,
      height: "74px",
      position: "absolute",
      top: top * -1 - 72,
      left: left * -1,
      border: "1px solid black",
      background: "#364F6B",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      zIndex: this.props.z,
      fontSize: "1.6rem"
    };

    const dropdown = {
      width: "80px",
      height: "70%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      border: "2px solid black",
      cursor: "pointer",
      background: "#F4F4F4",
      borderRadius: "8px"
    };

    const warning = {
      position: "absolute",
      border: "2px solid black",
      height: "20px",
      bottom: -24,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      fontSize: "1.3rem"
    };

    const saveBtn = {
      border: "none",
      fontSize: "1.6rem",
      padding: "6px",
      background: "#fc5185",
      borderRadius: "8px",
      color: "#3b3f42",
      fontWeight: "bold",
      transform: this.state.hover ? "scale(1.05)" : "scale(1)",
      transition: this.state.hover ? "ease-in-out 0.1s" : "null"
    };

    const undoBtn = {
      border: "none",
      fontSize: "1.6rem",
      padding: "6px",
      background: "#43dde6",
      borderRadius: "8px",
      color: "#3b3f42",
      fontWeight: "bold",
      transform: this.state.hover1 ? "scale(1.05)" : "scale(1)",
      transition: this.state.hover1 ? "ease-in-out 0.1s" : "null"
    };

    const redoBtn = {
      border: "none",
      fontSize: "1.6rem",
      padding: "6px",
      background: "#ffdb27",
      borderRadius: "8px",
      color: "#3b3f42",
      fontWeight: "bold",
      transform: this.state.hover2 ? "scale(1.05)" : "scale(1)",
      transition: this.state.hover2 ? "ease-in-out 0.1s" : "null"
    };

    const tools = ["Brush", "Line", "Rectangle", "Circle", "Eraser"];

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
          <div style={{background:'white', maxHeight: '50px'}}>
          <img
            src={this.props.preview}
            style={{
              border: "2px solid black",
              height: "50px",
              width: this.props.preview ? "auto" : "50px"
            }}
            alt="preview"
          />
          </div>
        ) : (
          <div
            style={{
              border: "2px solid black",
              height: "50px",
              width: this.props.preview ? "auto" : "50px"
            }}
          ></div>
        )}

        <button
          style={saveBtn}
          onClick={() => this.props.saveLayer()}
          onMouseEnter={
            !this.state.hover ? () => this.setState({ hover: true }) : null
          }
          onMouseLeave={
            this.state.hover ? () => this.setState({ hover: false }) : null
          }
        >
          save as image layer
        </button>

        <div>
          <button
            style={undoBtn}
            onClick={e => this.props.undo(e)}
            onMouseEnter={
              !this.state.hover1 ? () => this.setState({ hover1: true }) : null
            }
            onMouseLeave={
              this.state.hover1 ? () => this.setState({ hover1: false }) : null
            }
          >
            undo
          </button>

          <button
            style={redoBtn}
            onClick={e => this.props.redo(e)}
            onMouseEnter={
              !this.state.hover2 ? () => this.setState({ hover2: true }) : null
            }
            onMouseLeave={
              this.state.hover2 ? () => this.setState({ hover2: false }) : null
            }
          >
            redo
          </button>
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
    // hover: false,
  };

  change = tool => {
    this.setState({ open: false });
    this.props.change(tool);
  };

  render() {
    const { open } = this.state;
    const { currentTool, tools, dropdown } = this.props;

    const toolsMenu = {
      width: "25%",
      height: "auto",
      boxShadow: "1px 0px 19px -4px rgba(59,63,66,1)",
      border: "1px solid #3B3F42",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: open ? 47 : -500,
      left: 0,
      zIndex: 1000,
      fontSize: "1.6rem"
    };

    const rotate = {
      transform: open ? "rotate(90deg)" : "rotate(0deg)"
    };

    const item = {
      width: "100%",
      textAlign: "center",
      padding: "15px 5px",
      transition: "all 0.5s ease",
      cursor: "pointer",
      borderBottom: "1px solid #3B3F42",
      borderRadius: "2px",
      background: '#D0D0D0'
      // backgroundColor: this.state.hover ? 'red' : '#D0D0D0'
    };

    return (
      <>
        <div style={dropdown} onClick={() => this.setState({ open: !open })}>
          <div>{open || currentTool === null ? "Tools" : currentTool}</div>
          <div style={rotate}>{">"}</div>
        </div>
        <div style={toolsMenu}>
          {tools.map(tool => (
            <span key={tool} onClick={() => this.change(tool.toLowerCase())} style={item}>
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
      width: "25%",
      height: "auto",
      border: "2px solid blue",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      top: open ? 72 : -500,
      right: 0,
      zIndex: 1000,
      background: "gray",
      padding: "10px 0"
    };

    const rotate = {
      transform: open ? "rotate(90deg)" : "rotate(0deg)"
    };

    const item = {
      border: "2px solid black",
      padding: "5px 10px",
      margin: "10px 5px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      fontSize: "1.5rem"
    };

    const { red, green, blue } = this.state.rgb;

    const preview = {
      height: "20px",
      width: "50%",
      border: "1px solid black",
      background: `rgb(${red},${green},${blue})`
    };

    const colors = ["Red", "Green", "Blue"];

    return (
      <>
        <div style={dropdown} onClick={() => this.setState({ open: !open })}>
          <div>Color</div>
          <div style={rotate}>{"<"}</div>
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
                    {color.split("")[0]}:&nbsp;
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="255"
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
