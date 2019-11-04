import React, {useState} from 'react';
import Navbar from '../Landing/components/nav/Navbar';

//images
import Diagram from '../../assetts/diagram.JPG';
import LocalStorageImg from '../../assetts/local storage.JPG';
import Door from '../../assetts/exitdoor.JPG';
import Exit from '../../assetts/logout.JPG';
import dashState from "../../assetts/dashboardState.png";
import Navout from "../../assetts/navout.JPG";
import Navin from "../../assetts/navin.JPG";
import Heropic from "../../assetts/hero.JPG";
import Tagpic from "../../assetts/tags.JPG";
//code snippets
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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

  const liSpace ={
    marginTop: '10px'
  }

  const boldpointer = {
    cursor:'pointer',
    fontWeight:'bold'
  }
  const bold ={
    fontWeight:'bold'
  }

  const h4s ={
    marginTop: '20px'
  }

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
    height: '100%',
    padding: '10',
    paddingTop: '20px ',
    paddingLeft: '16px',
    paddingRight: '12px',
    // height: '850px',
    overflow: 'auto',
    background: '#FC5185',
    color: '#E5E5E6',
    fontSize: '16px',
    fontWeight: 'bold',
    
  };

  const docsMenu = {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '80px',
    // height: '850px',
    height: '100%',
    fontSize: '16px',
    overflow: 'auto',
    background:'#EAEAEA',
    margin:'0px'
  };

  const listItems = [
    { id: 1, name: 'Tech Stack', details: '', padding: '', indent: '', drop:'block'  },
    { id: 2, name: 'Dependencies', details: '', padding: '', indent: '', drop:'block' },
    { id: 3, name: 'Overview', details: '', padding: '', indent: '', drop:'block' },
    {
      id: 4,
      name: 'Links, Docs and more',
      details: '',
      padding: '',
      indent: '', drop:'block'
    },
    {
      id: 5,
      name: '  Navigating Through this Project ',
      details: '**READ THIS FIRST!**',
      padding: '3px', drop:'block'
    },
    {
      id: 6,
      name: 'Authorization/Security',
      details: '',
      padding: '',
      indent: '', drop:'block'
    },
    { id: '6a', name: 'Getting Started', padding: '', indent: '20px', drop:'none' },
    { id: '6b', name: 'Integration', padding: '', indent: '20px', drop:'none' },
    { id: '6c', name: 'withAuth.js', padding: '', indent: '20px', drop:'none' },
    { id: '6d', name: 'Callback.js', padding: '', indent: '20px', drop:'none' },
    { id: '6e', name: 'Authorization', padding: '', indent: '20px', drop:'none' },
    { id: '6f', name: 'Tokens/Ids', padding: '', indent: '20px', drop:'none' },
    { id: '6g', name: 'Logout', padding: '', indent: '20px', drop:'none' },
    { id: 7, name: 'Landing', details: '', padding: '', indent: '', drop:'block' },
    { id: '7a', name: 'NavBar', padding: '', indent: '20px', drop:'none' },
    { id: '7b', name: 'Hero', padding: '', indent: '20px', drop:'none' },
    { id: '7c', name: 'Tags', padding: '', indent: '20px', drop:'none' },
    { id: '7d', name: 'TagsCont', padding: '', indent: '20px', drop:'none' },
    { id: 8, name: 'Dashboard', details: '', padding: '', indent: '', drop:'block' },
    { id: '8a', name: '', details: '', padding: '', indent: '20px', drop:'block' },
    { id: '8b', name: '', details: '', padding: '', indent:'20px', drop:'block' },
    { id: '8c', name: '', details: '', padding: '', indent:'20px', drop:'block' },
    { id: 9, name: '9th Item', details: '', padding: '', indent: '', drop:'block' },
    { id: '9a', name: '', details: '', padding: '', indent:'20px', drop:'block' },
   
    { id: '9b', name: '', details: '', padding: '', indent:'20px', drop:'block' },
    { id: '9c', name: '', details: '', padding: '', indent:'20px', drop:'block' },
    { id: 17, name: 'Known Issues', details: '', padding: '', indent:'20px', drop:'block' },
    { id: 'Backend', name: '', details: '', padding: '', indent: '', drop:'block' },
    
  ];

  const scrollFunc = id => {
    // let scrollId = id + 1;
    console.log(id);

    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };



  return (
    
    <div style={{ height: '937px', overflow: 'hidden', lineHeight: '22px', background: '#FC5185' }}>
      <Navbar auth={auth} />
      <div style={{ height: "101px" }}></div>

      <div style={{ display: "flex", flexDirection: "row", height:'88.5vh' }}>
        <div style={menu}>
          <ul>
            {listItems.map(item => (
              <li
                style={{ marginTop: '10px', marginLeft: item.indent, cursor:'pointer' }}
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
                {/* <i className="fas fa-plus-circle" style={{display:item.drop}}></i> */}
                
              </li>
            ))}
          </ul>
        </div>
        
        <div style={docsMenu}>
          <div style={sections}>
          <span id="1"></span>
            <h3 style={h3s}>Our Tech Stack!</h3>
            <h4 style={h4s}>FrontEnd:</h4>
            <ul>
              <li>React</li>
            </ul>
            <h4 style={h4s}>Backend:</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>Cloudinary</li>
              <li>Node.js</li>
            </ul>
            <h4 style={h4s}>DevOps</h4>
            <ul>
              <li>Auth0</li>
            </ul>
            <h4 style={h4s}>Wireframes/Planning Docs</h4>
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
                {" "}
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
                  {" "}
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
              The letters are roughly in alphabetical order left to right to help
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
              Throughout the docs, we will reference the diagram to point out
              important things such as the location of components or where
              top-level state is located because this project has lots of {' '}
              <a
                href="https://codeburst.io/react-anti-pattern-prop-drilling-54474d5236bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                prop-drilling
              </a>. If you are unfamiliar with prop-drilling, you may
              want to brush up on it. And then, once you learn it, refactor the
              whole project into hooks, put state in
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
                Location: <span style={yLocation}>N</span>,{' '}
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
            <h4  style={h4s}>Getting Started</h4>
            Auth0 is what we use to manage security features so we don't have to worry about it. There is quite a learning curve so **Before messing with
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
              The docs on Auth0 at this point uses hooks and
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
              The Auth0 tutorial on PluralSight.com is also very useful and can be done using a free trial, but is worth the money if you need it longer than the first free month. 
            </p>
            <span id="6b"></span>
            <h4  style={h4s}>Integration</h4>
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
              Props from the above functions are exported from Auth.js {' '}
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

...

`}
              </SyntaxHighlighter>
            </div>


            <p>
            <span id="6c"></span>
            <h4  style={h4s}>WithAuth.js </h4> 
            </p>
            <p>The withAuth.js componenent <span style={bLocation}>G2</span> is script that will redirect any user who tries to access protected routes without logging in. It redirects the user back to the the landing page. Changing the route being passed on line 9 will redirect them user to wherever you choose.</p>

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
            <h4 style={h4s}>Callback.js </h4> 
            </p>
            <p>The Callback.js componenent <span style={bLocation}>F1</span> is a component that the user will only ever see for a split-second, if at all. It automatically sends the user to Auth0 so they can sign in with google or register a new username/password. Upon successful login/registration, it reroutes the user back to PhotoEffects by triggering the handleAuthentication() function through props (located in Auth.js <span style={bLocation}>G1</span>)... </p>

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
<p>... which then pushes the user to the dashboard so they can start their project. </p>

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
            <h4  style={h4s}> Authorization </h4> 
            <p>In order to create a new user account or access and existing account we must have access to the user information from Auth0. This occurs in Auth.js <span style={bLocation}>G1</span> specifically in handleAuthentication() on line 4 of the snippet below. If a valid token is in local storage, the setSession() function will alert Google that this person is logged in. </p>

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

<p>This allows us access to user data from Google. Immediately after setSession is triggered, getId's is also triggered.</p>
<p>
  getId's creates a newUser object which includes the <span style={bold}> email</span>,<span style={bold}> user_id </span>and <span style={bold}>name</span>, all pulled in from Auth0 using thier native function getProfile(). 
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
  Auth.js <span style={bLocation}>G1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {`
  getIds = () => {
    const newUser = {
      email: this.getProfile().email,
      user_id: this.getProfile().sub,
      name: this.getProfile().name
    };

`}
  </SyntaxHighlighter>
</div>

<p>
 The <span style={bold}>newUser</span> object is passed into the axios POST call which send the object to our <span style={boldpointer} onClick={()=>scrollFunc('backend')}>backend</span> hosted on {' '} 
        <a href="https://photo-effect-backend.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer" 
          style={bold}>
            Heroku
      </a>. 
</p>
<p>
If the user already exists, then the POST call will send back an error message, specifically error code 23505. If we get this specific code, the google user id is set into local storage, and the user is sent to the dashboard to start their project. This prevents multiples of the same user being saved to the backend. 
</p>
<p>
  If there is no error message, then the POST goes through as normal, creating a new user in the backend.  
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
  Auth.js <span style={bLocation}>G1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {` axios
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

`}
  </SyntaxHighlighter>
</div>

<p>Then, getdbId() is triggered, which is a GET call that retrieves the new user we just created in getIDs(), and sets the new user's id to local storage for later use. Then, the handleAuthentication() function finishes up by pushing the user to the dashboard to start their project.</p>
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
    {`getdbId = async () => {
    await axios.get(\`https://photo-effects-backend-stage-1.herokuapp.com/users/google/\${localStorage.getItem(
      'userId'
    )}\`)
    .then(res => {
      localStorage.setItem('dbId', res.data[0].id);
    })
    .catch(error => {
      console.log(error);
    });
};
`}
  </SyntaxHighlighter>
  <span id="6f"></span>
</div>

<p>Once all of the functions in Auth.js <span style={bLocation}>G1</span> have run, all the data we need to access the individual user's existing projects or to create a new project in the database should be available in local storage.</p>
<p style={liSpace}> Local storage should look like this: </p>

<img src={LocalStorageImg} alt="localstorage" style={{borderRadius:'8px', border:'1px solid black', margin: 'auto', width: '100%'}}/>

<ul>
  <li style={liSpace}><span style={bold}>access_token</span>: Required by Google to log the user in. </li>
  <li style={liSpace}><span style={bold}>id_token</span>: Required by Google to log the user in.</li>
  <li style={liSpace}><span style={bold}>expires_at</span>: Defines how long the user can stay logged in with google. Right now it is set to infinite, but can be changed by logging into the <a href="https://auth0.com/auth/login"  
  target="_blank" 
  rel="noopener noreferrer" 
  style={boldpointer}>Auth0 backend</a>.  </li>
  <li style={liSpace}><span style={bold}>userId</span>: Unique user id from google </li>
  <li style={liSpace}><span style={bold}>dbId</span>: unique user id in our heroku backend. </li>
</ul>

<span id="6g"></span>
  <h4  style={h4s}>Logout</h4>

<img style={{width:'76px', borderRadius:'8px'}}src={Door} alt='door'/>
<img style={{borderRadius:'8px'}} src={Exit} alt='exit'/>
<p>
  Logout buttons are at the top of every page in the app. In the code they are located in Navbar.jsx <span style={bLocation}>Z1</span>, DashNav.jsx <span style={bLocation}>V1</span>, and TopBar.js <span style={bLocation}>S8</span>. The logout buttons accesses the Logout() function based in Auth.js through props that were passed around the project through Apps.js. 
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
  NavBar.jsx <span style={bLocation}>Z1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {`import React, { Component } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../../assetts/photoLogo.png";

export class Navbar extends Component {
  state = {
    hover: false
  };

  //push to landing
  render() {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

...

    const links = [
      {
        name: "About",
        element: "link"
      },
      {
        name: "Docs",
        element: "link"
      },
      {
        name: "Dashboard",
        element: "link"
      },
      {
        name: "auth",
        element: "button"
      }
    ];

    const loggedOutLinks = [
      {
        name: "About",
        element: "link"
      },
      {
        name: "Docs",
        element: "link"
      },
      {
        name: "auth",
        element: "button"
      }
    ];

    return (
      <nav style={nav}>
        <Link to="/">
          <img src={navLogo} alt="navbar logo" style={navbarLogo} />
        </Link>
        {isLoggedIn ? (
          <ul style={navlinks}>
            <>
              {links.map((link, i) => (
                <A
                  link={link}
                  isLoggedIn={isLoggedIn}
                  login={this.props.auth.login}
                  logout={this.props.auth.logout} <== **here**
                  key={i}
                />
              ))}
            </>
          </ul>
        ) : (
          <ul style={navLinksLoggedOut}>
            <>
              {loggedOutLinks.map(link => (
                <A
                  link={link}
                  isLoggedIn={isLoggedIn}
                  login={this.props.auth.login}
                  logout={this.props.auth.logout}
                />
              ))}
            </>
          </ul>
        )}
      </nav>
    );
  }
}

class A extends Component {
  state = {
    hover: false
  };

  render() {
    const { hover } = this.state;
    const { link, isLoggedIn } = this.props;
    const { name, element } = link;


   ...


    return element === "button" ? (
      <li>
        <button
          style={loginbutton}
          onMouseEnter={
            !this.state.hover ? () => this.setState({ hover: true }) : null
          }
          onMouseLeave={
            this.state.hover ? () => this.setState({ hover: false }) : null
          }
          onClick={isLoggedIn ? this.props.logout : this.props.login}
        >
          {isLoggedIn ? "Logout" : "Login / Signup"}
        </button>
      </li>
    ) : (
      <li style={smallnavlinks}>
        <Link
          to={\`/\${name.toLowerCase()}\`}
          style={linkStyle}
          onMouseEnter={
            !this.state.hover ? () => this.setState({ hover: true }) : null
          }
          onMouseLeave={
            this.state.hover ? () => this.setState({ hover: false }) : null
          }
        >
          {name}
        </Link>
      </li>
    );
  }
}

export default Navbar;

`}
  </SyntaxHighlighter>
</div>
<div
   style={{
    margin: '10px 0px',
    borderRadius: '8px',
    padding: '5px',
    background: 'black',
    color:'white'
  }}
>
  DashNav.jsx <span style={bLocation}>V1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {`import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./dashNav.css";
import logo from "../../../../assetts/photoLogo.png";

...

export class DashNav extends Component {
  //push to landing

  render() {
    return (
      <nav style={dashNav}>
        <NavLink to="/">
          <img style={navBarLogo} src={logo} alt="logo" />
        </NavLink>
        <div className="navWrap">
          <ul style={dashNavLinks} className="dashNavRight">
            <NavLink style={navLink} exact to="/">
              <li className="links">Home</li>
            </NavLink>
            <li style={{ paddingLeft: "15px" }}>
              <button style={dashLogout} onClick={this.props.auth.logout}> //<==**here**
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DashNav;

`}
  </SyntaxHighlighter>
</div>


<div
   style={{
    margin: '10px 0px',
    borderRadius: '8px',
    padding: '5px',
    background: 'black',
    color:'white'
  }}
>
  TopBar.js <span style={bLocation}>G1</span>
  <SyntaxHighlighter
    language="javascript"
    style={atomOneDark}
    showLineNumbers
    useInlineStyles
  >
    {`export default class TopBar extends Component {

...

  tools = [
    // 'Share',
    // 'Print',
    'Home',
    'Save',
    'Logout'
  ]

  clickHandler = type => {
    switch(type) {
      case 'Share':
        // do something
        break;
      case 'Print':
        // do something
        break;
      case 'Logout': 
        return this.props.auth.logout(); //<== **here**

      default: return;
    }
  }

  render = () => (
    <div style = { this.container }>
      { this.tools.map(tool => (
        <Tool 
          key = { tool }
          tool = { tool }
          clickHandler = { this.clickHandler }
        />
      )) }
    </div>
  )
}

class Tool extends Component {
  state = {
    hover: false
  }

  btn = hover => ({
    borderRadius: '100%',
    padding: '10px',
    border: '1px solid black',
    background: hover ? 'black' : 'white',
    color: hover ? 'white' : 'black',
    cursor: 'pointer'
  })

  render() {
    return (
      <div 
        // style = { this.btn(this.state.hover) }
        style = {buttonStyle}
        onMouseEnter = { this.state.hover ? null : () => this.setState({ hover: true }) }
        onMouseLeave = { this.state.hover ? () => this.setState({ hover: false }) : null }
        onClick = { () => this.props.clickHandler(this.props.tool) }
      >
        { this.props.tool }
      </div>
    )
  }
}
`}
  </SyntaxHighlighter>
</div>

          </div>
          <span id="7"></span>
          <div style={sections}>
            <h3 style={h3s}>Landing</h3>
            <ul>
              <li>
                Location: <span style={yLocation}>F</span>
              </li>
              <li>
                Depencies:{' '}
                <a
                  href="https://www.npmjs.com/package/axios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  axios
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/react-id-swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-id-swiper
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swiper
                </a>
                ,{' '}
                <a
                  href="https://www.npmjs.com/package/react-particles-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 react-particles-js
                </a>,{' '}
                <a
                  href="https://www.npmjs.com/package/react-reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 react-reveal
                </a>{' '}
              </li>
              <li>
                Where is State? : Modal State - <span style={bLocation}>EE2</span>, Sort by Tags - <span style={bLocation}>BB1</span>,  Filter Published projects - <span style={bLocation}>EE3</span>, NavBar Hover State - <span style={bLocation}>Z1</span>, 
              </li>
            </ul>
          
            <span id="7a"></span>
            <h4  style={h4s}>NavBar <span style={bLocation}>Z1</span></h4>
            <p>
  Much of what you need to know about the navbar was addressed in the <span onClick={()=>{scrollFunc('6e')}} style={boldpointer}>Authorization</span>  section.
            </p>
            
            <img src={Navout}alt="navout" style={{width:'100%', borderRadius:'8px', border:' 1px solid black'}}/>
            <img src={Navin} alt="navin" style={{width:'100%',borderRadius:'8px', border:' 1px solid black'}}/>
<p>
  It render's conditionally based on if the user is logged in or logged out of Auth0. The code looks more complicated than a navbar normally would be, but this is what is required to have a working onHover without use of CSS stylesheets. <br/>
  I love CSS...it's the best...seriously...this is what you would have to go through for a simple onHover <span onClick={()=>scrollFunc('css')} style={boldpointer}>without CSS</span>.

</p>
<span id="7b"></span>
            <h4  style={h4s}>Hero <span style={bLocation}>AA1</span> & <span style={bLocation}>AA3</span></h4>
            <p style={liSpace}>
  The hero is composed of two simple stateless components. The only thing to know is that the bubbles are from a dependency called React-Particles. The Particles effect is in the HeroBg.js component, which is set with absolute positioning and floating behind the Hero.jsx component. Particles can be tricky to position correctly, but looks great, and a lot of fun to play with (the bubbles move when you click on them!)
            </p>

            
            <img src={Heropic}alt="hero" style={{width:'100%',borderRadius:'8px', border:' 1px solid black'}}/>
            
            <span id="7c"></span>
            <h4  style={h4s}>Tags <span style={bLocation}>BB1</span> </h4>
            <p style={liSpace}>
The TagsCont.jsx component is fully functional. It appears to not be working on the landing page because the cards do not contain any tags. This is due to there not being a "tags" input in dashboard or canvas just yet. This was an intended feature, but was not included fully due to time constraints. A tags category is available in the backend already. Once a mechanism to update tags on the saved projects is built, and tags mapped into the cards on the landing page, the filter it will work just fine.
            </p>

            
            <img src={Tagpic}alt="hero" style={{width:'100%',borderRadius:'8px', border:' 1px solid black', marginTop:'10px'}}/>

            <p>
              The clicked tag name is sent from TagsCont.jsx to WaterfallCont.jsx through props, and used to filter results coming from the heroku backend.
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
              TagsCont.jsx <span style={bLocation}>BB1</span> 
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import WaterfallCont from './waterfall/waterfallCont';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';
import './tagscont.css';

const TagsCont = props => {

...

  const [sortedpics, setSortedpics] = useState('');

  const Sortedpics = tag => {
    setSortedpics(tag);
  };
  console.log(sortedpics);
  return (
    <div style={{ background: '#42DDE5', paddingBottom: '10px' }}>
      <Swiper {...params}>
        {topics.map(topic => (
          <div
            key={topic.tag}
            onClick={() => Sortedpics(topic.tag)}
            style={{
              background: topic.bgColor,
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: ' 1px -1px 6px -1px rgba(0,0,0,0.29)',
              marginBottom: '10px'
            }}
          >
            <p style={tagDesign}>{topic.tag}</p>
          </div>
        ))}
      </Swiper>
      <div style={{ position: 'relative' }}>
        <WaterfallCont sortBy={sortedpics} />
      </div>
    </div>
  );
};
export default TagsCont; 

`}
              </SyntaxHighlighter>
            </div>

<h4>Waterfall</h4>  

            <div
              style={{
                margin: '10px 0px',
                borderRadius: '8px',
                padding: '5px',
                background: 'black',
                color:'white'
              }}
            >
              WaterfallCont.jsx <span style={bLocation}>EE3</span> 
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                useInlineStyles
              >
                {`import React, { useEffect, useState } from "react";
import Photolist from "./Photolist";
import Footer from "../../../components/Footer/Footer";
import "./waterfall.css";
import axios from "axios";

...

const WaterfallCont = props => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://photo-effects-backend-stage-1.herokuapp.com/canvas/published"
      )
      .then(res => {
        setPics(res.data);
      });
  }, []);
  const filteredpics = pics.filter(pic => pic.tags ===\`\${props.sortBy}\`);
  return (
    <div style={waterfallCont}>
      <Photolist pics={filteredpics.length === 0 ? pics : filteredpics} />
      <Footer />
    </div>
  );
};
export default WaterfallCont;

`}
              </SyntaxHighlighter>
            </div>

<p>
  The filtered projects are then passed down through props to Photolist.jsx <span style={bLocation}>EE2</span>. This component maps the projects out as individual cards, and also contains the code to show each card as a large modal for the user to browse through. The cards are wrapped in a 'Fade' tag, which gives the cool fade-in effect on the landing page. The dependency that does this is call <a href="https://www.npmjs.com/package/react-reveal" target="_blank" rel="noopener noreferrer"  style={boldpointer}> React-Reveal</a>. They have really easy to follow docs.
</p>
          </div>




          <span id="8"></span>
          <div style={sections}>
            <h3 style={h3s}>Dashboard</h3>
             <ul>
              <li>
                Location: <span style={yLocation}>K</span>,{' '}
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
            <div>
              <img
                style={{ width: "300px", height: "200px" }}
                src={dashState} alt='screenshot'
              />
            </div>
            <p>This is the state in Dashboard</p>
            <p> users: Obtaining users from our backend</p>
            <p>
              images: This is where the image from cloudinary is stored
              initially when the user chooses an image from their computer to
              use via dragndrop or choosing file.
            </p>
            <p>
              uploading: Used when user chooses a photo to tell them the photo
              is waiting to load to be displayed from Cloudinary
            </p>
            <p>
              error: Error will be displayed if user chooses image that is too
              big or if trying to upload multiple images at once
            </p>
            <p>
              inputKey: Needed to reset the "Choose File" option if user decides
              to choose a differnt photo.(It's a little hack)
            </p>
            <p>exist: Used for conditional rendering</p>
            <p>canvasprojects: Pulling projects from our backend</p>
            <div>
              <h3>Methods:</h3>
              <p>
                onChange: There are two of these in Dashboard.jsx. Two is needed
                because one is used for when a user clicks "Choose File" and the
                second is used if the user uploads a photo via DragNDrop.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Dashboard has 4 components which are DashNav, Image, Projects,
                and Upload
              </p>
              <p>DashNav is simply the component that deals with the navbar</p>
              <p>
                Image component also holds a component called PhotoLink. These
                components deal with the image that is being displayed ot the
                user. The image is being displayed by returning a "secure_url"
                from Cloudinary. The image has all of the data coming back from
                Cloudinary in Dashboard.jsx state mentioned above. In PhotoLink
                is where the user can click "Go to canvas" or to "Choose a
                different Image". Going to canvas will push the data to our
                backend(see the info pushed in PhotoLink component) and "Choose
                a different image" will delete the image from Cloudinary and
                allow the user to choose another image
              </p>
              <p>
                Projects is the component that displays the specific user's
                projects on the bottom of the Dashboard page. It is being mapped
                from canvasprojects from the state in Dashboard.jsx. A user can
                click on a photo to go to the canvas with the image displayed
                and edit the image{" "}
              </p>
              <p>
                Upload component has the react-dragndrop code for when a user
                wants to choose a file to upload
              </p>
            </div>
          </div>
         

        
         
          <span id="9"></span>
          <div style={sections}>
            <h3 style={h3s}>title</h3>
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
            <h3 style={h3s}>title</h3>
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
            <h3 style={h3s}>title</h3>
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
            <h3 style={h3s}>title</h3>
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
            <h3 style={h3s}>title</h3>
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
            <h3 style={h3s}>title</h3>
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
          <span id="backend"></span>
          <div style={sections}>
            <h3 style={h3s}>Backend</h3>
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
            <h3 style={h3s}>title</h3>
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
              <span id='css'></span>
              <li>
                <p style={{ fontWeight: 'bold' }}>
                  Q. What's with all the javascript styling? Why didn't you use CSS?
                </p>
                <p>
                  A. There is good reason for this. CSS stylesheets have a
                  time-cost when it comes to processing. In short, it slows your
                  site down. In a normal site, this no issue as a micro-fraction
                  of a second of lag, is not noticable. Our project re-renders
                  almost constantly, particularly on the canvas components as it
                  has to re-render whenever the user updates their picture. If
                  CSS is thrown into the mix, it will NOTICABLY slow down that
                  process and make the app almost unusable. If you incorporate
                  CSS, try to only use it on the landing page or some other part
                  of the app that doesn't re-rending frequently. We use CSS
                  extremely sparingly throughout the project. Many of the existing CSS pages are vestigial and just havn't been deleted yet.
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

          <span id="17"></span>
          <div style={sections}>
            <h3 style={h3s}>Known Issues</h3>
            <ul>
              <li id="jsx">
               
              </li>
              <li>
               Input to add tags to projects not yet completed.
              </li>
              <li>
               When modals are open, the size of the images in the background also get huge. 
              </li>
              <li>
                The project is not fully responsive or mobile friendly.
              </li>
              <li>
               
              </li>
              <li>
              
              </li>
            </ul>
          </div>

          <span id="18"></span>
          <div style={sections}>
            <h3 style={h3s}>thing</h3>
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
          <span id="18"></span>
          <div style={sections}>
            <h3 style={h3s}>thing</h3>
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
          <span id="18"></span>
          <div style={sections}>
            <h3 style={h3s}>thing</h3>
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




        </div>
      </div>
     
    </div>
  );
};

export default Docs;
