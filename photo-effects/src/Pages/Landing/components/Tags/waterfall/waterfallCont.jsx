import React, { useEffect, useState } from 'react';
import Photolist from './Photolist';
import './waterfall.css';
import axios from 'axios';

const waterfallCont = {
  backgroundImage: "linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa4e9, #7aaeef, #6bb7f1, #56c2f4, #44cbf3, #3bd5ee, #43dde6)" ,
  color: "whitesmoke" ,
  margin: "auto" ,
  marginTop: "20px" ,
  textAlign: "center" ,
  fontSize: "5rem" ,
  opacity: "0.9" ,
  height: "100%" ,
  paddingTop: "40px" ,
  height: "100%"
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