import React from 'react'
import Navbar from '../Landing/components/nav/Navbar';

const divColor = {
  display: 'flex' ,
  flexDirection: 'column',
  justifyContent: 'center' ,
  alignItems: 'center',
  marginTop: '80px',
  fontSize: '36px'
}

const center = {
  marginTop: '10px' ,
  display: 'flex' ,
  flexDirection: 'column',
  justifyContent: 'center' ,
  alignItems: 'center' ,
  fontSize: '24px',
  textAlign: 'center',
  border: '1px solid black',
  
}

const About = (props) => {
  return (
    <>
      <Navbar auth={props.auth} />
      
      <div>
        <h1>This has to be here</h1>
        <h2 style={divColor}> About The Team</h2>
        <h3 style={center}> 
          Photo Effects was created by a Team from Lambda School
          with the intentions on creating a full scale web application
          within the likes of real companies. It was built over a 4
          month time frame, worked on part time by the team.
          
        </h3>
      </div>
    </>
  )
}

export default About
