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
            <div className="tab-content-subcontainer">
               <span className={this.state.photoRoute === 'Uploads' ? "tab-content-button tab-content-button-active" : "tab-content-button"} onClick={() => this.setState({photoRoute: 'Uploads'})}>Uploads </span>
               <span className={this.state.photoRoute === 'Stock' ? "tab-content-button tab-content-button-active" : "tab-content-button"} onClick={() => this.setState({photoRoute: 'Stock'})}>Stock Photos</span>
            </div>

            {this.state.photoRoute === 'Uploads' ? <UploadedPhotosTool /> : <StockPhotosTool />}
         </div>
      )
   }
}

export default PhotosPanel;