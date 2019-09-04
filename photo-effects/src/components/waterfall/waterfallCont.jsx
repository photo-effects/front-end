import React, { useEffect, useState } from 'react';
import Photolist from './Photolist';
import './waterfall.css';
import axios from 'axios';

const WaterfallCont = () => {

  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/photos?_limit=100')
      .then(res => {
        console.log(res.data);
        setPics(res.data);
      });
  }, []);

  return (
    <div className="waterfallcont" >
      <Photolist pics={pics}/>
     
    </div>
  );
};

export default WaterfallCont;
