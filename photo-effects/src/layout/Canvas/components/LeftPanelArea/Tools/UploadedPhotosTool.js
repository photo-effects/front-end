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
         <div className="tab-content-photos">
            {this.state.uploads.map(upload => {
               return (
                  <div className="photo">
                     <img className="" src={upload.secure_url} onClick={() => console.log(upload.secure_url)}/>
                  </div>
               )
            })}
         </div>
      )
   }
}