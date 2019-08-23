import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
   state = {
      testUsers: []
   }

   componentDidMount() {
      axios.get("https://photo-effects-backend.herokuapp.com/api/users")
      .then(res => this.setState({testUsers: res.data}))
      .catch(err => console.log(err))
    }
  
    render() {
      return (
        <div>
           <p>Users</p>
          {this.state.testUsers.map(data => {
            return (
              <div>
                {data.id}
                {data.username}
                {data.password}
              </div>
            )
          })}
        </div>
      );
    }
}

export default Users;