import React from 'react';
import add from '../../../layout/ToolsArea/icons/icon-add.svg';

export default function TextEditorTool(props) {
   return (
      <ol>

         <li className="text-add"><img alt={""} src={add} />Add text</li>

         {/* <li style={textS1}>Add heading</li>
         <li style={textS2}>Add subheading</li> */}
         <li 
            style={textS3}
            onClick = { () => props.addText() }
         >Add text</li>

      </ol>
   )
}