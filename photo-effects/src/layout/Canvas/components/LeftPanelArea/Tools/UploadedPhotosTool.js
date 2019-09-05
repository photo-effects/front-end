import React, { Component } from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

export default class UploadedPhotosTool extends Component {
   state = { 
      uploads: []
   }

   componentDidMount() {
      axios
      .get('https://photo-effects-backend.herokuapp.com/api/projects')
      .then(res => this.setState({ uploads: res.data }))
      .catch(err => console.log(err));
   }
   
   render() {
      return (
         <div style={photoContainer}>
            {this.state.uploads.map(upload => {
               return (
                  <img style={photoStyle} src={upload.secure_url} onClick={() => console.log(upload.secure_url)}/>
               )
            })}
         </div>
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