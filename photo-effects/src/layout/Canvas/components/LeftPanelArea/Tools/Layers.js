import React, {Component} from 'react';

export default class Layers extends Component {
   render () {
      return (
         <ol>
            <li style={layerStyle}>Layer #1</li>
            <li style={layerStyle}>Layer #2</li>
            <li style={layerStyle}>Layer #3</li>
         </ol>
      )
   }
}

const layerStyle = {
   width: '100%',
   border: '0px solid #000',
   padding: '15px',
   marginBottom: '5px',
   borderRadius: '5px',
   background: '#7B8794',
   fontSize: '14px',
   fontWeight: '400'
}