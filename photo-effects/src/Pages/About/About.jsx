import React from 'react'
import Navbar from '../Landing/components/nav/Navbar';
import Footer from '../Landing/components/Footer/Footer';

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
  marginTop: '30px' ,
  padding: '25px' ,
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  backgroundColor: '#364F6B' ,
  color: 'white',
  fontWeight: 'none'
 

}

const bodyColor = {
  backgroundColor: '#D0D0D0'
}

const footerExtra = {
  marginBottom : '25px '
}


const About = (props) => {
  return (
    <div style={bodyColor}>
      <Navbar auth={props.auth} />
      
      <div>
        <h1>This has to be here</h1>

        <div style={divColor}>
          <h2 style={{color:'white'}}> About The Team</h2>
          <p style={aboutSection}> 
            Photo Effects was created by a Team from Lambda School
            with the intentions on creating a full scale web application
            within the likes of real companies. It was built over a 4
            month time frame, worked on part time by the team.
            
          </p>
        </div>

        <div style={divColor}>
          <p style={aboutSection}> 
            The team behind Photo Effects :
            <br />
            <br /> Christian Ford
            <br /> Jasmine Logan
            <br /> Douglas Jordan
            <br /> Nicholas Rafeek
            <br /> Edgar Flores
            <br /> Joe Bugajski
           </p>
        </div>

        <div style={divColor2}></div>

        
      </div>

      <Footer style={footerExtra} />

    </div>
  )
}

export default About
