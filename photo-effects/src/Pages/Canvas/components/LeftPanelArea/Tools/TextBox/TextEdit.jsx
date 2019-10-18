import React, { Component } from 'react';

export default class TextEdit extends Component {
  state = {
    text: 'text',
    height: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({});
    this.props.textboxFinish();
  };

  render() {
    const {
      color,
      background,
      style,
      weight,
      decoration,
      slider,
      editable
    } = this.props.textbox;

    const { height, width } = this.state;

    const flex = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto',
      height: 'auto'
    };

    const styles = {
      margin: 'auto',
      width: 'auto',
      height: 'auto',
      textAlign: 'center',
      color: color,
      backgroundColor: background,
      fontStyle: style,
      fontWeight: weight,
      textDecoration: decoration,
      fontSize: slider,
      cursor: editable ? 'text' : 'pointer',
      padding: '10px'
    };

    const hidden = {
      visibility: 'hidden',
      position: 'absolute',
      left: -10000000
    };

    return (
      <div
        contentEditable={editable}
        style={styles}
        onMouseEnter={e => e.preventDefault()}
        onMouseLeave={this.props.textboxFinish}
        suppressContentEditableWarning={true}
      >
        {this.state.text}
      </div>
    );
  }
}

// const TextEdit = props => {
//   const { color, background, style, weight, decoration, slider, editable } = props.textbox;

//   const styles = () => {
//     return {
//       margin:'auto',
//       padding: '10px',
//       textAlign: 'center',
//       color: color,
//       backgroundColor: background,
//       fontStyle: style,
//       fontWeight: weight,
//       textDecoration: decoration,
//       fontSize: slider,
//     }
//   }

//   return (
//     <div
//       style = { styles() }
//       contentEditable = { true }
//       suppressContentEditableWarning = { true }
//     >
//       Add some text!
//     </div>
//   );
// }

// export default TextEdit;
