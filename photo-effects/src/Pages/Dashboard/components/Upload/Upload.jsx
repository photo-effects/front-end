
import React, { Component } from "react";
import './upload.css';
import Dropzone from "react-dropzone";

class Upload extends Component {


  render() {
    return (
      <Dropzone onDrop= {this.props.dropOnChange}>
  {({getRootProps, getInputProps}) => (
    <section className="uploadBox">
      <div {...getRootProps()}>
        <input {...getInputProps()} onChange={this.props.onChange} />
        <p className="dragBox">Drag 'n' drop a file here, or click to select a file!</p>
      </div>
    </section>
  )}
</Dropzone>

    );
  }
}



export default Upload;
