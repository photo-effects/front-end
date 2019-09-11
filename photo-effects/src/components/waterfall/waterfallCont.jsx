import React, { useEffect, useState } from 'react';
import Photolist from './Photolist';
import './waterfall.css';
import axios from 'axios';

import Footer from '../Landing/Footer/Footer';
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
      <Footer />
     
    </div>
  );
};
export default WaterfallCont;