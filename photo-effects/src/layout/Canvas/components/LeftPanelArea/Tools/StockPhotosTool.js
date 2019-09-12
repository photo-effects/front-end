import React, {Component} from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

export default class StockPhotosTool extends Component {
   state = { 
      photos: [],
      isFetching: true
   }

   componentDidMount() {
      setTimeout(() => {
         axios
            .get('https://api.pexels.com/v1/curated?per_page=15&page=1', {
               headers: {
                  Authorization: '563492ad6f917000010000014867b6499ef7493dadf228acfc7c3c35' // Pexels API Key
               }
            })
            .then(res => this.setState({ photos: res.data.photos, isFetching: false }))
            .catch(err => console.log(err));
       }, 100);
   }
   
   render() {
      return (

         <div className="tab-content-photos">
            {this.state.isFetching === true ? 
               <>
                  <div className="photo-loading cyan"></div> 
                  <div className="photo-loading pink"></div> 
                  <div className="photo-loading yellow"></div> 
               </>
               : 
               <>
                  {this.state.photos.map(photo => {
                     return (
                        <div className="photo">
                           <img className="" alt = { photo.photographer } key={photo.src.small} src={photo.src.small} onClick={() => this.props.addItem(
                                 <img
                                    src = { photo.src.original }
                                    alt = { photo.photographer }
                                 />
                              )}/>
                        </div>
                     )
                  })}
               </>
            }  
         </div>

         
      )
   }
}