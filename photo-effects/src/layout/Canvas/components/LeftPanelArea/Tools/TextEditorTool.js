import React from 'react';

import TextEdit from './TextBox/TextEdit';

export default function TextEditorTool(props) {
   return (
      <ol>
         {/* <li style={textS1}>Add heading</li>
         <li style={textS2}>Add subheading</li> */}
         <li 
            style={text}
            onClick = { () => props.addItem(<TextEdit />) }
         >Add text</li>
      </ol>
   )
}

const text = {
   width: '100%',
   border: '0px solid #000',
   padding: '10px',
   marginBottom: '5px',
   borderRadius: '5px',
   background: '#7B8794',
   textAlign: 'center',
   fontSize: '12px',
   fontWeight: '200'
}