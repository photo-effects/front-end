import React, { Component } from 'react';
import axios from 'axios';
// import Logout from '';
// import Image from '';
// import Upload from '';
// import Projects from ''
//import variables

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      images: [],
      projects:[],
      uploading: false
    };
  }

  // onChange
  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)
    console.log(files);

    if (files.length > 2) {
      const msg = 'Only 2 images can be uploaded at a time'
      return this.toast(msg, 'custom', 2000)  
    }

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000))
    }

    this.setState({ uploading: true })

    // axios.post(`https://photo-effects-backend-stage-1.herokuapp.com/image-upload`, formData)
    fetch(`https://photo-effects-backend-stage-1.herokuapp.com/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        console.log(formData)
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({
        uploading: false, 
        images
      })
    })
    .catch(err => {
      err.json().then(e => {
        this.setState({ uploading: false })
      })
    })
  }

  // filter
  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  // remove image
  removeImage = id => {
    this.setState({ images: this.filter(id) })
  }

  // Update
  updateProject = newProject => {
    this.setState({ projects: newProject });
  }

 


  // logout
  // logoutButton = e => {
  //   e.preventDefault();
  //   console.log(this.props)
  //   this.props.history.push('/');
  //   localStorage.removeItem()
    
  // }

  componentDidMount() {
    axios
    .get('https://photo-effects-backend.herokuapp.com/api/users')
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.log(err));


    axios
    // .get('http://localhost:5000/api/projects')
    .get('https://photo-effects-backend-stage-1.herokuapp.com/api/projects')
    .then(res => this.setState({ projects: res.data }))
    .catch(err => console.log(err));

    
  }

  render() {
    return (
      <div>
        {/* <Logout logoutButton={this.props.auth.logout} />
       <h1>Welcome Username!</h1>
       <Upload onChange={this.onChange} />
       <Image images={this.state.images} removeImage={this.removeImage} updateProject={this.updateProject} />
       < Projects projects={this.state.projects} /> */}
      </div>
    )
  }
}
