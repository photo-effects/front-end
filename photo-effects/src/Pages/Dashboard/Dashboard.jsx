import React, { Component } from "react";
import axios from "axios";
import Upload from "./components/Upload/Upload";
import Image from "./components/Image/Image";
import Projects from "./components/Projects/Projects";
import DashNav from "./components/DashNav/DashNav";
import "./components/DashNav/dashNav.css";
import Footer from "../../Pages/Landing/components/Footer/Footer";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      images: [],
      uploading: false,
      error: null,
      inputKey: Date.now(),
      exist: "false",
      canvasprojects: []
    };
  }
  
  //
  // When click "Choose File" and choosing a photo the code below will occur. First will check to make sure only using 1 files and will only accept /png /jgp
  // Code set up for multiple files but need to change for only a single file(using because works for now and gets job done)
  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    // this will clear the error message from the user screen
    // this.setState({ error: null })
    if (files.length > 1) {
      // const msg = "Only 1 images can be uploaded at a time";
      return console.log("No more than 1");
    }
    const formData = new FormData();
    const types = ["image/png", "image/jpeg"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        // errs.push(`'${file.type}' is not a supported format`)
        errs.push(`Sorry about that! We only accept JPG and PNG files! :(`);
      }
      if (file.size > 6000000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    // will display error to user
    if (errs.length) {
      return errs.forEach(err => this.setState({ ...this.state, error: err }));
    }
    this.setState({ uploading: true });

    // This will push code to cloudinary db
    fetch(`https://photo-effects-backend.herokuapp.com/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          console.log(formData);
          throw res;
        }
        return res.json();
      })
      // will push image in images state to be displayed to user
      .then(images => {
        this.setState({
          uploading: false,
          exist: "true",
          images,
          error: null
        });
        images.map(image => {
          console.log(image)
          return this.props.setBgImage(image);
          
        });
      })
      .catch(err => {
        err.json().then(e => {
          this.setState({ uploading: false });
        });
      });
  };

  // Same as above but if user uses drag n drop to upload a file.
  dropOnChange = e => {
    const errs = [];
    const files = Array.from(e);

    // this will clear the error message from the user screen
    // this.setState({ error: null })
    if (files.length > 1) {
      // const msg = "Only 1 images can be uploaded at a time";
      return console.log("No more than 1");
    }
    const formData = new FormData();
    const types = ["image/png", "image/jpeg"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`Sorry about that! We only accept JPG and PNG files! :(`);
      }
      if (file.size > 6000000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });
    // will display error to user
    if (errs.length) {
      return errs.forEach(err => this.setState({ ...this.state, error: err }));
    }
    this.setState({ uploading: true });

    // This will push code to cloudinary db
    fetch(`https://photo-effects-backend.herokuapp.com/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          console.log(formData);
          throw res;
        }
        return res.json();
      })
      // will push image in images state to be displayed to user
      .then(images => {
        this.setState({
          uploading: false,
          exist: "true",
          images,
          error: null
        });
        images.map(image => {
          return this.props.setBgImage(image);
        });
      })
      .catch(err => {
        err.json().then(e => {
          this.setState({ uploading: false });
        });
      });
  };

  // After "Choose File" this refers to "Choose another photo". Will delete from cloudinary db
  // inputKey allows the "Choose File" to reset
  // exist is used for conditional rendering for the <Upload /> Component
  removeImage = public_id => {
    axios
      .delete(`https://photo-effects-backend.herokuapp.com/image-delete`, {
        data: { public_id }
      })
      .then(res => {
        this.setState({
          images: [],
          inputKey: Date.now(),
          exist: "false"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Update - NOT BEING USED
  // will update state for user projects when adding/deleting for now.
  // updateProject = (e, newProject) => {
  //   e.preventDefault();
  //   setTimeout(window.location.reload(), 2000);
  //   this.setState({
  //     canvasprojects: newProject
  //   });
  // }; 
  //NOT NEEDED - getProjects is called again instead of reloading

  // logout
  logoutButton = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.history.push("/home");
  };

  getDbId = () => {
    axios
      .get(
        `https://photo-effects-backend-stage-1.herokuapp.com/users/google/${localStorage.getItem(
          "userId"
        )}`
      )
      .then(res => {
        localStorage.setItem("dbId", res.data[0].id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getProjects = () => {
    axios
      .get(
        `https://photo-effects-backend-stage-1.herokuapp.com/users/${localStorage.getItem(
          "dbId"
        )}/projects`
      )
      .then(res => this.setState({ canvasprojects: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    setTimeout(() => this.getDbId(), 500);

    setTimeout(() => this.getProjects(), 1000);

    // sets users in state
    axios
      .get("https://photo-effects-backend.herokuapp.com/api/users")

      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  // Toggle

  render() {
    return (
      <div>
        <DashNav auth={this.props.auth} />
        <div className="welcome">
          <h1>Welcome {this.props.auth.getProfile().name || "User"}!</h1>
        </div>
        <div className="center">
          {this.state.exist === "true" && this.state.error === null ? (
            <h2>Is this the image you want?</h2>
          ) : (
            <Upload
              onChange={this.onChange}
              inputKey={this.state.inputKey}
              dropOnChange={this.dropOnChange}
            />
          )}
          <div className="errorBox">{this.state.error}</div>
          <Image
            images={this.state.images}
            removeImage={this.removeImage}
            updateProject={this.updateProject}
            createProject={this.createProject}
          />
        </div>

        <Projects
          projects={this.state.canvasprojects}
          updateProject={this.updateProject}
          toggleSort={this.toggleSort}
          setBgImage={this.props.setBgImage}
          getProjects={this.getProjects}
        />
        <Footer /> 
      </div>
    );
  }
}
