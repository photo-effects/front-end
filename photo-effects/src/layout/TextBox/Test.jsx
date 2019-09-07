import React from 'react'
import TextEdit from './TextEdit';
import Textbox from './TextBox';
import TextToolbar from './TextToolbar';
import './textBox.css';

const Test = () => {
  return (
    <div className="container"  >
      <TextToolbar/>
      <TextEdit/>
      
    </div>
  )
}

export default Test