import React, {Component} from 'react';
import axios from 'axios';

import Photo from './Photo';

import { tab_content_photos, _photo } from './library';

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
      return (
         <div style = { container }>
            <div 
               style = { tab_content_photos }
               onClick = { () => this.props.close() }
            >
               {this.state.stickers.map((sticker, i) => {
                  return (
                     <Photo 
                        addItem = { this.props.addItem }
                        url = { sticker.images.fixed_height_small.url }
                        alt = { sticker.id }
                        key = { sticker.id }
                        first = { i === 0 }
                     />
                  )
               })}
            </div>
         </div>
      )
   }
}

const container = {
   height: 'calc(100% - 45px)',
   display: 'flex',
   alignItems: 'center',
}