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
                  <div className="photo" key={upload.secure_url}>
                     <img className="" alt = { upload.title }  src={upload.secure_url} onClick={() => this.props.addItem(
                                 <img
                                    src = { upload.secure_url }
                                    alt = { upload.title }
                                 />
                              )}/>

                  </div>
               )
            })}
         </div>
      )
   }
}