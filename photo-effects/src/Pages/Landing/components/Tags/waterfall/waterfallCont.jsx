import React, { useEffect, useState } from "react";
import Photolist from "./Photolist";
import Footer from "../../../components/Footer/Footer";
import "./waterfall.css";
import axios from "axios";

const waterfallCont = {
  background: "#eaeaea",
  color: "whitesmoke",
  margin: "auto",
  marginTop: "20px",
  textAlign: "center",
  fontSize: "5rem",
  // opacity: "1" ,
  height: "100%",
  paddingTop: "40px",
  borderTop: "#364F6B 1px solid",
  zIndex: "25"
};

const WaterfallCont = props => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://photo-effects-backend-stage-1.herokuapp.com/canvas/published"
      )
      .then(res => {
        setPics(res.data);
      });
  }, []);
  const filteredpics = pics.filter(pic => pic.tags === `${props.sortBy}`);
  return (
    <div style={waterfallCont}>
      <Photolist pics={filteredpics.length === 0 ? pics : filteredpics} />
      <Footer />
    </div>
  );
};
export default WaterfallCont;
