import React, {Component} from 'react';

export default class Layers extends Component {
   state = {
      layers: []
   }

   render () {

      this.state.layers.push("Layer 1")
      this.state.layers.push("Layer 2")
      this.state.layers.push("Layer 3")
      this.state.layers.push("Layer 4")

      return (
         <ol>
            {this.state.layers.map(layer => {
               return (
                  <li key={layer} className="panel-layer">{layer}</li>
               )
            })}
         </ol>
      )
   }
}