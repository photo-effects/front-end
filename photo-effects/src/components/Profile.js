import React, { Component } from "react";
import withAuth from './Auth/withAuth';

class Profile extends Component {
    render() {
        return(
            <h1>
            Your Profile
            <button onClick={this.props.auth.logout}>Log Out</button>
            </h1>
        );
    }
}

export default withAuth(Profile);