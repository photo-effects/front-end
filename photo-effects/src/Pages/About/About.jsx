import React from 'react'
import Navbar from '../Landing/components/nav/Navbar';

const About = (props) => {
  return (
    <div>
      <Navbar auth={props.auth} />
      <div>
      <h1>About</h1>
      </div>
    </div>
  )
}

export default About
