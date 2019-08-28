import React from 'react';

export default function GraphicsTool() {
   return (
      <>
         <ol>
            <li style ={graphicContainer}>G</li>
            <li style ={graphicContainer}>G</li>
            <li style ={graphicContainer}>G</li>
         </ol>
      </>
   )
}

const graphicContainer = {
   width: '50px',
   height: '50px',
   border: '1px solid #000',
   padding: '8px'
}