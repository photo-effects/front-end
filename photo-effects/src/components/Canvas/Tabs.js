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
      <div className="tab-container">

        <ol className="tab-list">
          {this.props.children.map(child => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={child.props.label}   
                label={child.props.label}
                toggleTab={this.toggleTab}
              />
            );
          })}
        </ol>

        <div className="tab-content">
          {this.props.children.map(child => {
            if (child.props.label === this.state.activeTab) {
               return child.props.children;
            } else {
               return;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
