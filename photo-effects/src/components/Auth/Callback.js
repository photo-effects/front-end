import React, { Component } from "react";

class Callback extends Component {
    //Handle Auth if expected values are in the URL

    // getdbId = () => {
    //     axios
    //       .get(
    //         `https://photo-effects-backend-stage-1.herokuapp.com/users/google/${localStorage.getItem(
    //           'userId'
    //         )}`
    //       )
    //       .then(res => {
    //         console.log(localStorage.getItem('userId'));
    //         console.log(res.data);
    //         // localStorage.setItem('dbId', );
    //       });
    //     // .catch(error => {
    
    //     // });
    //   };
    

    componentDidMount() {
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
            // this.props.auth.getdbId();
        } else {
            throw new Error("Invalid callback URL.");
        }
    }
    render() {
        return(
            <h1>
                ...Loading
            </h1>
        );
    }
}

export default Callback;