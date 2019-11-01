import React, { Component } from "react";

import TextEdit from "../../components/LeftPanelArea/Tools/TextBox/TextEdit";
import TextToolbar from "../../components/LeftPanelArea/Tools/TextBox/TextToolbar";

export default class Toolbar extends Component {
  state = {
    open: true,
    item: {},
    rotate: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item !== prevState.item) {
      return {
        item: nextProps.item
      };
    } else return null;
  }

  container = open => ({
    height: "72px",
    marginTop: open ? "-72px" : "-144px",
    borderBottom: "2px solid black",
    width: this.props.width,
    background: "white",
    transition: "margin-top 1s ease",
    position: "absolute",
    top: 0 - this.props.top,
    right: 0 - this.props.left,
    zIndex: this.state.item.props.style ? this.state.item.props.style.zIndex : 0
  });

  render() {
    return (
      <div style={this.container(this.state.open)}>
        {this.state.item ? (
          this.state.item.type === TextEdit ? (
            <TextToolbar
              setTextbox={this.props.setTextbox}
              textbox={this.props.textbox}
              item={this.state.item}
              removeImage={this.props.removeImage}
            />
          ) : (
            <div
              style={toobarStyle}
            >
              <span>{this.props.alt}</span>
              <form style={formStyle}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#F4F4F4' }}>Opacity: </span>
                <input style={{marginTop:'10px'}}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={this.props.opacity}
                  onChange={e => this.props.changeOpacity(e.target.value)}
                />
                </div> 
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#F4F4F4' }}>Grayscale: </span>
                <input style={{marginTop:'10px'}}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={this.props.grayscale}
                  onChange={e => this.props.changeGrayscale(e.target.value)}
                />
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#F4F4F4' }}>Rotate: </span>
                <input style={{marginTop:'10px'}}
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={this.props.transform}
                  onChange={e => this.props.changeTransform(e.target.value)}
                />
</div>
                {/* <button onClick={e => this.props.flipImage(e)} style={flipBtn}> Flip Image </button> */}
              </form>
              <button
                style={btnBackground}
                onClick={e => this.props.removeImage(this.props.id)}
              >
                <i className="far fa-trash-alt fa-fw fa-3x" style={{padding:'5px'}}></i>
              </button>
            </div>
          )
        ) : null}
        {/* <div 
          style = { openBtn }
          onClick = { () => this.setState({ open: !this.state.open }) }
        >
          open
        </div> */}
      </div>
    );
  }
}

const btnBackground = {
  background: '#FC5185',
  border: 'none',
  borderRadius: '10px',
marginRight:'70px',
  color: '#F4F4F4',
  fontSize: '12px',
  textShadow: '0px 0px 2px rgba(59,63,66,0.67)'
};


const toobarStyle = {
  width: '100%',
  height: '100%',
  background: '#364F6B',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // border: 'pink 1px solid',
  margin: 'auto',
  padding:'10px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '70%',
  // border: '1px solid blue',
  margin: 'auto'
};



// const flipBtn = {
//   background: '#58DDE6',
//   border: 'none',
//   borderRadius: '10px',
//   color: '#F4F4F4',
//   fontSize: '18px',
//   fontWeight: 'bold',
//   padding: '5px',
//   textShadow: '0px 0px 2px rgba(59,63,66,0.67)'
// };

