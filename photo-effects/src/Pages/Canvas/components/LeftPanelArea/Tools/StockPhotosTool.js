import React, { Component } from "react";
import axios from "axios";

import Photo from "./Photo";

import { tab_content_photos, _photo } from "./library";

export default class StockPhotosTool extends Component {
  state = {
    photos: [],
    isFetching: true
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://api.pexels.com/v1/curated?per_page=15&page=1", {
          headers: {
            Authorization:
              "563492ad6f917000010000014867b6499ef7493dadf228acfc7c3c35" // Pexels API Key
          }
        })
        .then(res =>
          this.setState({ photos: res.data.photos, isFetching: false })
        )
        .catch(err => console.log(err));
    }, 100);
  }

  render() {
    return (
      <div style={tab_content_photos}>
        {this.state.isFetching === true ? (
          <>
            <div style={cyan}></div>
            <div style={pink}></div>
            <div style={yellow}></div>
          </>
        ) : (
          <>
            {this.state.photos.map(photo => {
              return (
                <div style={_photo}>
                  <Photo
                    url={photo.src.original}
                    addItem={this.props.addItem}
                    alt={photo.photographer}
                    key={photo.src.small}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

const photo_landing = {
  height: "80px",
  width: "100px",
  border: "0px",
  borderRadius: "5px",
  marginRight: "5px",
  opacity: "0.7"
};

const cyan = {
  ...photo_landing,
  background: "#44DDE6"
};

const pink = {
  ...photo_landing,
  background: "#FC5185"
};

const yellow = {
  ...photo_landing,
  background: "#FFDB27"
};
