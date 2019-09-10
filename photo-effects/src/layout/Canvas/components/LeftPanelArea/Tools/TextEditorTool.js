import React from 'react';
import add from '../../../layout/ToolsArea/icons/icon-add.svg';

export default function TextEditorTool() {
   return (
      <ol>
         <li className="text-add"><img alt={""} src={add} />Add text</li>
      </ol>
   )
}