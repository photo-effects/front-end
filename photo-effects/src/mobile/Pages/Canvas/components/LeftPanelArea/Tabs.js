import React from "react";
import Tab from "./Tab";

function Tabs(props) {
  return (
    props.children.map(child => {
      return (
          <Tab
            key={child.props.label}   
            tabName={child.props.label}
            tabContent={child.props.children}
          />
      );
    })
  )
}

export default Tabs;