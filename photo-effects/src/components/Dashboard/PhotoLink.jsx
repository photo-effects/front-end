import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';




class PhotoLink extends Component {
    constructor(props) {
    super(props);

    this.state = {
        photoInfo: {
            title: `I am test title ${this.props.public_id}`,
            user_id: "1",
            secure_url: this.props.secure_url,
            public_id: this.props.public_id,
        }
    }
    }



    addProject = e => {
        e.preventDefault();
        axios
          .post('https://photo-effects-backend-stage-1.herokuapp.com/api/projects', this.state.photoInfo)
            .then(res => {
                this.props.history.push('/home')
                this.props.updateProject(res.data)
                console.log('adding to backend');
            })
            .catch(err => {
                console.log(err);
            })
    }



render() {
    console.log(this.props.secure_url)
    return (
        <>
        <div>
        <img src={this.props.secure_url} />
        
        </div>
        <div>
        <button onClick={() => this.props.removeImage(this.props.public_id)}>Delete</button>
        <button onClick={this.addProject}> Add To Backend</button>
        </div>
        </>
    )
}
}


export default withRouter(PhotoLink);