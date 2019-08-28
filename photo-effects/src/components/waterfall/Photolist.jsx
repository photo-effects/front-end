import React, { Component } from 'react';
import './waterfall.css';
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
          padding: '20px'
        }}
      >
        {this.props.pics.map(pic => (
          <Fade bottom big cascade>
          <div style={{ margin: 'auto', fontSize: '1.8rem' }}>
            {/* <h4>{pic.title}</h4> */}
            <img
              src={pic.url}
              alt="pic"
              style={{ height: '200px', width: '200px' }}
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
