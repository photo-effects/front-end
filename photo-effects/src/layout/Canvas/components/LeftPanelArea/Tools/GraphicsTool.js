import React, {Component} from 'react';
import axios from 'axios';
import stars from './svg/stars.svg';
import summer from './svg/hellosummer.svg';

export default class GraphicsTool extends Component {
   state = {
      stickers: []
   } 

   componentDidMount() {
      axios
      .get('https://api.mojilala.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC')
      .then(res => this.setState({ stickers: res.data.data }))
      .catch(err => console.log(err));
   }

   render() {
      console.log(this.state.stickers)
      return (
         <div className="tab-content-photos">
            {this.state.stickers.map(sticker => {
               return (
                  <div className="photo">
                     <img className="" src={sticker.images.fixed_height_small.url} />
                  </div>
               )
            })}
         </div>
      )
   }
   
}