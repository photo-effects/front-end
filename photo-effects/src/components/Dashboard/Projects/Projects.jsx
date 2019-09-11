import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./projects.css";

class Projects extends Component {


  // master
  // Used to delete a project already in our backend and from cloudinary
  // takes in public_id so cloudinary knows which photo to delete
  deleteProject = (id, public_id) => {
    axios
      .delete(
        `https://photo-effects-backend.herokuapp.com/api/projects/${id}`,
        { data: { public_id } }
      )
      .then(res => {
        // this.props.history.push("/");
        this.props.updateProject(res.data);
        console.log("deleting from backend");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

 


  // staging
  //   deleteProject = (id, public_id) => {
  //     console.log(id, public_id);
  //     axios
  //       .delete(`https://photo-effects-backend-stage-1.herokuapp.com/api/projects/${id}`, { data: { public_id } })
  //       .then(res => {
  //           this.props.history.push('/home')
  //           this.props.updateProject(res.data);
  //           console.log('deleting from backend')
  //       })
  //       .catch(err => {
  //           console.log(err);
  //       })
  // }



  render() {
    return (
     <>
     {this.props.projects === undefined ? <h1>Loading...</h1> : ( 
       <>
       <h1 className="projects-section-title">Projects</h1>
       <div className="sortBox">
       
       <button onClick={this.props.toggleSort} className="sort">Name <i className="fas fa-sort"></i></button>
       </div>
          <div className="user-projects">
          {this.props.projects.map(project => {
            return (
              <div className="project-container">
              <h2 className="uploaded-img-title">{project.title}</h2> 
              <div className="uploaded-img-container">
              <img className="uploaded-img" src={project.secure_url} /> 
              </div>
              <button className="project-delete-button" onClick={() => this.deleteProject(project.id, project.public_id)}>
              Delete
              </button>
              </div>
            )
          })}
          </div>
        </>
     )}
     </>
    )
  }
}

export default withRouter(Projects);


