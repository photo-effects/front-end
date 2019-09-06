import React from 'react';
import axios from 'axios';
import stars from './svg/stars.svg';
import summer from './svg/hellosummer.svg';

export default function GraphicsTool() {
   let stickers = [];

   return (
      <>
         <div style={photoContainer}>
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
            <img style = {photoStyle} src={stars} />
            <img style = {photoStyle} src={summer} />
         </div>
      </>
   )
}

const photoContainer = {
   overflowY: 'auto',
   height: '160px'
}

const photoStyle = {
   flex: '0 0 auto',
   width: '75px',
   height: '75px',
   border: '0px solid #000',
   padding: '5px',
   marginRight: '6px',
   marginBottom: '6px',
   borderRadius: '5px',
   background: '#7B8794',
   cursor: 'pointer',
}