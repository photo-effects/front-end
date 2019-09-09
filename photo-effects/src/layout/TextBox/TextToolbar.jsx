import React, { useState } from 'react';

import TextEdit from './TextEdit';
import EditButton from './editbutton';
import Slider from './Slider';


const TextToolbar = () => {
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('');
  const [slider, setSlider] = useState('')
  const [txtcolor, setTxtcolor] = useState(false)
    
const sliderValue =(value)=>{
// console.log(value)

  setSlider(value)

}
 
  return (
    <div>
      <div
        style={toolbarStyle}
      >

        <div>
        <div style={{width:'100px'}}>
        <EditButton cmd="bold" btnstyle='bold' />
        <EditButton cmd="italic" btnstyle="italic" />
        <EditButton cmd="underline" btnstyle="underline" />
        </div>
        <div
            style={ buiButtons}
          >
          
              <i className="fas fa-font" style={{background:'white', color:'#FC5185', padding:'10px', borderRadius:'8px'}}></i>
            
            <div
             onClick={() => setColor('white')}
              style={whitetxt}
            ></div>
            <div
             onClick={() => setColor('black')}
              style={blacktxt}
            ></div>
            <div
              onClick={() => setColor('red')}
              style={redtxt}
            ></div>
            <div
             onClick={() => setColor('blue')}
              style={bluetxt}
            ></div>
            <div
             onClick={() => setColor('green')}
              style={greentxt}
            ></div>
          </div>

          </div>

        <Slider sliderValue={sliderValue}  />
        <div style={txtcontainer}>
          


          <div
            style={bgcontainer}
          >
            <p
              style={bgcolor}
            >
              Background:
            </p>
            <div
            onClick={() => setBackground('whitebg')}
              style={whitebg}
            ></div>
            <div
            onClick={() => setBackground('blackbg')}
              style={blackbg}
            ></div>
            <div
              onClick={() => setBackground('redbg')}
              style={redbg}
            ></div>
            <div
            onClick={() => setBackground('bluebg')}
              style={bluebg}
            ></div>
            <div
            onClick={() => setBackground('greenbg')}
              style={greenbg}
            ></div>
          </div>
        </div>
      </div>
      <TextEdit color={color} background={background} slider={slider} />
    </div>
  );
};

// function EditButton(props) {
//   return (
//     <button
//       className={props.btnstyle}
//       key={props.cmd}
//       onMouseDown={evt => {
//         evt.preventDefault(); // Avoids loosing focus from the editable area
//         document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
//       }}
//     >
//       <i className={'fas fa-' + props.cmd}> </i>
//     </button>
//   );
// }
export default TextToolbar;



const toolbarStyle = {
  padding: '10px',
  fontSize: '3rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '1200px',
  border: '1px solid hotpink',
  marginBlock: '50px',
  margin: 'auto',
  backgroundColor:'#364F6B',
  color:'white'
}

const buiButtons={
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'space-evenly',
  width: '230px'
}

const txtColor= {
  fontSize: '1.8rem',
  marginRight: '5px',
  marginTop: '5px'
}

const whitetxt={
  background: 'white',
  border: 'black 1px solid',
  width: '25px',
  height: '25px',
  
}

const blacktxt={
  background: 'black',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const redtxt={
  background: 'red',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const bluetxt={
  background: 'blue',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const greentxt={
  background: 'green',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const txtcontainer ={display:'flex', marginTop:'20px'}

const bgcontainer ={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '230px'
}

const bgcolor={
  fontSize: '1.8rem',
  marginRight: '5px',
  marginTop: '5px'
}

const whitebg={
  background: 'white',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const blackbg={
  background: 'black',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const redbg={
  background: 'red',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const bluebg={
  background: 'blue',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}

const greenbg={
  background: 'green',
  border: 'black 1px solid',
  width: '25px',
  height: '25px'
}