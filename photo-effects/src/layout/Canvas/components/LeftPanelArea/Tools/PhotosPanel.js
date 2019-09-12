import React, {Component} from 'react';
import UploadedPhotosTool from './UploadedPhotosTool';
import StockPhotosTool from './StockPhotosTool';

class PhotosPanel extends Component {
   state = {

      currentComponent: UploadedPhotosTool

      // photoRoute: 'Uploads'

   }

   render() {
      return (

         <div style={photoContainer}>
            <div style={divStyle}  onClick={() => this.setState({currentComponent: UploadedPhotosTool})}><span className={this.state.photoRoute === 'Uploads' ? "tab-content-button tab-content-button-active" : "tab-content-button"}>Uploaded Photos</span></div>
            <div style={divStyle} onClick={() => this.setState({currentComponent: StockPhotosTool})}> <span className={this.state.photoRoute === 'Stock' ? "tab-content-button tab-content-button-active" : "tab-content-button"}> Stock Photos </span></div>

            <this.state.currentComponent 
               addItem = { this.props.addItem }
            /> 

        // <div>
           // <div className="tab-content-subcontainer">
             //  <span className={this.state.photoRoute === 'Uploads' ? "tab-content-button tab-content-button-active" : "tab-content-button"} onClick={() => this.setState({photoRoute: 'Uploads'})}>Uploads </span>
             //  <span className={this.state.photoRoute === 'Stock' ? "tab-content-button tab-content-button-active" : "tab-content-button"} onClick={() => this.setState({photoRoute: 'Stock'})}>Stock Photos</span>
            // </div>

            //{this.state.photoRoute === 'Uploads' ? <UploadedPhotosTool /> : <StockPhotosTool />}

         //</div>
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

// import React, {Component} from 'react';
// import UploadedPhotosTool from './UploadedPhotosTool';
// import StockPhotosTool from './StockPhotosTool';

// class PhotosPanel extends Component {
//    state = {
//       currentComponent: 'Uploads'
//    }

//    render() {
//       return (
//          <div style={photoContainer}>
//             <div style={divStyle} onClick={() => this.setState({currentComponent: 'Uploads'})}>Uploaded Photos</div>
//             <div style={divStyle} onClick={() => this.setState({currentComponent: 'Stock'})}>Stock Photos</div>

//             { this.state.currentComponent === 'Uploads' ? 
//                <UploadedPhotosTool 
//                   addItem = { this.props.addItem }
//                /> 
//             : 
//                <StockPhotosTool 
//                   addItem = { this.props.addItem }
//                />
//             }
//          </div>
//       )
//    }
   
// }

// export default PhotosPanel;

// const photoContainer = {
//    // overflowY: 'auto',
//    // height: '500px'
// }

// const divStyle = {
//    display: 'inline-block',
//    width: '45%',
//    border: '0px solid #000',
//    padding: '5px',
//    textAlign: 'center',
//    marginRight: '6px',
//    marginBottom: '6px',
//    borderRadius: '5px',
//    background: '#1F2933',
//    cursor: 'pointer',
// }

