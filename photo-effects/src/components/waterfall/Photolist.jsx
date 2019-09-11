import React, { Component } from 'react';
import './waterfall.css';
import uuidv4 from 'uuid/v4';
// import {Route, Link} from 'react-router-dom';
// import Cardview from './Cardview';
import Fade from 'react-reveal/Fade';

export class Photolist extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 'auto',
          background: '#171544',
          width: '96%',
          borderRadius: '10px',
          paddingTop: '80px',
         
        }}
      >
        {this.props.pics.map((pic, index) => (
          <Fade bottom cascade key = { uuidv4() }>
            <div className='cards' style={{ fontSize: '1rem', background:'#f0f0f0', padding:'10px', width:'300px', height:'350px', margin:'18px', borderRadius:'8px', boxShadow: '2px 2px 4px 2px rgba(67,221,230,1)', cursor:'pointer' 
            // marginTop: index %2 === 0 ? '-140px': '0px', 
                  
                   }}>
              <div style={{height:'100px'}}>
              <h4 style={{color:'#fc5185', fontSize:'2rem', marginBottom:'20px'}}>{pic.title}</h4>
              </div>
              <img
                src={pic.url}
                alt="pic"
                style={{
                  height: '300px',
                  width: '200px', marginTop: index %2 === 0 ? '-140px': '0px' 
                  // alignContent: 'stretch'
                }}
              />
              <p>Tags:{pic.tags}</p>
            </div>
          </Fade>
        ))}
      </div>
    );
  }
}

export default Photolist;
