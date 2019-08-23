import React from 'react';
import Navbar from '../components/Landing/nav/Navbar'

const Landing = () => {
  
  return (
    <div>
      <Navbar/>
      <div style={landing}>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex exercitationem voluptatum ullam accusantium itaque ea. Dolor labore sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt dicta!</p>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex exercitationem voluptatum ullam accusantium itaque ea. Dolor labore sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt dicta!</p>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex exercitationem voluptatum ullam accusantium itaque ea. Dolor labore sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt dicta!</p>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex exercitationem voluptatum ullam accusantium itaque ea. Dolor labore sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt dicta!</p>
        </div>
      
    </div>
  )
}

export default Landing

const landing = {
  paddingTop:'11vh',
  backgroundColor: '#633875',
  color: 'black',
  fontSize:'3rem'
}