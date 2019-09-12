import React from 'react';
import add from '../../../layout/ToolsArea/icons/icon-add.svg';

import TextEdit from './TextBox/TextEdit';

export default function TextEditorTool(props) {
   return (
      <ol>


         <li className="text-add"><img alt={""} src={add} />Add text</li>
         <li
            onClick = { () => props.addItem(<TextEdit />) }

         >Add text</li>

      </ol>
   )
}
