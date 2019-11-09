import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../Landing/components/nav/Navbar';
import Footer from '../Landing/components/Footer/Footer';
import christian from '../../assetts/christian.jpg';
import jasmine from '../../assetts/jasmine.jpg';
import douglas from '../../assetts/douglas.png';
import edgar from '../../assetts/edgar.jpg';
import bugajski from '../../assetts/bugajski.jpg';
import nicholas from '../../assetts/nicholas.png';
import ashley from '../../assetts/ashley.JPG';
import Pete from '../../assetts/pete.JPG';

const divColor = {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  marginTop: '90px',
  fontSize: '36px'
};

const divColor2 = {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  marginTop: '90px',
  fontSize: '36px'
};

const aboutSection = {
  marginTop: '10px',

  padding: '25px',
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: '8px',
  backgroundColor: '#364F6B',
  color: 'white',
  fontWeight: 'none'
};

const teamSection = {
  marginTop: '10px',
  padding: '25px',
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: '8px',
  backgroundColor: '#364F6B',
  color: 'white',
  fontWeight: 'none',
  width: '80%'
};

const listWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '10px'
};

const listItem = {
  boxShadow: '2px 2px 4px 2px rgba(59,63,66, 0.8)',
  height: '300px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '#FC5185',
  borderRadius: '8px',
  margin: '10px',
  paddingTop: '10px'
};

const bodyColor = {
  backgroundColor: '#D0D0D0'
};

const footerExtra = {
  marginBottom: '25px '
};

const linkStyle = {
  marginTop: '25px',
  fontSize: '16px',
  textDecoration: 'none',
  padding: '5px',
  color: 'white'
};

const profilePic = {
  height: '150px',
  width: '150px',
  marginTop: '50px',
  borderRadius: '8px'
};

const iconList = {
  display: 'flex',
  width: '100px',
  justifyContent: 'space-around',
  marginTop:'-12px'
}

const About = props => {
  return (
    <d style={bodyColor}>
      <Navbar auth={props.auth} />

      <d>
        <h1>This has to be here</h1>

        <div style={divColor}>
          <h2 style={{ color: '#364F6B', textShadow: '1px 1px grey', margin: '10px' }}>
            {' '}
            About The Team
          </h2>
          <p style={teamSection}>
            Photo Effects was created by a Team from Lambda School with the
            intentions on creating a full scale web application within the likes
            of real companies. It was built over a 4 month time frame, worked on
            part time by the team.
          </p>
        </div>

        <d style={divColor}>
          <p style={aboutSection}>
            The team behind Photo Effects :
            <ul style={listWrap}>
              <div>
                <li style={listItem}>
                  Christian Ford
                  <img
                    style={profilePic}
                    src={christian}
                    alt="Christian Ford"
                  />
                  <div
                    style={iconList}
                  >
                    <a
                      style={linkStyle}
                      href="https://github.com/Christian-Ford"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a
                      style={linkStyle}
                      href="https://www.linkedin.com/in/devchristianford/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </li>
              </div>

              <div>
                <li style={listItem}>
                  Jasmine Logan
                  <img style={profilePic} src={jasmine} alt="Jasmine Logan" />
                  <div
                    style={iconList}
                  >
                    <a
                      style={linkStyle}
                      href="https://github.com/claridiva2000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a
                      style={linkStyle}
                      href="https://www.linkedin.com/in/jasmineclogan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </li>
              </div>

              <div>
                <li style={listItem}>
                  Douglas Jordan
                  <img style={profilePic} src={douglas} alt="Douglas Jordan" />
                  <div
                    style={iconList}
                  >
                    <a
                      style={linkStyle}
                      href="https://github.com/douglasjordan2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    {/*  <a
                      style={linkStyle}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    > 
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a> */}
                  </div>
                </li>
              </div>
            </ul>
            <ul style={listWrap}>
              <div>
                <li style={listItem}>
                  Edgar Flores
                  <img style={profilePic} src={edgar} alt="Edgar Flores" />
                  <div
                    style={iconList}
                  >
                    <a style={linkStyle} href="https://github.com/efloreslb"
                     target="_blank"
                     rel="noopener noreferrer">
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a
                      style={linkStyle}
                      href="https://www.linkedin.com/in/efloresef/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </li>
              </div>

              <div>
                <li style={listItem}>
                  Nicholas Rafeek
                  <img
                    style={profilePic}
                    src={nicholas}
                    alt="Nicholas Rafeek"
                  />
                  <div
                    style={iconList}
                  >
                    <a style={linkStyle} href="https://github.com/Reyaad510"  target="_blank"
                rel="noopener noreferrer">
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a
                      style={linkStyle}
                      href="https://www.linkedin.com/in/nicholasrafeek/"  target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </li>
              </div>

              <div>
                <li style={listItem}>
                  Joe Bugajksi
                  <img style={profilePic} src={bugajski} alt="Joe Bugajksi" />
                  <div
                    style={iconList}
                  >
                    <a style={linkStyle} href="https://github.com/JoeBugajski"  target="_blank"
                rel="noopener noreferrer">
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a
                      style={linkStyle}
                      href="https://www.linkedin.com/in/joseph-bugajski-8a246116a/"  target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </li>
              </div>

              <div>
                <li style={listItem}>
                  Ashley LaNeave
                  <img style={profilePic} src={ashley} alt="Ashley LaNeave" />
                  <div
                    style={iconList}
                  >
                    <a style={linkStyle} href="https://github.com/digitalAsh"  target="_blank"
                rel="noopener noreferrer">
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    {/* <a
                      style={linkStyle}
                      href="https://www.linkedin.com"  target="_blank"
                rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a> */}
                  </div>
                </li>
              </div>

              <d>
                <li style={listItem}>
                  Pete L'Duck
                  <img style={profilePic} src={Pete} alt="Pete L'Duck" />
                  <div
                    style={iconList}
                  >
                    <a
                      style={linkStyle}
                      href="https://github.com/claridiva2000"
                    >
                      <i className="fab fa-github-square fa-2x"></i>
                    </a>
                  </div>
                </li>
              </d>
            </ul>
          </p>
        </d>

        <div style={divColor2}></div>
      </d>

      <Footer style={footerExtra} />
    </d>
  );
};

export default About;
