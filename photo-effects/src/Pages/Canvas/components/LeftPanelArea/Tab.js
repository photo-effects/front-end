import React, { Component } from "react";
import TabContent from "./TabContent";
import photo from "./Tools/svg/icon-photo.svg";
import attach from "./Tools/svg/icon-attach.svg";
import text from "./Tools/svg/icon-text.svg";
import chevron from "./Tools/svg/icon-chevron.svg";
import paint from "./Tools/svg/icon-paint.svg";

class Tab extends Component {
  state = {
    active: false
  };

  toggleActiveTab = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div>
        <div
          style={this.state.active ? panel_tab_active : panel_tab}
          onClick={this.toggleActiveTab}
        >
          <div style={panel_tab_info}>
            <img
              style={panel_icon}
              alt={this.props.tabName}
              src={
                this.props.tabName === "Photos"
                  ? photo
                  : this.props.tabName === "Graphics"
                  ? attach
                  : this.props.tabName === "Text"
                  ? text
                  : paint
              }
            />
            {this.props.tabName}
          </div>

          <div style={panel_tab_arrow}>
            <Arrow open={this.state.active} />
          </div>
        </div>

        {this.state.active === true ? (
          <TabContent tabContent={this.props.tabContent} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

class Arrow extends Component {
  state = {
    open: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: nextProps.open
      };
    } else return null;
  }

  arrowImg = open => ({
    transform: open ? "rotate(180deg)" : "rotate(270deg)",
    transition: "transform 500ms ease-out"
  });

  render() {
    return (
      <img
        style={this.arrowImg(this.state.open)}
        src={chevron}
        alt="arrow"
        onClick={() => this.setState({ open: !this.state.open })}
      />
    );
  }
}

const panel_tab = {
  background: "#d0d0d0",
  cursor: "pointer",
  borderLeft: "5px solid #3b3f42",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "12px",
  fontWeight: "700",
  height: "45px",
  width: "100%"
};

// fix
const panel_tab_active = {
  ...panel_tab,
  background: "#eaeaea"
};

const panel_tab_info = {
  display: "flex",
  alignItems: "center"
};

const panel_icon = {
  margin: "0 20px"
};

const panel_tab_arrow = {
  height: "45px",
  width: "45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default Tab;
