import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default class Auth {
  state = {};
  constructor(history) {
    this.history = history;

    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });
  }
 
  getProfile = () => {
    if (localStorage.getItem('id_token')) {
      return jwtDecode(localStorage.getItem('id_token'));
    } else {
      return {};
    }
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userId'); //google Id
    localStorage.removeItem('dbId'); //Database Id
    localStorage.removeItem('projectId'); //project Id
    localStorage.removeItem('publicId'); //Cloudinary Id of main picture
    this.auth0.logout();
    this.history.push('/');
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.getIds();

        this.history.push('/dashboard');
      } else if (err) {
        this.history.push('/');
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err);
      }
    });
  };

  getIds = () => {
    const newUser = {
      email: this.getProfile().email,
      user_id: this.getProfile().sub,
      name: this.getProfile().name
    };

    axios
      .post(
        'https://photo-effects-backend-stage-1.herokuapp.com/users',
        newUser
      )
      .then(res => {
        this.getdbId();
        console.log('new user added');
      })
      .catch(error => {
        error.response.data.code === '23505' && console.log('user exists');
        localStorage.setItem('userId', this.getProfile().sub);
        this.history.push('/dashboard');
      });
  };

  getdbId = async () => {
      await axios.get(`https://photo-effects-backend-stage-1.herokuapp.com/users/google/${localStorage.getItem(
        'userId'
      )}`)
      .then(res => {
        // console.log(localStorage.getItem('userId'));
        // console.log(res.data[0].id);
        localStorage.setItem('dbId', res.data[0].id);
        // localStorage.setItem('dbId', );
      })
      .catch(error => {
        console.log(error);
      });
  };


  setSession = authResult => {
    //set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  };
}
 