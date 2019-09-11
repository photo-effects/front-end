import React from 'react';
import stars from './svg/stars.svg';
import summer from './svg/hellosummer.svg';

export default function GraphicsTool(props) {
   let stickers = [];

   for(let i = 0; i < 12; i++) {
      stickers.push(i % 2 === 0 ? stars : summer)
   }

   return (
      <>
         <div style={photoContainer}>
            { stickers.map((sticker, i) => (
               <img 
                  style = { photoStyle } 
                  alt = { sticker.toString() }
                  src = { sticker } 
                  key = { i }
                  onClick = { () => props.addItem(
                     <img 
                        src = { sticker }
                        alt = { sticker.toString() }
                     />
                  ) }
               />
            )) }
         </div>
      </>
   )
}

const photoContainer = {
   overflowY: 'auto',
   height: '130px'
}

const photoStyle = {
   flex: '0 0 auto',
   width: '75px',
   height: '75px',
   border: '0px solid #000',
   padding: '5px',
   marginLeft: '3px',
   borderRadius: '5px',
   background: '#7B8794',
   cursor: 'pointer'
}