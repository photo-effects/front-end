import React from 'react';
import add from '../../../layout/ToolsArea/icons/icon-add.svg';

import TextEdit from './TextBox/TextEdit';

export default function TextEditorTool(props) {
   return (
      <ol>
         <li 
            style = { text_add } 
            onClick = { () => props.addItem(<TextEdit />) }
         >
            <img style = { taImg } alt={""} src={add} />
            Add text
         </li>
      </ol>
   )
}

const text_add = {
   width: '100%',
   height: '25px',
   background: '#44DDE6 0% 0% no-repeat padding-box',
   borderRadius: '13px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   font: 'Bold 12px/15px Helvetica Neue',
   cursor: 'pointer',
}

const taImg = {
   marginRight: '10px'
}