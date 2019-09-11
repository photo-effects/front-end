import React from 'react';

export default function TextEditorTool() {
   return (
      <ol>
         <li style={textS1}>Add heading</li>
         <li style={textS2}>Add subheading</li>
         <li style={textS3}>Add text</li>
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


