import React from "react";
import Tab from "./Tab";

function Tabs(props) {
    return (
      <div>
        {props.children.map(child => {
          return (
              <Tab
                key={child.props.label}   
                tabName={child.props.label}
                tabContent={child.props.children}
              />
          );
        })}
      </div>
    );
}

export default Tabs;