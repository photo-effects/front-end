import React, {Component} from 'react';
import UploadedPhotosTool from './UploadedPhotosTool';
import StockPhotosTool from './StockPhotosTool';

class PhotosPanel extends Component {
   state = {
      currentComponent: 'Uploads'
   }

   render() {
      return (
         <div style={photoContainer}>
            <div style={divStyle} onClick={() => this.setState({currentComponent: 'Uploads'})}>Uploaded Photos</div>
            <div style={divStyle} onClick={() => this.setState({currentComponent: 'Stock'})}>Stock Photos</div>

            {this.state.currentComponent === 'Uploads' ? <UploadedPhotosTool /> : <StockPhotosTool />}
         </div>
      )
   }
   
}

export default PhotosPanel;

const photoContainer = {
   // overflowY: 'auto',
   // height: '500px'
}

const divStyle = {
   display: 'inline-block',
   width: '45%',
   border: '0px solid #000',
   padding: '5px',
   textAlign: 'center',
   marginRight: '6px',
   marginBottom: '6px',
   borderRadius: '5px',
   background: '#1F2933',
   cursor: 'pointer',
}