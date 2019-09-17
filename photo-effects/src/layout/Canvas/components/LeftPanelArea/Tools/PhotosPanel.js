import React, {Component} from 'react';
import UploadedPhotosTool from './UploadedPhotosTool';
import StockPhotosTool from './StockPhotosTool';

class PhotosPanel extends Component {
   state = {
      photoRoute: 'Uploads'
   }

   render() {
      return (
         <div>
            <div style = { tab_content_subcontainer }>
               <div onClick={() => this.setState({photoRoute: 'Uploads'})}> 
                  <span 
                     style = {this.state.photoRoute === 'Uploads' ? tab_content_button_active : tab_content_button } 
                     onClick={() => this.setState({photoRoute: 'Uploads'})}
                  >
                     Uploads 
                  </span>
               </div>
               <div onClick={() => this.setState({photoRoute: 'Stock'})}>
                  <span 
                     style= { this.state.photoRoute === 'Stock' ? tab_content_button_active : tab_content_button } 
                     onClick={() => this.setState({photoRoute: 'Stock'})}
                  >
                     Stock Photos
                  </span>
               </div>
            </div>
​
            { this.state.photoRoute === 'Uploads' ? 
               <UploadedPhotosTool 
                  addItem = { this.props.addItem }
               /> 
            : 
               <StockPhotosTool 
                  addItem = { this.props.addItem }
               />
            }
         </div>
      )
   }
}

const tab_content_subcontainer = {
   display: 'flex',
   justifyContent: 'space-around',
   marginBottom: '10px',
}

const tab_content_button = {
   width: '112px',
   height: '25px',
   background: '#F4F4F4 0% 0% no-repeat padding-box',
   boxShadow: '0px 0px 10px #d0d0d0',
   borderRadius: '13px',
   opacity: '1',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   font: 'Bold 12px/15px Helvetica Neue',
   cursor: 'pointer',
}

const tab_content_button_active = {
   ...tab_content_button,
   background: '#FC5185'
}

export default PhotosPanel;