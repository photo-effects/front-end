import React, {Component} from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

export default class StockPhotosTool extends Component {
   state = { 
      photos: []
   }

   componentDidMount() {
      axios
      .get('https://api.pexels.com/v1/curated?per_page=15&page=1', {
         headers: {
            Authorization: '563492ad6f917000010000014867b6499ef7493dadf228acfc7c3c35' // Pexels API Key
         }
      })
      .then(res => this.setState({ photos: res.data.photos }))
      .catch(err => console.log(err));
   }
   
   render() {
      return (
         <div className="tab-content-photos">
            {this.state.photos.map(photo => {
               return (
                  <img className="photo" src={photo.src.small} onClick={() => console.log(photo.src.original)}/>
               )
            })}
         </div>
         
      )
   }
}