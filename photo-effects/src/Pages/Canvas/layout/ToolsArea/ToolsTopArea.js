import React, { Component } from 'react';
import logo from './icons/logo2x.png';
import home from './icons/icon-arrow-circle-left.svg';
import exit from './icons/icon-door-exit.svg';
import download from './icons/icon-download.svg';
import edit from './icons/icon-edit.svg';

class ToolsTopArea extends Component {
  state = {
    projectName: 'Untitled Design',
    focus: false
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      projectName: e.target.value
    });
  };

  render() {
    return (
      <div style={panel_toparea_container}>
        <div style={panel_toparea}>
          <div style={panel_options}>
            <a href="/dashboard" style={panelbutton_home}>
              <img src={home} alt="home" />
            </a>

            <div style={panel_logo_container}>
              <img style={plImg} src={logo} alt="logo" />
            </div>

            <div onClick={this.props.auth.logout} style={panelbutton_logout}>
              <img src={exit} alt="exit" />
            </div>

            <div style={panelbutton_save} onClick={this.props.saveImg}>
              <i className="far fa-save"></i>
            </div>

            <div style={panelbutton_download} onClick={() => this.props.handleScreenshot()}>
              <div style={dlDiv}>
                <img src={download} alt="download" />
                <span style={dlSpan}></span>
              </div>
            </div>
          </div>

          {/* <div style={{ fontSize: '40px', cursor: 'pointer' }}>
            <h1>Save</h1>
            <i className="far fa-save" onClick={this.props.saveImg}></i>
          </div> */}
        </div>

        <div style={panel_projectname}>
          <img
            src={edit}
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ focus: true })}
          />
          <input
            style={pnInput}
            type="text"
            value={this.state.projectName}
            placeholder="Untitled Design"
            onChange={this.handleChange}
            autoFocus={this.state.focus ? true : false}
          />
        </div>
      </div>
    );
  }
}

const clickStyle = {
  padding: "40px"
};

const panel_toparea_container = {
  // background: '#d0d0d0'
  height: '155px',
  fontSize: '10px',
  fontWeight: '700'
};

const panel_toparea = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#f4f4f4',
  paddingTop: '28px'
};

const panel_options = {
  display: 'flex',
  alignItems: 'center'
};

const panelbutton = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
};

// hover
const panelbutton_home = {
  ...panelbutton,
  width: '92px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  borderRadius: '23px 0px 0px 23px',
  opacity: '1',
  paddingLeft: '15px'
};

const panel_logo_container = {
  width: '90px',
  height: '90px',
  background: '#f4f4f4 0% 0% no-repeat padding-box',
  border: '6px solid #3b3f42',
  borderRadius: '50%',
  opacity: '1',
  padding: '12px',
  marginLeft: '-40px',
  zIndex: '1'
};

const plImg = {
  width: '100%'
};

// hover
const panelbutton_logout = {
  ...panelbutton,
  width: '60px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  opacity: '1',
  paddingLeft: '60px',
  paddingRight: '30px',
  marginLeft: '-45px',
  border: '1px solid green'
};

const panelbutton_save = {
  ...panelbutton,
  width: '50px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  opacity: '1',
  border: '1px solid blue',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '23px',
  cursor: 'pointer',
  color: '#EAEAEA'
};

// hover
const panelbutton_download = {
  ...panelbutton,
  width: '50px',
  height: '46px',
  background: '#3B3F42 0% 0% no-repeat padding-box',
  borderRadius: '0px 23px 23px 0px',
  opacity: '1',
  paddingLeft: '10px',
  border: '1px solid red'
};

const dlDiv = {
  display: 'flex',
  alignItems: 'center'
};

const dlSpan = {
  paddingLeft: '10px'
};

const panel_projectname = {
  float: 'right',
  marginRight: '40px',
  marginTop: '0px',
  fontWeight: '700'
};

// focus
const pnInput = {
  width: '120px',
  border: '1px dashed #d0d0d0',
  background: '#eaeaea',
  marginLeft: '5px',
  padding: '5px'
};

export default ToolsTopArea;