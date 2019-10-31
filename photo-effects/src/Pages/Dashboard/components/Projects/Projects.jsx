import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./projects.css";

const userProjects = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#364f6b",
  flexWrap: "wrap",
  width: "95%",
  height: "100%",
  margin: "0 auto",
  paddingBottom: "40px",
  paddingTop: "40px",
  borderRadius: "8px"
};

const projectsSectionTitle = {
  color: "whitesmoke",
  background: "#304760",
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "50px",
  padding: "16px",
  fontSize: "2.0rem",
  borderRadius: "7px"
};

const projectImg = {
  flex: "0 0 auto",
  width: "auto",
  height: "auto",
  maxWidth: "20rem",
  maxHeight: "20rem",
  border: "0px solid #000",
  margin: "10px",
  borderRadius: "5px",
  background: "#7B8794",
  cursor: "pointer"
};

const projectImgTitle = {
  width: "100%",
  color: "whitesmoke",
  paddingLeft: "17px",
  fontSize: "1.5rem"
};

const projectContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "32rem",
  width: "280px",
  padding: "8px",
  margin: "5px",
  borderRadius: "8px",
  border: "1px solid #4a6079",
  backgroundColor: "#304760"
};

const projectButton = {
  backgroundColor: "#2B3F55",
  border: "none",
  borderRadius: "50px",
  padding: "6px 10px",
  marginTop: "3px",
  color: "#44DDE6",
  cursor: "pointer",
  fontSize: "2.5rem",
  margin: "0 0 1rem 0",
  width: "100%",
  display: "flex",
  alignContent: "center"
};
class Projects extends Component {
  state = {
    tags: [],
    hover: false
  };

  // master
  // Used to delete a project already in our backend and from cloudinary (handled in backend)
  deleteProject = (e, id) => {
    e.preventDefault();
    axios
      .delete(
        `https://photo-effects-backend-stage-1.herokuapp.com/canvas/${id}`
      )
      .then(res => {
        this.props.getProjects();
      })
      .catch(err => {
        console.log(err);
      });
  };

  publishToggle = (e, id, published) => {
    e.preventDefault();

    const publishToggle = {
      p_published: !published
    };

    axios
      .put(
        `https://photo-effects-backend-stage-1.herokuapp.com/canvas/${id}`,
        publishToggle
      )
      .then(res => {
        this.props.getProjects();
      })
      .catch(err => {
        console.log(err);
      });
  };

  toCanvas = project => {
    localStorage.setItem("projectId", project.id);
    localStorage.setItem("publicId", project.public_id);
    this.props.setBgImage(project);
    this.props.history.push("/canvas");
  };

  render() {
    return (
      <>
        {this.props.projects === (undefined || null || []) ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 style={projectsSectionTitle}>Projects</h1>
            <div style={userProjects}>
              {this.props.projects.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white"
                  }}
                >
                  {" "}
                  <h4 style={{ fontSize: "2.5rem" }}>Loading...</h4>{" "}
                </div>
              ) : (
                <>
                  {this.props.projects.map(project => {
                    return (
                      <div key={project.id} style={projectContainer}>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline"
                          }}
                        >
                          <h2 style={projectImgTitle}>{project.p_name}</h2>
                          <span
                            style={{
                              color: "#fc5185",
                              fontSize: "2.5rem",
                              cursor: "pointer"
                            }}
                            onClick={e => this.deleteProject(e, project.id)}
                          >
                            <i className="fas fa-times-circle"></i>
                          </span>
                        </div>
                        <div onClick={() => this.toCanvas(project)}>
                          <img
                            style={projectImg}
                            src={project.secure_url}
                            alt="pic"
                          />
                        </div>

                        <div style={{ display: "flex" }}>
                          <button
                            style={projectButton}
                            onClick={e =>
                              this.publishToggle(
                                e,
                                project.id,
                                project.p_published
                              )
                            }
                          >
                            {project.p_published ? (
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  color: "#44DDE6",
                                  fontSize: "2rem",
                                  cursor: "pointer"
                                }}
                              >
                                <i className="fas fa-check-circle"></i>
                                <span
                                  style={{
                                    fontSize: "1.5rem",
                                    paddingLeft: "8px"
                                  }}
                                >
                                  Published
                                </span>
                              </span>
                            ) : (
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  color: "#fbdb27",
                                  fontSize: "2rem",
                                  cursor: "pointer"
                                }}
                              >
                                <i className="fas fa-ban"></i>
                                <span
                                  style={{
                                    fontSize: "1.5rem",
                                    paddingLeft: "8px"
                                  }}
                                >
                                  Unpublished
                                </span>
                              </span>
                            )}
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
