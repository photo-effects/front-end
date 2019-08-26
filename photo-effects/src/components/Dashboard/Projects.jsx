
import React, { Component } from "react";


class Projects extends Component {


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
              </div>
            )
          })}
          </div>
          </>
    );
  }
}



export default Projects;





