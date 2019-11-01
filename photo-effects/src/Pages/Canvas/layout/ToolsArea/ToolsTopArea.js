import React, { Component } from "react";
import logo from "./icons/logo2x.png";
import home from "./icons/icon-arrow-circle-left.svg";
import exit from "./icons/icon-door-exit.svg";
import download from "./icons/icon-download.svg";
import edit from "./icons/icon-edit.svg";

class ToolsTopArea extends Component {
  state = {
    focus: false
  };

  render() {
    const saving = {
      textAlign: "center",
      width: "100%",
      fontSize: "3.0rem",
      margin: "10px 0 20px 0"
    };

    const hide = {
      display: "none"
    };

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

            <div
              style={panelbutton_download}
              onClick={() => this.props.handleScreenshot()}
            >
              <div style={dlDiv}>
                <img src={download} alt="download" />
                <span style={dlSpan}></span>
              </div>
            </div>
          </div>
        </div>

        <div style={this.props.saving ? saving : hide}>
          {this.props.saving ? "Saving Project..." : "not save"}
        </div>

        <div style={panel_projectname}>
          <img
            src={edit}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ focus: true })}
          />
          <input
            style={pnInput}
            type="text"
            value={this.props.projectTitle}
            placeholder={
              this.props.image && this.props.image.p_name
                ? this.props.image.p_name
                : "Untitled Design"
            }
            onChange={this.props.handleChange}
            autoFocus={this.state.focus ? true : false}
          />
        </div>
      </div>
    );
  }
}

const panel_toparea_container = {
  // background: '#d0d0d0'
  height: "155px",
  fontSize: "10px",
  fontWeight: "700"
};

const panel_toparea = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#f4f4f4",
  paddingTop: "28px"
};

const panel_options = {
  display: "flex",
  alignItems: "center"
};

const panelbutton = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
};

// hover
const panelbutton_home = {
  ...panelbutton,
  width: "92px",
  height: "46px",
  background: "#3B3F42 0% 0% no-repeat padding-box",
  borderRadius: "23px 0px 0px 23px",
  opacity: "1",
  paddingLeft: "15px"
};

const panel_logo_container = {
  width: "90px",
  height: "90px",
  background: "#f4f4f4 0% 0% no-repeat padding-box",
  border: "6px solid #3b3f42",
  borderRadius: "50%",
  opacity: "1",
  padding: "12px",
  marginLeft: "-40px",
  zIndex: "1"
};

const plImg = {
  width: "100%"
};

// hover
const panelbutton_logout = {
  ...panelbutton,
  width: "60px",
  height: "46px",
  background: "#3B3F42 0% 0% no-repeat padding-box",
  opacity: "1",
  paddingLeft: "60px",
  paddingRight: "30px",
  marginLeft: "-45px",
  border: "0px solid green"
};

const panelbutton_save = {
  ...panelbutton,
  width: "50px",
  height: "46px",
  background: "#3B3F42 0% 0% no-repeat padding-box",
  opacity: "1",
  border: "0px solid blue",
  display: "flex",
  justifyContent: "center",
  fontSize: "23px",
  cursor: "pointer",
  color: "#EAEAEA"
};

// hover
const panelbutton_download = {
  ...panelbutton,
  width: "50px",
  height: "46px",
  background: "#3B3F42 0% 0% no-repeat padding-box",
  borderRadius: "0px 23px 23px 0px",
  opacity: "1",
  paddingLeft: "10px",
  border: "0px solid red"
};

const dlDiv = {
  display: "flex",
  alignItems: "center"
};

const dlSpan = {
  paddingLeft: "10px"
};

const panel_projectname = {
  float: "right",
  marginRight: "40px",
  marginTop: "0px",
  fontWeight: "700"
};

// focus
const pnInput = {
  width: "120px",
  border: "1px dashed #d0d0d0",
  background: "#eaeaea",
  marginLeft: "5px",
  padding: "5px"
};

export default ToolsTopArea;
