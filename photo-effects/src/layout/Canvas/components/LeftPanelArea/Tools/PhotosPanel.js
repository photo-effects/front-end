import React, {Component} from 'react';
import UploadedPhotosTool from './UploadedPhotosTool';
import StockPhotosTool from './StockPhotosTool';

class PhotosPanel extends Component {
   state = {
      currentComponent: 'Stock'
   }

   render() {
      return (
         <div>
            <div className="tab-content-subcontainer">
               <span className="tab-content-button" onClick={() => this.setState({currentComponent: 'Uploads'})}>Uploads </span>
               <span className="tab-content-button" onClick={() => this.setState({currentComponent: 'Stock'})}>Stock Photos</span>
            </div>

            {this.state.currentComponent === 'Uploads' ? <UploadedPhotosTool /> : <StockPhotosTool />}
         </div>
      )
   }
   
}

export default PhotosPanel;