import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './image.css';
import axios from 'axios';

class PhotoLink extends Component {
    constructor(props) {
    super(props);
    this.state = {
        photoInfo: {
            user_id: localStorage.getItem('dbId'),
            secure_url: this.props.secure_url,
            public_id: this.props.public_id,
        }
    }
    }


    addProject = () => {
        const newProject = {
            "p_name": "Untitled Design",
            "p_description": "",
            "user_created_id": this.state.photoInfo.user_id,
            "user_created_google_id": localStorage.getItem('userId'),
            "p_created_at": null,
            "p_data": "",
            "p_likes": 0,
            "p_published": false,
            "secure_url": this.state.photoInfo.secure_url,
            "public_id": this.state.photoInfo.public_id
        }
    
        axios.post('https://photo-effects-backend-stage-1.herokuapp.com/canvas', newProject)
            .then(res => {
                localStorage.setItem('projectId', res.data[0].id)
                localStorage.setItem('publicId', this.props.public_id)
                console.log(res.data)
            })
            .then(
                this.props.history.push('/canvas')
            )
            .catch(err => console.log(err))
    }

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