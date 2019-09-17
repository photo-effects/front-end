import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import logo from './icons/logo2x.png';
import home from './icons/icon-arrow-circle-left.svg';
import exit from './icons/icon-door-exit.svg';
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

   render() {
      return (
         <div style = { panel_toparea_container }>
            <div style = { panel_toparea }>
               <div style = { panel_options }>
                  <a href="/dashboard" style = { panelbutton_home }>
                     <img 
                        src={home}
                     />
                  </a>
                  <div style = { panel_logo_container }>
                     <img style = { plImg } src={logo} />
                  </div>
                  <div style = { panelbutton_settings }>
                     <img src={exit} />
                  </div>
                  <div style = { panelbutton_download }>
                     <div 
                     onClick={this.handleScreenshot}
                     style = { dlDiv }
                     >
                        <img src={download} />
                        <span style = { dlSpan }>Download</span>
                     </div>
                  </div>
               </div>
            </div>

            <div style = { panel_projectname }>
               <img src={edit} style={{cursor: "pointer"}} onClick={() => this.setState({focus: true})}/>
               <input
                  style = { pnInput }
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

const panel_toparea_container = {
  // background: '#d0d0d0'
  height: '155px',
  fontSize: '10px',
  fontWeight: '700'
}

const panel_toparea = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#f4f4f4',
  paddingTop: '28px',
}

const panel_options = {
  display: 'flex',
  alignItems: 'center',
}

const panelbutton = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}

// hover
const panelbutton_home = {
  ...panelbutton,
  width: '92px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  borderRadius: '23px 0px 0px 23px',
  opacity: '1',
  paddingLeft: '15px',
}

const panel_logo_container = {
  width: '90px',
  height: '90px',
  background: '#f4f4f4 0% 0% no-repeat padding-box',
  border: '6px solid #3b3f42',
  borderRadius: '50%',
  opacity: '1',
  padding: '12px',
  marginLeft: '-45px',
  zIndex: '1',
}

const plImg = {
  width: '100%'
}

// hover
const panelbutton_settings = {
  ...panelbutton,
  width: '92px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  opacity: '1',
  paddingLeft: '60px',
  marginLeft: '-45px',
}

// hover
const panelbutton_download = {
  ...panelbutton,
  width: '108px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  borderRadius: '0px 23px 23px 0px',
  opacity: '1',
  paddingLeft: '16px',
}

const dlDiv = {
  display: 'flex',
  alignItems: 'center',
}

const dlSpan = {
  paddingLeft: '10px'
}

const panel_projectname = {
  float: 'right',
  marginRight: '40px',
  marginTop: '0px',
  fontWeight: '700',
}

// focus
const pnInput = {
  width: '120px',
  border: '1px dashed #d0d0d0',
  background: '#eaeaea',
  marginLeft: '5px',
  padding: '5px',
}

export default ToolsTopArea;