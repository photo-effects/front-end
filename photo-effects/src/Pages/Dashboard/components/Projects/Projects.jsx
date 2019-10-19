import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './projects.css';

const userProjects = {
  border: '3px solid #364f6b',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#364f6b',
  flexWrap: 'wrap',
  width: '95%',
  height: '100%',
  margin: '0 auto',
  paddingBottom: '5%',
  paddingTop: '65px',
  borderRadius: '8px'
};

const sortBox = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '95%',
  margin: '0 auto',
  marginBottom: '5px'
};

const sort = {
  backgroundColor: '#fc5185',
  padding: '4px 10px',
  borderRadius: '8px',
  color: 'whitesmoke',
  fontSize: '2rem',
  cursor: 'pointer'
};

const projectsSectionTitle = {
  top: '100px',
  color: 'whitesmoke',
  background: '#fc5185',
  width: '130px',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '50px',
  marginBottom: '10px',
  padding: '20px',
  fontSize: '3.0rem',
  borderRadius: '7px',
  textDecoration: 'underline',
  border: '1px solid whitesmoke'
};

const uploadedImg = {
  flex: '0 0 auto',
  width: '20rem',
  height: '20rem',
  border: '0px solid #000',
  padding: '5px',
  marginRight: '6px',
  marginBottom: '6px',
  borderRadius: '5px',
  background: '#7B8794',
  cursor: 'pointer'
};

const uploadedImgTitle = {
  width: '100%',
  color: 'whitesmoke',
  paddingBottom: '5px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1.8rem'
};

const projectContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '275px',
  padding: '15px',
  margin: '10px',
  borderRadius: '8px'
};

const projectDeleteButton = {
  backgroundColor: '#fc5185',
  border: 'none',
  borderRadius: '5px',
  padding: '4px 5px',
  marginTop: '3px',
  color: 'whitesmoke',
  cursor: 'pointer',
  fontSize: '1.4rem'
};
class Projects extends Component {
  // master
  // Used to delete a project already in our backend and from cloudinary (handled in backend)
  deleteProject = (e,id) => {

    axios
      .delete(`https://photo-effects-backend-stage-1.herokuapp.com/canvas/${id}`)
      .then(res => {
        this.props.updateProject(e,res.data);
        // window.location.reload();
       
      })
      .catch(err => {
        console.log(err);
      });
  };

  toCanvas = project => {
    localStorage.setItem('projectId', project.id);
    localStorage.setItem('publicId', project.public_id);
    this.props.setBgImage(project.secure_url);
    this.props.history.push('/canvas');
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
    // console.log(this.props.projects)

    return (
      <>
        {this.props.projects === (undefined || null || []) ? (
          <h1>Loading...</h1> 
        ) : (
          <>
            <h1 style={projectsSectionTitle}>Projects</h1>
            <div style={sortBox}>
              <button onClick={this.props.toggleSort} style={sort}>
                Name <i className="fas fa-sort"></i>
              </button>
            </div>
            <div style={userProjects}>
              {this.props.projects.length === 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  {' '}
                  <h4 style={{ fontSize: '3rem' }}>Quack! No Projects!</h4>
                  <h4 style={{ margin: 'auto', fontSize: '5rem' }}>\</h4>
                  <img
                    src="http://www.pngnames.com/files/4/Rubber-Duck-PNG-Background.png"
                    alt="duck"
                  />{' '}
                </div>
              ) : (
                <>
                  {this.props.projects.map(project => {
                    return (
                      <div style={projectContainer}>
                        <h2 style={uploadedImgTitle}>{project.p_name}</h2>
                        <p>{project.index}</p>
                        <div
                          onClick={() => this.toCanvas(project)}
                          className="uploaded-img-container"
                        >
                          {project.secure_url === undefined ? (
                            <i
                              className="fas fa-image"
                              style={{ fontSize: '10rem' }}
                            ></i>
                          ) : (
                            <img
                              style={uploadedImg}
                              src={project.secure_url}
                              alt="pic"
                            />
                          )}
                        </div>
                        <button
                          style={projectDeleteButton}
                          onClick={(e) =>
                            this.deleteProject(e, project.id, project.public_id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(Projects);
