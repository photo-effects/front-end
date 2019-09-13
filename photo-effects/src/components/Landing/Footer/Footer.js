import React from 'react';
import './Footer.css';
import navLogo from '../../../assetts/photoLogo.png';
const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerCard">
                <div className="footerLinks">
                    <p> Home </p>
                    <p> Sign Up </p>
                    <p> Login </p>
                    <p> Dashboard </p>
                    <p> Canvas </p>
                    
                </div>
                <img src= {navLogo} alt="navbar logo" className="navbarLogoFooter" />
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