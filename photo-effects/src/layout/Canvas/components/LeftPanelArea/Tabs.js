import React from "react";
import Tab from "./Tab";

function Tabs(props) {
    return (
      <div style={tabContainer}>
        <div style={tabList}>
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
      </div>
    );
}

const tabContainer = {
   border: '0px solid #000',
   backgroundColor: '#323F4B'
}

const tabList = {
   
}

export default Tabs;
