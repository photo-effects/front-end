import React from 'react';
import axios from 'axios';

export default function GraphicsTool() {
   let stickers = [];
   return (
      <>
         <ol>
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