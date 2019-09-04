import React, {Component} from 'react';

export default class Layers extends Component {
   state = {
      layers: []
   }

   moveLayerDown = position => {
      console.log(position)
   }

   moveLayerUp = position => {
      console.log(position)
   }

   render () {

      this.state.layers.push("Layer 1")
      this.state.layers.push("Layer 2")
      this.state.layers.push("Layer 3")
      this.state.layers.push("Layer 4")

      return (
         <ol>
            {this.state.layers.map(layer => {
               console.log(layer)
               return (
                  <li key={layer} style={layerStyle}>{layer} 
                     <button onClick={this.moveLayerUp()}>Up</button>
                     <button onClick={this.moveLayerDown()}>Down</button> 
                  </li>
                  
               )
            })}
            {/* <li style={layerStyle}>Layer #1</li>
            <li style={layerStyle}>Layer #2</li>
            <li style={layerStyle}>Layer #3</li>
            <li style={layerStyle}>Layer #4</li> */}
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