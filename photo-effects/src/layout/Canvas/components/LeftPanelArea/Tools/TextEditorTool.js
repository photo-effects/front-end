import React from 'react';
import add from '../../../layout/ToolsArea/icons/icon-add.svg';

export default function TextEditorTool(props) {
   return (
      <ol>

         <li className="text-add"><img alt={""} src={add} />Add text</li>
         <li
            onClick = { () => props.addText() }
         >Add text</li>

      </ol>
   )
}


const textS1 = {
   width: '100%',
   border: '0px solid #000',
   padding: '10px',
   marginBottom: '5px',
   borderRadius: '5px',
   background: '#7B8794',
   textAlign: 'center',
   fontSize: '20px',
   fontWeight: '700'
}

const textS2 = {
   width: '100%',
   border: '0px solid #000',
   padding: '10px',
   marginBottom: '5px',
   borderRadius: '5px',
   background: '#7B8794',
   textAlign: 'center',
   fontSize: '16px',
   fontWeight: '400'
}

const textS3 = {
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



