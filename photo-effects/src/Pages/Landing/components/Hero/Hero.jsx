import React from "react";

const hero = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  padding: "100px 60px 0px 60px",
  position: "absolute",
  margin: "auto",
  width: "100%",
  top: "60px",
  zIndex: "1"
};

const title = {
  marginTop: "50px",
  fontSize: "8rem",
  color: "whitesmoke",
  width: "45%",
  textShadow: "-2px 1px 1px rgb(40, 5, 145)"
};

const video = {
  boxShadow: "-2px 1px 3px rgb(40, 5, 145)",
  border: "whitesmoke 1px solid",
  borderRadius: "8px",
  width: "45%",
  height: "350px"
};

const Hero = () => {
  return (
    <div style={hero}>
      <div style={title}>
        Make your Next Design <br /> A Breeze!
      </div>
      <iframe
        title="landing video"
        src="https://www.youtube.com/embed/qbuMLcZ5Ofw"
        width="100%"
        height="100%"
        style={video}
        display="initial"
      />
    </div>
  );
};
export default Hero;
