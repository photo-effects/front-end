import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './image.css';
import axios from 'axios';




class PhotoLink extends Component {
    constructor(props) {
    super(props);

    this.state = {
        photoInfo: {
            title: `${this.props.fileName}`,
            user_id: "1",
            secure_url: this.props.secure_url,
            public_id: this.props.public_id,
        }
    }
    }

   // master
   // when adding project will push info from component state to our backend in postgreSQL
   // doing props.history.push as a bandaid fix until fix error that occurs after clicking "Add To Backend"
    addProject = e => {
        e.preventDefault();
        axios
          .post('https://photo-effects-backend.herokuapp.com/api/projects', this.state.photoInfo)
            .then(res => {
                this.props.history.push('/canvas')
                this.props.updateProject(res.data)
                console.log('adding to backend');
            })
            .catch(err => {
                console.log(err);
            })
    }


    // staging
    // addProject = e => {
    //     e.preventDefault();
    //     axios
    //       .post('https://photo-effects-backend-stage-1.herokuapp.com/api/projects', this.state.photoInfo)
    //         .then(res => {
    //             this.props.history.push('/home')
    //             this.props.updateProject(res.data)
    //             console.log('adding to backend');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }



render() {
    return (
        <>
          <div className="image-link">
            <img src={this.props.secure_url}  alt = { this.props.title } />
          </div>
         <div className="btn-center">
           <div className="btn-flex">
            <button className='btn' onClick={() => this.props.removeImage(this.props.public_id)}>No! Choose A Different Image</button>
            <button className='btn' onClick={this.addProject}> Yes! Go To Canvas</button>
         </div>
          </div>
          
        </>
    )
}
}


export default withRouter(PhotoLink);