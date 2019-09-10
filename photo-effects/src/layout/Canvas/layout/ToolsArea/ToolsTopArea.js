import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import './ToolPanel.css';
import logo from './icons/logo2x.png';
import home from './icons/icon-arrow-circle-left.svg';
import cog from './icons/icon-cog.svg';
import download from './icons/icon-download.svg';
import edit from './icons/icon-edit.svg';

class ToolsTopArea extends Component {
   state = {
      projectName: 'Untitled Design',
      focus: false
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

   toggleInputFocus = () => {
      
   }

   render() {
      return (
         <div className="panel-toparea-container">
            <div className="panel-toparea">
               <div className="panel-options">
                  <a href="/dashboard" className="panelbutton home">
                     <img src={home} />
                  </a>
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
               <img src={edit} style={{cursor: "pointer"}} onClick={() => this.setState({focus: true})}/>
               <input
                  type="text"
                  value={this.state.projectName}
                  placeholder="Untitled Design"
                  onChange={this.handleChange}
                  autoFocus={this.state.focus ? true : false}
               />
            </div>
         </div>
      )
   }
}

export default ToolsTopArea;