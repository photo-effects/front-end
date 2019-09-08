import React, { useState } from 'react';
import TextEdit from './TextEdit';

const TextToolbar = () => {
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('');

  return (
    <div>
      <div
        style={{
          padding: '10px',
          fontSize: '3rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '600px',
          border: '1px solid hotpink',
          marginBlock: '50px',
          margin: 'auto'
        }}
      >
        <EditButton cmd="bold" btnstyle="bold" />
        <EditButton cmd="italic" btnstyle="italic" />
        <EditButton cmd="underline" btnstyle="underline" />

        <div style={{display:'flex', marginTop:'20px'}}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '230px'
            }}
          >
            <p
              style={{
                fontSize: '1.8rem',
                marginRight: '5px',
                marginTop: '5px'
              }}
            >
              Text Color:
            </p>
            <div
             onClick={() => setColor('white')}
              style={{
                background: 'white',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
             onClick={() => setColor('black')}
              style={{
                background: 'black',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
              onClick={() => setColor('red')}
              style={{
                background: 'red',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
             onClick={() => setColor('blue')}
              style={{
                background: 'blue',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
             onClick={() => setColor('green')}
              style={{
                background: 'green',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
          </div>


          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '230px'
            }}
          >
            <p
              style={{
                fontSize: '1.8rem',
                marginRight: '5px',
                marginTop: '5px'
              }}
            >
              Background:
            </p>
            <div
            onClick={() => setBackground('whitebg')}
              style={{
                background: 'white',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
            onClick={() => setBackground('blackbg')}
              style={{
                background: 'black',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
              onClick={() => setBackground('redbg')}
              style={{
                background: 'red',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
            onClick={() => setBackground('bluebg')}
              style={{
                background: 'blue',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
            <div
            onClick={() => setBackground('greenbg')}
              style={{
                background: 'green',
                border: 'black 1px solid',
                width: '25px',
                height: '25px'
              }}
            ></div>
          </div>
        </div>
      </div>
      <TextEdit color={color} background={background} />
    </div>
  );
};

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
export default TextToolbar;
