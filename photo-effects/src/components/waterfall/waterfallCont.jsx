import React, { useEffect, useState } from 'react';
import Photolist from './Photolist';
import './waterfall.css';
import axios from 'axios';

const WaterfallCont = props => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get('https://photo-effects-backend.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data);
        setPics(res.data);
      });
  }, []);
  const filteredpics = pics.filter(pic => pic.tags === `${props.sortBy}`);
  console.log(filteredpics);
  console.log(pics);
  console.log(props.sortBy);
  return (
    <div className="waterfallcont">
      <Photolist pics={filteredpics.length === 0 ? pics : filteredpics} />
    </div>

   
  );
};
export default WaterfallCont;