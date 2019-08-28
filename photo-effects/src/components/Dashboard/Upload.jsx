import React, { Component } from "react";
// import Dropzone from "react-dropzone";

class Upload extends Component {


  render() {
    return (
        <div>
        <input type='file' onChange={this.props.onChange} />
      </div>
    );
  }
}



export default Upload;
