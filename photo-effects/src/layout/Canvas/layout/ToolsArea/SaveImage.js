import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import './ToolPanel.css';
import logo from './icons/logo2x.png';
import home from './icons/icon-arrow-circle-left.svg';
import cog from './icons/icon-cog.svg';
import download from './icons/icon-download.svg';
import edit from './icons/icon-edit.svg';

class SaveImage extends Component {
   state = {
      projectName: 'Untitled Design'
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
         <div className="panel-container">
            <div className="panel-toparea">
               <div className="panel-options">
                  <div className="panelbutton home">
                     <img src={home} />
                  </div>
                  <div className="panel-logo-container">
                     <img src={logo} />
                  </div>
                  <div className="panelbutton settings">
                     <img src={cog} />
                  </div>
                  <div className="panelbutton download">
                     <div onClick={this.handleScreenshot}>
                        <img src={download} />
                        <span>Download</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="panel-projectname">
               <img src={edit} />
               <input
                  type="text"
                  value={this.state.projectName}
                  placeholder="Untitled Design"
                  onChange={this.handleChange}
               />
            </div>
         </div>
      )
   }
}

export default SaveImage;