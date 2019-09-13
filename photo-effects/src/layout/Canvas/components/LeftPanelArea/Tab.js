import React, {Component} from 'react';
import TabContent from './TabContent';
import photo from '../../layout/ToolsArea/icons/icon-photo.svg';
import graphic from '../../layout/ToolsArea/icons/icon-attach.svg';
import text from '../../layout/ToolsArea/icons/icon-text.svg';
import layers from '../../layout/ToolsArea/icons/icon-layers.svg';
import chevron from '../../layout/ToolsArea/icons/icon-chevron.svg';

class Tab extends Component {
   state = {
      active: false
   }

   toggleActiveTab = () => {
      this.setState({ active: !this.state.active})
   }

   render() {
      return (
         <div>
            <div 
               style = { this.state.active ? panel_tab_active : panel_tab } onClick={this.toggleActiveTab}>
               <div style = { panel_tab_info }>
                  <img 
                     style = { panel_icon } 
                     alt = { this.props.tabName }
                     src = {
                        this.props.tabName==="Photos" ? 
                           photo 
                        : (
                           this.props.tabName==="Graphics" ? 
                              graphic 
                           : (this.props.tabName==="Text" ? 
                              text 
                           : 
                              layers
                           )
                        )
                     }
                  />
                  {this.props.tabName}
               </div>
               <div style = { panel_tab_arrow }>
                  <Arrow />
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

class Arrow extends Component {
   state = {
      open: false
   }

   arrowImg = open => ({
      transform: open ? 'rotate(180deg)' : 'rotate(270deg)',
      transition: 'transform 500ms ease-out'
   })

   render() {
      return (
         <img 
            style = { this.arrowImg(this.state.open) } 
            src = { chevron } 
            alt="arrow"
            onClick = { () => this.setState({ open: !this.state.open }) }
         />
      )
   }
}

const panel_tab = {
   background: '#d0d0d0',
   cursor: 'pointer',
   borderLeft: '5px solid #3b3f42',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   fontSize: '12px',
   fontWeight: '700',
   height: '45px',
   width: '100%',
}

// fix
const panel_tab_active = {
   ...panel_tab,
   background: '#eaeaea'
}

const panel_tab_info = {
   display: 'flex',
   alignItems: 'center',
}

const panel_icon = {
   margin: '0 20px'
}

const panel_tab_arrow = {
   height: '45px',
   width: '45px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}

export default Tab;

// import React, {Component} from 'react';
// import TabContent from './TabContent';
// import arrow from './Tools/svg/arrow.svg';

// class Tab extends Component {
//    state = {
//       active: true
//    }

//    toggleActiveTab = () => {
//       this.setState({ active: !this.state.active})
//    }

//    render() {
//       let className = tabListItem;

//       if (this.state.active === true) {
//          className = tabListActive;
//       }

//       return (
//          <div>
//             <div style={className} onClick={this.toggleActiveTab}><img style={arrowStyle} src={arrow} alt="arrow" />{this.props.tabName}</div>
//             {this.state.active === true ? <TabContent tabContent={this.props.tabContent} /> : undefined}
//          </div>
//       );
//    }
// }

// const tabListItem = {
//    display: 'flex',
//    // borderTop: '1px solid #F0F4F8',
//    // borderBottom: '1px solid #F0F4F8',
//    padding: '10px',
//    cursor: 'pointer',
//    width: '100%',
//    backgroundColor: "#1F2933",
//    color: '#F0F4F8',
   
// }

// const tabListActive = {
//    display: 'flex',
//    // borderTop: '1px solid #F0F4F8',
//    // borderBottom: '1px solid #F0F4F8',
//    padding: '10px',
//    cursor: 'pointer',
//    width: '100%',
//    backgroundColor: "#3E4C59",
//    color: '#F0F4F8'
// }

// const arrowStyle = {
//    width: "18px",
//    height: "18px",
//    marginRight: "5px",
// }

// export default Tab;