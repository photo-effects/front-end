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
  width: 'auto',
  height: 'auto',
  maxWidth: '20rem',
  maxHeight: '20rem',
  border: '0px solid #000',
  // padding: '5px',
  margin: '10px',
  borderRadius: '5px',
  background: '#7B8794',
  cursor: 'pointer',
};

const uploadedImgTitle = {
  width: '100%',
  color: 'whitesmoke',
  // paddingBottom: '5px',
  paddingLeft: '17px',
  // display: 'flex',
  // justifyContent: 'center',
  // textAlign: 'center',
  fontSize: '1.5rem'
};

const projectContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '32rem',
  width: '230px',
  padding: '8px',
  margin: '5px',
  borderRadius: '8px',
  border: '1px solid #4a6079',
  backgroundColor: '#304760'
};

const projectButton = {
  backgroundColor: '#364f6b',
  border: 'none',
  borderRadius: '5px',
  padding: '6px 10px',
  marginTop: '3px',
  color: '#44DDE6',
  cursor: 'pointer',
  fontSize: '2.5rem',
  margin: '0 0 1rem 0',
  width: "100%", 
  display: "flex",
  alignContent: "center"
};
class Projects extends Component {
  // state = {
  //   projects: this.props.projects
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       ...this.state,
  //       projects: this.props.projects
  //     })
  //     //console.log(this.state.projects)
  //   }, 2000)
    
  // }

  // master
  // Used to delete a project already in our backend and from cloudinary (handled in backend)
  deleteProject = (e,id) => {
    axios
      .delete(`https://photo-effects-backend-stage-1.herokuapp.com/canvas/${id}`)
      .then(res => {
        this.props.getProjects();
      }).catch(err => {
        console.log(err);
      });
  };

  publishToggle = (e, id, published) => {
    const publishToggle = {
      p_published: !published
    }

    axios.put(`https://photo-effects-backend-stage-1.herokuapp.com/canvas/${id}`, publishToggle)
    .then(res => {
      this.props.getProjects();
    }).catch(err => {
      console.log(err);
    });
  }

  toCanvas = project => {
    localStorage.setItem('projectId', project.id);
    localStorage.setItem('publicId', project.public_id);
    this.props.setBgImage(project);
    this.props.history.push('/canvas');
  };

  render() {
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
                  <h4 style={{ fontSize: '3rem' }}>Loading...</h4>
                  {/* <h4 style={{ fontSize: '3rem' }}>Quack! No Projects!</h4> */}
                  {/* <h4 style={{ margin: 'auto', fontSize: '5rem' }}>\</h4> */}
                  {/* <img
                    src="http://www.pngnames.com/files/4/Rubber-Duck-PNG-Background.png"
                    alt="duck"
                  /> */}
                  {' '}
                </div>
              ) : (
                <>
                  {this.props.projects.map(project => {
                    return (
                      <div key={project.id} style={projectContainer}>

                        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                          <h2 style={uploadedImgTitle}>{project.p_name}</h2>
                          <span style={{color: "#fc5185", fontSize: "2.5rem", cursor: "pointer"}} onClick={(e) =>
                              this.deleteProject(e, project.id, project.public_id)
                            }>
                            <i className="fas fa-times-circle"></i>
                          </span>
                        </div>
                        <div onClick={() => this.toCanvas(project)}>
                            <img style={uploadedImg} src={project.secure_url} alt="pic"/>
                        </div>

                        <div style={{}}>
                          <button style={projectButton} onClick={(e) => 
                              this.publishToggle(e, project.id, project.p_published)
                          }>
                            {project.p_published ? 
                              <span style={{ display: "flex", justifyContent: "space-between", alignItems:"center", color: "#44DDE6", fontSize: "2rem", cursor: "pointer"}} ><i className="fas fa-check-circle"></i><span style={{fontSize: "1.5rem", paddingLeft: "8px"}}>Published</span></span>
                            :
                              <span style={{ display: "flex", justifyContent: "space-between", alignItems:"center", color: "#fbdb27", fontSize: "2rem", cursor: "pointer" }}><i className="fas fa-ban"></i><span style={{fontSize: "1.5rem", paddingLeft: "8px"}}>Not Published</span></span>
                            }
                          </button>
                        </div>

                        
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
