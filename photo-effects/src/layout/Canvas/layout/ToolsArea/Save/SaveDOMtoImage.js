import React, { Component } from 'react';
import domtoimage from 'dom-to-image';

class SaveDOMtoImage extends Component {
   state = {
      projectName: 'photoeffects-image'
   }

   handleScreenshot = () => {
      domtoimage.toJpeg(document.getElementById('canvasTarget'), { 
         quality: 1.0,
         filter: node => node.tagName !== 'a'
    })
        .then(dataUrl => {
            var link = document.createElement('a');
            link.download = this.state.projectName + '.jpeg';
            link.href = dataUrl;
            link.click();
        });
   }

   handleChange = e => {
      this.setState({
        ...this.state,
        projectName: e.target.value
      });
    };

   render() {
      return (
         <>
            <button onClick={this.handleScreenshot}>Save Image</button>
            <input
               type="text"
               value={this.state.projectName}
               placeholder="Input Text"
               onChange={this.handleChange}
            />
         </>
      )
   }
}

export default SaveDOMtoImage;