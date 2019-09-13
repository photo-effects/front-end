import React, {Component} from 'react';
import axios from 'axios';

import Photo from './Photo';

import { tab_content_photos, _photo, photoImg } from './library';

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
         <div style = { tab_content_photos }>
            {this.state.isFetching === true ? 
               <>
                  <div style= { cyan }></div> 
                  <div style = { pink }></div> 
                  <div style = { yellow }></div> 
               </>
               : 
               <>
                  {this.state.photos.map(photo => {
                     return (
                        <div style = { _photo }>
                           <Photo 
                              url = { photo.src.original }
                              addItem = { this.props.addItem }
                              alt = { photo.photographer }
                              key={photo.src.small} 
                           />
                           {/* <img 
                              style = { photoImg }
                              key={photo.src.small} 
                              src={photo.src.small} 
                              alt = { photo.photographer }
                              onClick={() => this.props.addItem(
                                 <img
                                    src = { photo.src.original }
                                    alt = { photo.photographer }
                                 />
                              )}
                           /> */}
                        </div>
                     )
                  })}
               </>
            }  
         </div>
         
      )
   }
}

const photo_landing = {
   height: '80px',
   width: '100px',
   border: '0px',
   borderRadius: '5px',
   marginRight: '5px',
   opacity: '0.7'
}

const cyan = {
   ...photo_landing,
   background: '#44DDE6'
}

const pink = {
   ...photo_landing,
   background: '#FC5185'
}

const yellow = {
   ...photo_landing,
   background: '#FFDB27'
}

// import React, {Component} from 'react';
// import axios from 'axios';
// import { Spring } from 'react-spring/renderprops';

// export default class StockPhotosTool extends Component {
//    state = { 
//       photos: []
//    }

//    componentDidMount() {
//       axios
//       .get('https://api.pexels.com/v1/curated?per_page=15&page=1', {
//          headers: {
//             Authorization: '563492ad6f917000010000014867b6499ef7493dadf228acfc7c3c35' // Pexels API Key
//          }
//       })
//       .then(res => this.setState({ photos: res.data.photos }))
//       .catch(err => console.log(err));
//    }
   
//    render() {
//       return (
//          <Spring 
//             from = {{ height: 0 }} 
//             to = {{ height: 100 }}
//             config = {{ delay: 3000 }}
//          >
//             {springProps => (
//                <div style={springProps}>
//                   <div style={photoContainer}>
//                      {this.state.photos.map(photo => {
//                         return (
//                            <img 
//                               style={photoStyle} 
//                               src={photo.src.small} 
//                               key = { photo.src }
//                               alt = { photo.photographer }
//                               onClick={() => this.props.addItem(
//                                  <img
//                                     src = { photo.src.original }
//                                     alt = { photo.photographer }
//                                  />
//                               )}
//                            />
//                         )
//                      })}
//                   </div>
//                </div>
//             )}
//          </Spring>
         
//       )
//    }
// }

// const photoContainer = {
//    overflowY: 'auto',
//    height: '115px'
// }

// const photoStyle = {
//    flex: '0 0 auto',
//    width: '75px',
//    height: '75px',
//    border: '0px solid #000',
//    padding: '5px',
//    marginRight: '6px',
//    marginBottom: '6px',
//    borderRadius: '5px',
//    background: '#7B8794',
//    cursor: 'pointer',
// }