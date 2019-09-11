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
         <Spring 
            from = {{ height: 0 }} 
            to = {{ height: 100 }}
            config = {{ delay: 3000 }}
         >
            {springProps => (
               <div style={springProps}>
                  <div style={photoContainer}>
                     {this.state.photos.map(photo => {
                        return (
                           <img 
                              style={photoStyle} 
                              src={photo.src.small} 
                              key = { photo.src }
                              alt = { photo.photographer }
                              onClick={() => this.props.addItem(
                                 <img
                                    src = { photo.src.original }
                                    alt = { photo.photographer }
                                 />
                              )}
                           />
                        )
                     })}
                  </div>
               </div>
            )}
         </Spring>
         
      )
   }
}

const photoContainer = {
   overflowY: 'auto',
   height: '115px'
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