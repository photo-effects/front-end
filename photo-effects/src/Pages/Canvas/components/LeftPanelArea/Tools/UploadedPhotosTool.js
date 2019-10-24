import React, { Component } from 'react';
import axios from 'axios';

import Photo from './Photo';

import { tab_content_photos } from './library';

export default class UploadedPhotosTool extends Component {
  state = {
    uploads: []
  };

  componentDidMount() {
    axios
      .get('https://photo-effects-backend-stage-1.herokuapp.com/canvas')
      .then(res => this.setState({ uploads: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={tab_content_photos}>
        {this.state.uploads.map(upload => {
          return (
            <Photo
              key={upload.secure_url}
              url={upload.secure_url}
              alt={upload.title}
              addItem={this.props.addItem}
            />
          );
        })}
      </div>
    );
  }
}
