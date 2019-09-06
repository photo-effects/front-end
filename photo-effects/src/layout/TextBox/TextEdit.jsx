import React, { useState } from 'react';
import TextBox from './TextBox';
import TextToolbar from'./TextToolbar'

const TextEdit = () => {

    const [input, setInput] = useState('');


    const handleInputChanges = e => {
      setInput(e.target.value);
    }

    console.log(input)
  
  return (  
    <div style={{border:'1px solid black'}} >
     <form>
      <input className={ bold ? '.red': ''}
      style={{fontSize:'4rem', padding:'10px'}}
      type='text'
      placeholder='ENTER TEXT'
      value= {input}
      onChange={handleInputChanges}
      /> 
     </form>
     <TextToolbar />
     <TextBox input={input} />
    </div>
  )
}

export default TextEdit
