import React, { Component } from 'react';
import axios from 'axios';

import Photo from './Photo';

import { tab_content_photos } from './library';

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
         <div
            style = { tab_content_photos }
            onClick = { () => this.props.close() }
         >
            {this.state.uploads.map((upload, i) => {
               return (
                  <Photo 
                     key={upload.secure_url}
                     url = { upload.secure_url }
                     alt = { upload.title }
                     addItem = { this.props.addItem }
                     first = { i === 0 }
                     close = { this.props.close }
                  />
               )
            })}
         </div>
      )
   }
}