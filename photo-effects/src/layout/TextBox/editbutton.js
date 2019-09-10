import React from 'react';

function EditButton(props) {
  return (
    <button
      className={props.btnstyle}
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      <i className={'fas fa-' + props.cmd}> </i>
    </button>
  );
}

export default EditButton
