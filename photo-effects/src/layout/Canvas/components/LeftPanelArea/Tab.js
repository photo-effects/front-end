import React, {Component} from 'react';
import TabContent from './TabContent';

class Tab extends Component {
   state = {
      active: true
   }

   toggleActiveTab = () => {
      this.setState({ active: !this.state.active})
   }

   render() {
      let className = tabListItem;

      if (this.state.active === true) {
         className = tabListActive;
      }

      return (
         <div>
            <div style={className} onClick={this.toggleActiveTab}>{this.props.tabName}</div>
            {this.state.active === true ? <TabContent tabContent={this.props.tabContent} /> : undefined}
         </div>
      );
   }
}

const tabListItem = {
   display: 'inline-block',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#BDC3C7",
}

const tabListActive = {
   display: 'inline-block',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#98A0A5",
}

export default Tab;