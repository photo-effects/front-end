import React from 'react';
import './Footer.css';
import navLogo from '../../../assetts/photoLogo.png';

const footerContainer = {
    display: "flex" ,
    alignItems: "center" ,
    justifyContent: "center" ,
    backgroundColor:  "#364f6b" ,
    borderRadius: "10px" ,
    borderTopLeftRadius: "7px" ,
    height: "200px" ,
    width: "95%" ,
    margin: "1% 0",
    marginLeft: "38px"
}

const footerCard = {
  display: "flex" ,
  flexDirection: "row" ,
  justifyContent: "space-between" ,
  alignItems: "center" ,
  textAlign: "left" ,  
  height: "70%" ,
  width: "95%" ,
  backgroundColor: "#fc5185" ,
  color: "white" ,
  borderRadius: "7px" ,
  fontSize: "16px"
}

const footerLinks = {
  paddingRight: "5px" ,
  marginLeft: "2%" ,
  marginRight: "2%"
}

const navbarLogoFooter = {
    width: "250px"
}

const Footer = () => {
    return (

        
        <div style={footerContainer}>
            <div style={footerCard}>
                <div className="footerLinks">
                    <p> Home </p>
                    <p> Sign Up </p>
                    <p> Login </p>
                    <p> Dashboard </p>
                    <p> Canvas </p>
                    
                </div>
                <img src= {navLogo} alt="navbar logo" style={navbarLogoFooter}/>
                <div className="footerLinks">
                    <p> 
                        <i class="fab fa-facebook-square"> </i>
                         Facebook 
                    </p>
                    <p> 
                        <i className="fab fa-twitter-square"> </i>
                         Twitter 
                    </p>
                    <p> 
                        <i class="fab fa-instagram"> </i>
                         Instagram 
                    </p>
                    <p> 
                        <i class="fab fa-linkedin"> </i>
                         LinkedIn 
                    </p>
                    <p> 
                        <i class="fab fa-instagram"> </i>
                        Contact 
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
export default Footer;
