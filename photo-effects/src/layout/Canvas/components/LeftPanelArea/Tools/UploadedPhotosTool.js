import React from 'react';

export default function UploadedPhotosTool() {
   return (
      <>
         <ol>
            <li style={photoContainer}>P</li>
            <li style={photoContainer}>P</li>
            <li style={photoContainer}>P</li>
         </ol>
      </>
   )
}

const photoContainer = {
   width: '50px',
   height: '50px',
   border: '1px solid #000',
   padding: '8px'
}