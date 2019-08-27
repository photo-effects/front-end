import React, { Component } from "react";
import Tab from "./Tab";

class Tabs extends Component {
   state = {
      activeTab: this.props.children[0].props.label
   }

  toggleTab = newTab => {
    this.setState({ activeTab: newTab });
  };

  render() {
    return (
      <div style={tabContainer}>
        <div style={tabList}>
          {this.props.children.map(child => {

            const tabContent = child.props.children;
            
            return (
              <>
                 <Tab
                   activeTab={this.state.activeTab}
                   key={child.props.label}   
                   label={child.props.label}
                   toggleTab={this.toggleTab}
                 />


                 {child.props.label === this.state.activeTab ? tabContent : undefined}
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

const tabContainer = {
   maxWidth: '250px',
   height: '500px',
   border: '1px solid #000'
}

const tabList = {
   
}

export default Tabs;
