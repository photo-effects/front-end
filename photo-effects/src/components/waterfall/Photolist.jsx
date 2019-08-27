import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './waterfall.css';

const Photolist = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get('https://photo-effects-backend-stage-1.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data);
        setPics(res.data);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin:'auto', background:'#171544',width:'96%', borderRadius:'10px', padding:'20px' }}>
      {pics.map(pic => (
       
          <div style={{margin:'auto', fontSize:'1.8rem'}}>
            <h4>{pic.title}</h4>
            <img
              src={pic.secure_url}
              alt="pic"
              style={{ height: '200px', width: '200px' }}
            />
            <p>Tags:{pic.tags}</p>
          </div>
          
      ))}
    </div>
  );
};

export default Photolist;
