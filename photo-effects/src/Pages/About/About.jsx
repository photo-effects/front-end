import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Landing/components/nav/Navbar';
import Footer from '../Landing/components/Footer/Footer';
import christian from  '../../assetts/christian.jpg';
import jasmine from  '../../assetts/jasmine.jpg';
import douglas from  '../../assetts/douglas.png';
import edgar from  '../../assetts/edgar.jpg';
import bugajski from  '../../assetts/bugajski.jpg';
import nicholas from  '../../assetts/nicholas.png';

const divColor = {
  margin: '0 auto' ,
  display: 'flex' ,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%' ,
  marginTop: '90px',
  fontSize: '36px'
}

const divColor2 = {
  margin: '0 auto' ,
  display: 'flex' ,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%' ,
  marginTop: '90px',
  fontSize: '36px',
}

const aboutSection = {
  marginTop: '10px' ,
  padding: '25px' ,
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: '8px' ,
  backgroundColor: '#364F6B' ,
  color: 'white',
  fontWeight: 'none'
 

}

const teamSection = {
  marginTop: '10px' ,
  padding: '25px' ,
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: '8px' ,
  backgroundColor: '#364F6B' ,
  color: 'white',
  fontWeight: 'none',
  width: '80%'
}

const listWrap = {
  display: 'flex' ,
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '10px'
}

const listItem = {
  boxShadow: '2px 2px 4px 2px rgba(59,63,66, 0.8)',
  height: '300px' ,
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5px',
  backgroundColor: '#FC5185' ,
  borderRadius: '8px'
}

const bodyColor = {
  backgroundColor: '#D0D0D0'
}

const footerExtra = {
  marginBottom : '25px '
}

const linkStyle = {
  border: "1px solid black" ,
  borderRadius: '8px' ,
  backgroundColor: "#364F6B",
  marginTop: '25px',
  fontSize: '16px',
  textDecoration: 'none',
  padding: '5px',
  color: 'white'
}

const profilePic = {
  height: '150px',
  width: '150px',
  marginTop: '50px'
}

const buttonStyle = {
  marginTop: '10px',
  width: '70px',
  height: '30px',
  border: '1px solid grey',
  backgroundColor: '#d0d0d0'
}


const About = (props) => {
  return (
    <div style={bodyColor}>
      <Navbar auth={props.auth} />
      
      <div>
        <h1>This has to be here</h1>

        <div style={divColor}>
          <h2 style={{color:'#364F6B', textShadow: '1px 1px grey'}}> About The Team</h2>
          <p style={teamSection}> 
            Photo Effects was created by a Team from Lambda School
            with the intentions on creating a full scale web application
            within the likes of real companies. It was built over a 4
            month time frame, worked on part time by the team.
            
          </p>
        </div>

        <div style={divColor}>
          <p style={aboutSection}> 
            The team behind Photo Effects :
            <ul style={listWrap}>
              <li style={listItem}>Christian Ford 
              <img style={profilePic} src={christian} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>

              <li style={listItem}>Jasmine Logan
              <img style={profilePic} src={jasmine} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>

              <li style={listItem}>Douglas Jordan
              <img style={profilePic} src={douglas} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>
            </ul>

            <ul style={listWrap}>
              <li style={listItem}>Edgar Flores
              <img style={profilePic} src={edgar} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>

              <li style={listItem}>Nicholas Rafeek
              <img style={profilePic} src={nicholas} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>

              <li style={listItem}>Joe Bugajksi
              <img style={profilePic} src={bugajski} />
              <Link style={linkStyle} to="www.github.com" target="_blank"> Git Hub </Link>
              </li>
            </ul>
           </p>
        </div>

        <div style={divColor2}></div>

        
      </div>

      <Footer style={footerExtra} />

    </div>
  )
}

export default About
