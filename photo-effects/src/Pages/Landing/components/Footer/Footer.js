import React, { Component } from 'react';
import navLogo from '../../../../assetts/photoLogo.png';

const Footer = () => {
  const links = ['Home', 'Sign Up', 'Login', 'Dashboard', 'Canvas'];
  const socials = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-square'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter-square'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Contact',
      icon: 'fab fa-instagram'
    }
  ];

  const footerContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#364f6b',
    borderRadius: '10px',
    borderTopLeftRadius: '7px',
    height: '200px',
    width: '95%',
    margin: '1% 0',
    marginLeft: '38px',
    marginBottom:'15px'
  };
  
  const footerCard = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    height: '70%',
    width: '95%',
    backgroundColor: '#fc5185',
    color: 'white',
    borderRadius: '7px',
    fontSize: '16px'
  };
//C3D1D3
  return (
    <div style={footerContainer}>
      <div style={footerCard}>
        <div>
          {links.map((link, i) => (
            <Link link={link} key={i} />
          ))}
        </div>

        <Img 
            src={navLogo} 
            alt="navbar logo" 
        />

        <div>
          {socials.map((social,i) => (
            <Link social link={social.name} icon={social.icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

class Link extends Component {
  state = {
    hover: false
  };

  render() {
    const link = {
      padding: '3px',
      cursor: 'pointer',
      color: this.state.hover ? '#55d3dd' : 'white'
    };

    return (
      <p
        onMouseEnter={
          !this.state.hover ? () => this.setState({ hover: true }) : null
        }
        onMouseLeave={
          this.state.hover ? () => this.setState({ hover: false }) : null
        }
        style={link}
      >
        {this.props.social && (
          <i className={this.props.icon} style={{ marginRight: '5px' }} />
        )}
        {this.props.link}
      </p>
    );
  }
}

class Img extends Component {
    state = {
        hover: false
    }

    render() {
        const style = {
            width: '250px',
            cursor: 'pointer',
            filter: this.state.hover ? 'drop-shadow(2px 2px 2px #55d3dd)' : null
        }

        return (
            <img 
                onMouseEnter={
                    !this.state.hover ? () => this.setState({ hover: true }) : null
                }
                onMouseLeave={
                    this.state.hover ? () => this.setState({ hover: false }) : null
                }
                src = { this.props.src }
                alt = { this.props.alt }
                style = { style }
            />
        )
    }
}

export default Footer;
