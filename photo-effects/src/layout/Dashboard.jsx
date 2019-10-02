import React, { Component } from 'react';
import axios from 'axios';
import Upload from '../components/Dashboard/Upload/Upload';
import Image from '../components/Dashboard/Image/Image';
import Projects from '../components/Dashboard/Projects/Projects';
import DashNav from '../components/Dashboard/DashNav/DashNav';
import '../components/Dashboard/DashNav/dashNav.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      images: [],
      projects: [],
      projectSort: [],
      uploading: false,
      error: null,
      inputKey: Date.now(),
      exist: 'false',
      fileName: '',
      sort: false,
      canvasprojects: []
    };
  }
  //
  // When click "Choose File" and choosing a photo the code below will occur. First will check to make sure only using 1 files and will only accept /png /jgp
  // Code set up for multiple files but need to change for only a single file(using because works for now and gets job done)
  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);
    const fileName = files.map(file => file.name);

    // this will clear the error message from the user screen
    // this.setState({ error: null })
    if (files.length > 1) {
      // const msg = "Only 1 images can be uploaded at a time";
      return console.log('No more than 1');
    }
    const formData = new FormData();
    const types = ['image/png', 'image/jpeg'];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        // errs.push(`'${file.type}' is not a supported format`)
        errs.push(`Sorry about that! We only accept JPG and PNG files! :(`);
      }
      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    // will display error to user
    if (errs.length) {
      return errs.forEach(err => this.setState({ ...this.state, error: err }));
    }
    this.setState({ uploading: true });

    // staging
    // fetch(`https://photo-effects-backend-stage-1.herokuapp.com/image-upload`, {
    //   method: 'POST',
    //   body: formData
    // })
    // master
    // This will push code to cloudinary db
    fetch(`https://photo-effects-backend.herokuapp.com/image-upload`, {
      method: 'POST',
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
          exist: 'true',
          images,
          error: null,
          fileName: fileName[0]
        });
        images.map(image => {
          this.props.setBgImage(image.url);
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
    const fileName = files.map(file => file.name);
    console.log(fileName);

    // this will clear the error message from the user screen
    // this.setState({ error: null })
    if (files.length > 1) {
      // const msg = "Only 1 images can be uploaded at a time";
      return console.log('No more than 1');
    }
    const formData = new FormData();
    const types = ['image/png', 'image/jpeg'];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`Sorry about that! We only accept JPG and PNG files! :(`);
      }
      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });
    // will display error to user
    if (errs.length) {
      return errs.forEach(err => this.setState({ ...this.state, error: err }));
    }
    this.setState({ uploading: true });
    // staging
    // fetch(`https://photo-effects-backend-stage-1.herokuapp.com/image-upload`, {
    //   method: 'POST',
    //   body: formData
    // })
    // master
    // This will push code to cloudinary db
    fetch(`https://photo-effects-backend.herokuapp.com/image-upload`, {
      method: 'POST',
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
          exist: 'true',
          images,
          error: null,
          fileName: fileName[0]
        });
        images.map(image => {
          this.props.setBgImage(image.url);
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
          exist: 'false',
          fileName: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Update
  // will update state for user projects when adding/deleting for now.
  updateProject = (e, newProject) => {
    this.setState({
      projects: newProject
    });
  };

  // logout
  logoutButton = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.history.push('/home');
  };

  componentDidMount() {
    // sets users in state
    axios
      .get('https://photo-effects-backend.herokuapp.com/api/users')
      .then(res => this.setState({ users: res.data }))
      .then(this.props.auth.getdbId())
      .catch(err => console.log(err));

    // sets projects in state
    axios
      .get('https://photo-effects-backend.herokuapp.com/api/projects')
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));

    axios
      // .get("https://photo-effects-backend.herokuapp.com/api/projects/sort")
      .get('https://photo-effects-backend.herokuapp.com/api/projects/sort')
      .then(res => this.setState({ projectSort: res.data }))
      .catch(err => console.log(err));

    // staging
    // axios
    // .get('https://photo-effects-backend-stage-1.herokuapp.com/api/users')
    // .then(res => this.setState({ users: res.data }))
    // .catch(err => console.log(err));

    // axios
    // .get('https://photo-effects-backend-stage-1.herokuapp.com/api/projects')
    // .then(res => this.setState({ projects: res.data }))
    // .catch(err => console.log(err));

    axios
      .get('https://photo-effects-backend-stage-1.herokuapp.com/canvas/')
      .then(res => this.setState({ canvasprojects: res.data }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://photo-effects-backend-stage-1.herokuapp.com/users/google/${localStorage.getItem(
          'userId'
        )}/projects`
      )
      .then(res => this.setState({ canvasprojects: res.data }))
      .catch(err => console.log(err));
  }
  // Toggle
  toggleSort = () => {
    this.setState({ sort: !this.state.sort });
  };
  render() {
    // const filteredProjects = this.state.canvasprojects.filter(project => project.user_id === localStorage.getItem("userId"))

    // console.log(filteredProjects)
    console.log(this.state.canvasprojects);
    console.log(localStorage.getItem('userId'));

    return (
      <div>
        <DashNav auth={this.props.auth} />
        <div className="welcome">
          <h1>Welcome {this.props.auth.getProfile().name || 'User'}!</h1>
        </div>
        <div className="center">
          {this.state.exist === 'true' && this.state.error === null ? (
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
            fileName={this.state.fileName}
            removeImage={this.removeImage}
            updateProject={this.updateProject}
          />
        </div>

        {this.state.canvasprojects.map(plzwork => {
          return <p>{plzwork.p_name}</p>;
        })}

        <Projects
          // projects={this.state.projects}
          projects={
            this.state.sort === false
              ? this.state.projects
              : this.state.projectSort
          }
          updateProject={this.updateProject}
          toggleSort={this.toggleSort}
          setBgImage={this.props.setBgImage}
        />
      </div>
    );
  }
}
