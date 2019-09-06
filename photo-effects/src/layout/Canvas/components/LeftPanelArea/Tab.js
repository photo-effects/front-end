import React, {Component} from 'react';
import TabContent from './TabContent';
import arrow from './Tools/svg/arrow.svg';

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
            <div style={className} onClick={this.toggleActiveTab}><img style={arrowStyle} src={arrow} />{this.props.tabName}</div>
            {this.state.active === true ? <TabContent tabContent={this.props.tabContent} /> : undefined}
         </div>
      );
   }
}

const tabListItem = {
   display: 'flex',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#1F2933",
   color: '#F0F4F8',
}

const tabListActive = {
   display: 'flex',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#3E4C59",
   color: '#F0F4F8'
}

const arrowStyle = {
   width: "18px",
   height: "18px",
   marginRight: "5px",
}

export default Tab;