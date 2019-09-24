import React from 'react';

const TextEdit = props => {

  const styles = () => {
    const { color, background, style, weight, decoration, slider } = props.textbox;

    return {
      margin:'auto',
      padding: '10px',
      border: '1px blue solid',
      textAlign: 'center',
      color: color,
      backgroundColor: background,
      fontStyle: style,
      fontWeight: weight,
      textDecoration: decoration,
      fontSize: slider,
    }
  }

  return (
    <div
      style = { styles() }
      contentEditable = { true }
      suppressContentEditableWarning = { true }
    >
      Add some text!
    </div>
  );
}

export default TextEdit;