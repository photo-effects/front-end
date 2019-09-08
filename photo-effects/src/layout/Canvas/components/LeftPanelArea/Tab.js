import React, {Component} from 'react';
import TabContent from './TabContent';
import arrow from './Tools/svg/arrow.svg';
import photo from '../../layout/ToolsArea/icons/icon-photo.svg';
import graphic from '../../layout/ToolsArea/icons/icon-attach.svg';
import text from '../../layout/ToolsArea/icons/icon-text.svg';
import layers from '../../layout/ToolsArea/icons/icon-layers.svg';
import chevron from '../../layout/ToolsArea/icons/icon-chevron.svg';


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
            <div className={this.state.active ? "panel-tab panel-tab-active" : "panel-tab"} onClick={this.toggleActiveTab}>
               <div className="panel-tab-info">
                  <img className="panel-icon" src=
                     {
                        this.props.tabName==="Photos" ? photo : (this.props.tabName==="Graphics" ? graphic : (this.props.tabName==="Text" ? text : 
                        layers))
                     }
                  />
                  {this.props.tabName}
               </div>
               <div className="panel-tab-arrow">
                  <img src={chevron} />
               </div>
            </div>

            {this.state.active === true 
               ? <TabContent tabContent={this.props.tabContent} /> 
               : undefined
            }
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

export default Tab;