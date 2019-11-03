import React from 'react';
import Navbar from '../Landing/components/nav/Navbar';
import Diagram from '../../assetts/diagram.JPG';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { HashLink as Link } from "react-router-hash-link";

const Docs = ({ auth }) => {
  const yLocation = {
    background: 'yellow',
    border: '1px solid #364F6B',
    padding: '3px',
    borderRadius: '5px'
  };

  const bLocation = {
    background: '#45DDE6',
    border: '1px solid #364F6B',
    padding: '3px',
    borderRadius: '5px'
  };

  const gLocation = {
    background: 'lightGreen',
    border: '1px solid #364F6B',
    padding: '3px',
    borderRadius: '5px'
  };

  const h3s = {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom:'10px'
  };

  const sections = {
    marginTop: '15px',
    paddingTop: '10px',
    border: '1px, #E6E7E7, solid'
  };

  const menu = {
    width: '270px',
    padding: '10',
    paddingTop: '20px ',
    paddingLeft: '16px',
    paddingRight: '12px',
    height: '850px',
    overflow: 'auto',
    background: '#FC5185',
    color: '#E5E5E6',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const docsMenu = {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '80px',
    height: '850px',
    fontSize: '16px',
    margin: '5px',
    overflow: 'auto'
  };

  const listItems = [
    { id: 1, name: 'Tech Stack', details: '', padding: '', indent: '' },
    { id: 2, name: 'Dependencies', details: '', padding: '', indent: '' },
    { id: 3, name: 'Overview', details: '', padding: '', indent: '' },
    {
      id: 4,
      name: 'Links, Docs and more',
      details: '',
      padding: '',
      indent: ''
    },
    {
      id: 5,
      name: '  Navigating Through this Project ',
      details: '**READ THIS FIRST!**',
      padding: '3px'
    },
    {
      id: 6,
      name: 'Authorization/Security',
      details: '',
      padding: '',
      indent: ''
    },
    { id: '6a', name: 'Getting Started', padding: '', indent: '20px' },
    { id: '6b', name: 'Integration', padding: '', indent: '20px' },
    { id: '6c', name: 'withAuth.js', padding: '', indent: '20px' },
    { id: '6d', name: 'Callback.js', padding: '', indent: '20px' },
    { id: '6e', name: 'Authorization', padding: '', indent: '20px' },
    { id: 7, name: 'Landing', details: '', padding: '', indent: '' },
    { id: 8, name: '8th Item', details: '', padding: '', indent: '' },
    { id: 9, name: '9th Item', details: '', padding: '', indent: '' },
    { id: 10, name: '10th Item', details: '', padding: '', indent: '' }
  ];

  const scrollFunc = id => {
    // let scrollId = id + 1;
    console.log(id);

    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ height: '937px', overflow: 'hidden', lineHeight: '22px' }}>
      <Navbar auth={auth} />
      <div style={{ height: '105px' }}></div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={menu}>
          <ul>
            {listItems.map(item => (
              <li
                style={{ marginTop: '10px', marginLeft: item.indent }}
                onClick={() => scrollFunc(item.id)}
              >
                {item.id}.{' '}
                <span
                  style={{
                    background: '#364F6B',
                    borderRadius: '6px',
                    padding: item.padding
                  }}
                >
                  {item.details}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div id="1" style={docsMenu}>
          <div style={sections}>
            <h3 style={h3s}>Our Tech Stack!</h3>
            <h4>FrontEnd:</h4>
            <ul>
              <li>React</li>
            </ul>
            <h4>Backend:</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>Cloudinary</li>
              <li>Node.js</li>
            </ul>
            <h4>DevOps</h4>
            <ul>
              <li>Auth0</li>
            </ul>
            <h4>Wireframes/Planning Docs</h4>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/10MtSzS81h8kgcXFGgP7RC0pwSsfDttqx/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Folder Structure Diagram
                </a>
              </li>
              Trello Board
              <li>
                <a
                  href="https://www.notion.so/Product-Cycle-Planning-Release-Canvas-fb376825344f46b6a88d377d7a6f7201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Labs Training Kit
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/18PuWgQFjPMBCSf_lHWWZeb_bbdelXd_X/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wireframe
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/Photo-Effects-Words-Layout-Overlay-Filters-dbad058a07cc4646b3c0b583249d14a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Board Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/1st-Feature-Canvas-Template-9f0ec58b922340e0a84fdc253ea274a3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 1 Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/2nd-Feature-Canvas-Template-79bd25ff5b564c488aae5f9281a5722d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 2 Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/3rd-Feature-Canvas-Template-8f70dfc9fb9f4912862327e9cb656105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 3 Notion Doc
                </a>
              </li>
            </ul>
          </div>
          <span id="2"></span>
          <div style={sections}>
            <h3 style={h3s}>Dependencies </h3>
            <ul>
              <li>
                <a
                  href="https://www.npmjs.com/package/auth0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.npmjs.com/package/auth0-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-js
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/auth0-lock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-lock
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/axios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  axios
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/cloudinary-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudinary-react
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/html2canvas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  html2canvas
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/jwt-decode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jwt-decode
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-dropzone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-dropzone
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-id-swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-id-swiper
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swiper
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-particles-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  react-particles-js
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-reveal
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/uuid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uuid
                </a>
              </li>
            </ul>
          </div>
          <span id="3"></span>
          <div style={sections}>
            <h3 style={h3s}>Overview </h3>
            This product was made with non-tech-savvie users in mind. It is, at
            this point, strictly a desktop application. Users can login using
            either thier Google username/password, or make a new account. Once
            logged in, they are redirected to the dashboard where the user can
            either choose to continue a previous project or start a new project
            by uploading a photo. Once the existing or new photo is chosen, the
            user is redirected to the canvas to decorate their photo. The
            completed photo can be saved for later, or downloaded to the users
            device.
          </div>
          <span id="4"></span>
          <div style={sections}>
            <h3 style={h3s}>Links, Docs and More</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/photo-effects/front-end/tree/feature/refactoring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FontEnd Github
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/photo-effects/back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Github
                </a>
              </li>
              <li>
                <a
                  href="https://photo-effect-backend.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API: https://photo-effect-backend.herokuapp.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.draw.io/?lightbox=1&target=blank&edit=_blank&layers=1&nav=1&title=docs#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D10MtSzS81h8kgcXFGgP7RC0pwSsfDttqx%26export%3Ddownload"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Folder Structure Diagram
                </a>
              </li>
            </ul>
          </div>
          <span style={{ height: '10px' }} id="5"></span>
          <div style={sections}>
            <h3 style={h3s}>Navigating Through this Project</h3>
            Upon first inspection, you will likely notice that our folder
            structure goes DEEP. So in our infinite mercy, we created a flow
            chart to make it easier for anyone who inherits this project to
            figure out where things are hidden. The full diagram is {''}
            <a
              href="https://drive.google.com/file/d/10MtSzS81h8kgcXFGgP7RC0pwSsfDttqx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontWeight: 'bold' }}>here</span>
            </a>
            , and can be opened and edited using a program called{' '}
            <span style={{ fontWeight: 'bold' }}>
              <a
                href="https://www.draw.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Draw.io
              </a>
            </span>
            , which is available in Google Drive.
            <p style={{ marginTop: '10px' }}>
              The diagram has folders in yellow. Each folder is given a letter.
              The letter are roughly in alphabetical order left to right to help
              you quickly find what you need and navigate the diagram. The
              letters are stictly for navigation and doesn't correspond to the
              folder structure itself in VSCode. Each file within the folders
              are marked with the parent folder letter followed by a number.
            </p>
            <img
              src={Diagram}
              alt="diagram"
              style={{
                margin: '30px 10px 30px 70px',
                border: '1px solid #364F6B',
                borderRadius: '8px'
              }}
            />
            <p style={{ marginTop: '10px' }}>
              The above example shows that the canvas/layout folder has 2
              subfolders. Each subfolder has files in numerical order. The{' '}
              <span>blue</span> files are .js or .jsx files (If you don't know
              the difference between .js and .jsx, click{' '}
              <span
                onClick={() => scrollFunc('jsx')}
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                {' '}
                here
              </span>
              ). CSS files are in red, and image files (svg, jpeg etc. ) are in
              green.{' '}
            </p>
            <p style={{ marginTop: '10px' }}>
              Throughout the docs we will reference the diagram to point out
              important things such as the location of components or where
              top-level state is located as{' '}
              <a
                href="https://codeburst.io/react-anti-pattern-prop-drilling-54474d5236bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                prop-drilling
              </a>{' '}
              is pervasive. If you are unfamiliar with prop-drilling, you may
              want to brush up on it. And then, once you learn it, refactor the
              whole project into functional components, put state in
              Context...then totally forget you ever had to learned
              prop-drilling in the first place.
            </p>
            <p style={{ marginTop: '10px' }}>
              We will organize documentation by major components and include as
              many references, code snippets, screenshots and helpful documents
              as we can think of.{' '}
            </p>
          </div>

          <span id="6"></span>
          <div style={sections}>
            <h3 style={h3s}>Authorization/Security</h3>
            <ul>
              <li>
                Location: <span style={yLocation}>F</span>,{' '}
                <span style={yLocation}>G</span>
              </li>
              <li>
                Depencies:{' '}
                <a
                  href="https://www.npmjs.com/package/auth0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/auth0-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-js
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/auth0-lock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-lock
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/jwt-decode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jwt-decode
                </a>{' '}
              </li>
              <li>
                Where is State? : <span style={bLocation}>G1</span>
              </li>
            </ul>
            <span id="6a"></span>
            <h4 style={{ marginTop: '20px' }}>Getting Started</h4>
            Auth0 is managed outside of this project and outsouces all of the
            security, so we don't have to worry about it. **Before messing with
            anything in the code, read through the Getting Started tutorial on
            the Auth0 site.**
            <p style={{background:'#FC5185', color:'#EAEAEA', width:'350px', padding:'5px', textDecoration:'none', borderRadius:'8px', margin:'10px 0px'}}> <a
              href="https://auth0.com/docs/quickstart/spa/react"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color:'#EAEAEA', fontWeight:'bold'}}
            >
              https://auth0.com/docs/quickstart/spa/react
            </a></p>
            <p>
              The docs on Auth0 at this point use functional components and
              Context, which will look different than what we have in this project. This tutorial can help as it still uses class componenents. 
            </p>
            <p style={{background:'#FC5185', color:'#EAEAEA', width:'180px', padding:'5px', textDecoration:'none', borderRadius:'8px', margin:'10px 0px'}}> <a
              href="https://medium.com/@saurssaurav33/start-react-with-auth0-107525cb969"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color:'#EAEAEA', fontWeight:'bold'}}
            >
               Start React with Auth0
            </a></p>

            <p>
              The Auth0 tutorial on PluralSight.com is also very useful and uses class components. 
            </p>
            <span id="6b"></span>
            <h4 style={{ marginTop: '20px' }}>Integration</h4>
            <p style={{ marginTop: '10px' }}>
              {' '}
              I marked{' '}
              <span style={bLocation}>G1</span> as where state is located,
              though this isn't quite the case. The props come from the auth0
              dependency, which is imported into this component as shown below. 
            </p>
            <p>
              I've isolated the functions that do the heavy-lifting as far as authorization goes. These are standard Auth0 functions, and should work in any project. The purpose of each function is explained in the tutorials from the previous section.  
            </p>
            <div
              style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              Auth.js
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default class Auth {
constructor(history) {
this.history = history;

this.auth0 = new auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile email'
});

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
      alert(\`Error: \${err.error}. Check the console for further details.\`);
      console.log(err);
    }
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
}
`}
              </SyntaxHighlighter>
            </div>
            <p>
              Props from the above functions are exported from Auth.js
                <span style={yLocation}>G1</span> and then imported into App.js <span style={bLocation}>A4</span>, which allows us to use them in any of the other components in the application. 
            </p>
            <div
               style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              App.js
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`
import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Notfound from "./Pages/NotFound/Notfound";
import Landing from "./Pages/Landing/Landing";
import About from './Pages/About/About';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Canvas from "./Pages/Canvas/Canvas";
import Auth from "./components/Auth/AuthOne/Auth";
import Callback from "./components/Auth/Callback";
import Docs from './Pages/Docs/Docs'

export default class App extends Component {
  state = {
    image: null
  };

  auth = new Auth(this.props.history);

...

  render = () => (
    
    <div>
    
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Landing auth={this.auth} {...props} />}
        />

        <Route
          path="/about"
          exact
          render={props => <About auth={this.auth} {...props} />}
        />

        <Route
          exact
          path="/docs"
          render={props => <Docs auth={this.auth} image={this.state.image} {...props} />}
        />

        <Route
          path="/callback"
          render={props => <Callback auth={this.auth} {...props} />}
        />

        <Route
          path="/dashboard"
          exact
          render={props => (
            <Dashboard
              auth={this.auth}
              setBgImage={this.setBgImage}
              click={this.click}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/canvas"
          render={props => <Canvas auth={this.auth} image={this.state.image} {...props} />}
        />

        <Route component={Notfound} />
      </Switch>
    
    </div>
  );
}

`}
              </SyntaxHighlighter>
            </div>


            <p>
            <span id="6c"></span>
            <h4 style={{ marginTop: '20px' }}>WithAuth.js </h4> 
            </p>
            <p>The Auth.js componenent <span style={bLocation}>G2</span> is script that will redirect any user who tried to access protected routes without logging in. It redirects the user back to the the landing page. Changing the route being passed on line 9 will redirect them user to wherever you choose.</p>

            <div
               style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              withAuth.js
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`import React from 'react'
import {withRouter } from 'react-router-dom'

function withAuth(Component) {
    const Auth =(props) => {
        const isAuth = Boolean(localStorage.getItem('access_token'));

        if (!isAuth) {
            props.history.push('/')
        }

        return isAuth ? <Component {...props} /> : <div>you are not authorized</div>
        
    }
    return withRouter(Auth)
}

export default withAuth

`}
              </SyntaxHighlighter>
            </div>
            <p>
            <span id="6d"></span>
            <h4 style={{ marginTop: '20px' }}>Callback.js </h4> 
            </p>
            <p>The Callback.js componenent <span style={bLocation}>F1</span> is a component that the user will only ever see for a split-second, if at all. It automatically sends the user to Auth0 so they can sign in with google. Upon successful login/registration, it reroutes the user back to PhotoEffects by triggering the handleAuthentication() function through props (located in Auth.js <span style={bLocation}>G1</span>)... </p>

            <div
               style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              Callback.js
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`import React, { Component } from "react";

class Callback extends Component {

    componentDidMount() {
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
            
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

`}
              </SyntaxHighlighter>
            </div>
<p>... which then pushes the user to the dashboard. </p>

<div
               style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              withAuth.js <span style={bLocation}>G1</span>
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {` handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.getIds();

        this.history.push('/dashboard'); //<==here
      } else if (err) {
        this.history.push('/');
        alert(\`Error: \${err.error}. Check the console for further details.\`);
        console.log(err);
      }
    });
  };

`}
              </SyntaxHighlighter>
            </div>

            <span id="6e"></span>
            <h4 style={{ marginTop: '20px' }}> Authorization </h4> 
            <p>In order to create a new user account or access and existing account we must have access to the user information from Auth0. This occurs in Auth.js <span style={bLocation}>G1</span> specifically in handleAuthentication() on line 4 of the snippet below. This saves the data to local storage in the form of a token </p>

<div
   style={{
    margin: '10px 0px',
    borderRadius: '8px',
    padding: '5px',
    background: 'black',
    color:'white'
  }}
>
  Auth.js <span style={bLocation}>G1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {`  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.getIds();

        this.history.push('/dashboard');
      } else if (err) {
        this.history.push('/');
        alert(\`Error: \${err.error}. Check the console for further details.\`);
        console.log(err);
      }
    });
  };

`}
  </SyntaxHighlighter>
</div>








          </div>
          <span id="7"></span>
          <div style={sections}>
            <h3 style={h3s}>7th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="8"></span>
          <div style={sections}>
            <h3 style={h3s}>8th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="9"></span>
          <div style={sections}>
            <h3 style={h3s}>9th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="10"></span>
          <div style={sections}>
            <h3 style={h3s}>10th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="11"></span>
          <div style={sections}>
            <h3 style={h3s}>11th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="12"></span>
          <div style={sections}>
            <h3 style={h3s}>12th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="13"></span>
          <div style={sections}>
            <h3 style={h3s}>13th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="14"></span>
          <div style={sections}>
            <h3 style={h3s}>14th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="15"></span>
          <div style={sections}>
            <h3 style={h3s}>15th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="16"></span>
          <div style={sections}>
            <h3 style={h3s}>F.A.Q</h3>
            <ul>
              <li id="jsx">
                <p style={{ fontWeight: 'bold' }}>
                  Q.What is difference between .js & .jsx
                </p>
                <p>
                  A. There is no real difference. They are both javascript
                  files. I use .jsx for major components and .js for smaller
                  components and hooks. It's a stylistic choice and I can't
                  guarantee that it is use consistently throughout the project.
                  Makes no real difference if you use one or the other.
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 'bold' }}>
                  Q.Why didn't you use context/hooks?
                </p>
                <p>
                  A.We just havn't learned it yet. They started teaching hooks
                  to the cohort after us. We were taught good old-fashioned
                  class components and had deadlines to meet. state management
                  wasn't needed at first. But projects have a way of growing on
                  you sometimes. Have fun refactoring!{' '}
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 'bold' }}>
                  Q. What's with all the javascript styling? Why did you use CSS
                </p>
                <p>
                  A. There is good reason for this. CSS stylesheets have a
                  time-cost when it comes to processing. In short, it slows your
                  site down. In a normal site, this no issue as a micro-fraction
                  of a second of lag, is not noticable. Our project re-renders
                  almost constantly, particularly on the canvas components as it
                  has to re-render whenever the user updates their picture. If
                  CSS is thrown into the mix, it will NOTICABLY slow down that
                  process and make the app almost unuable. If you incorporate
                  CSS, try to only use it on the landing page or some other part
                  of the app that doesn't re-rending frequently. We use CSS
                  extremely sparingly.
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 'bold' }}>Q.</p>
                <p>A.</p>
              </li>
              <li>
                <p style={{ fontWeight: 'bold' }}>Q.</p>
                <p>A.</p>
              </li>
              <li>
                <p style={{ fontWeight: 'bold' }}>Q.</p>
                <p>A.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
