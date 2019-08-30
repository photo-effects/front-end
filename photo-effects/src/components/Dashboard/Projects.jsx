
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Projects extends Component {


  deleteProject = (id, public_id) => {
    console.log(id, public_id);
    axios
      .delete(`https://photo-effects-backend-stage-1.herokuapp.com/api/projects/${id}`, { data: { public_id } })
      .then(res => {
          this.props.history.push('/home')
          this.props.updateProject(res.data);
          console.log('deleting from backend')
      })
      .catch(err => {
          console.log(err);
      })
}


  render() {
    return (
        <>
        <div className='box'>
            User Projects:
        </div>
        <div>
        {this.props.projects.map(project => {
            return(
            <div>
              <img src={project.secure_url} />
              <button onClick={() => this.deleteProject(project.id, project.public_id)}>Delete</button>
              </div>
            )
          })}
          </div>
          </>
    );
  }
}



export default withRouter(Projects);





