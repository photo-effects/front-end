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
   // borderTop: '1px solid #F0F4F8',
   // borderBottom: '1px solid #F0F4F8',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#1F2933",
   color: '#F0F4F8',
}

const tabListActive = {
   display: 'inline-block',
   // borderTop: '1px solid #F0F4F8',
   // borderBottom: '1px solid #F0F4F8',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#3E4C59",
   color: '#F0F4F8'
}

export default Tab;