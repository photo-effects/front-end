import React, { Component } from "react";
import Tab from "./Tab";

function Tabs(props) {
    return (
      <div style={tabContainer}>
        <div style={tabList}>
<<<<<<< HEAD
          {props.children.map(child => {
=======
          {this.props.children.map((child, i) => {

            const tabContent = child.props.children;
            
>>>>>>> master
            return (
              <React.Fragment
                key = { i }
              >
                 <Tab
                   key={child.props.label}   
                   tabName={child.props.label}
                   tabContent={child.props.children}
                 />
<<<<<<< HEAD
              </>
=======

                 {child.props.label === this.state.activeTab ? tabContent : undefined}
              </React.Fragment>
>>>>>>> master
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
