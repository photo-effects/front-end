
import React, { Component } from "react";
import './upload.css';
import Dropzone from "react-dropzone";

class Upload extends Component {


  render() {
    return (
      <Dropzone onDrop= {this.props.dropOnChange}>
  {({getRootProps, getInputProps}) => (
    <section className="hi">
      <div {...getRootProps()}>
        <input {...getInputProps()} onChange={this.props.onChange} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>
  
      //   <div className="uploadBox">
      //   <input className="inputFile" type='file' name="file" id='file' onChange={this.props.onChange} key={this.props.inputKey} />
      //   <label for="file"> Choose a file</label>
      // </div>
    );
  }
}



export default Upload;
