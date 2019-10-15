import React, { useEffect, useState } from 'react';
import Photolist from './Photolist';
import './waterfall.css';
import axios from 'axios';

const waterfallCont = {
  background: '#D0D0D0',
  color: "whitesmoke" ,
  margin: "auto" ,
  marginTop: "20px" ,
  textAlign: "center" ,
  fontSize: "5rem" ,
  opacity: "0.9" ,
  height: "100%" ,
  paddingTop: "40px" 
  
}

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
    <div style={waterfallCont}>
      <Photolist pics={filteredpics.length === 0 ? pics : filteredpics} />
    </div>

   
  );
};
export default WaterfallCont;