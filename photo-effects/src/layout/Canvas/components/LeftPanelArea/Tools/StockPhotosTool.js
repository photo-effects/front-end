import React from 'react';
import axios from 'axios';

export default function StockPhotosTool() {
   let photos = [];

   axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

      console.log(photos)

   return (
      <>
         <ol>
            <li>Stock Photo Tool #1</li>
            <li>Stock Photo Tool #2</li>
            <li>Stock Photo Tool #3</li>
         </ol>
      </>
   )
}