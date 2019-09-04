import React, { Component } from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

export default class UploadedPhotosTool extends Component {
   state = { 
      uploads: []
   }

   componentDidMount() {
      axios
      .get('https://photo-effects-backend-stage-1.herokuapp.com/api/projects')
      .then(res => this.setState({ uploads: res.data }))
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
                     {this.state.uploads.map(upload => {
                        return (
                           <img style={photoStyle} src={upload.secure_url} />
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
   height: '130px'
}

const photoStyle = {
   flex: '0 0 auto',
   width: '75px',
   height: '75px',
   border: '0px solid #000',
   padding: '5px',
   marginLeft: '3px',
   borderRadius: '5px',
   background: '#7B8794',
}