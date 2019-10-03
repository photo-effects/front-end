import React, { Component } from "react";

import Box from '../../components/CanvasArea/Box';

class CanvasArea extends Component {
  state = {
    items: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.items) {
      return {
        items: nextProps.items
      };
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div 
        style={ container }
        id="canvasTarget"
      >
        { items.length > 1 ? (
          this.state.items.map((item, i) => (
            <Box
              key={i}
              item={item}
              bringToTop={this.props.bringToTop}
              setItem={this.props.setItem}
              getJsonData={this.props.getJsonData}
              removeImage={this.props.removeImage}
             
            />
          ))
        ) : 
        items.length === 1 ? (
          <Box
            item={items[0]}
            bringToTop={this.props.bringToTop}
            setItem={this.props.setItem}
            getJsonData={this.props.getJsonData}
            removeImage={this.props.removeImage}
          />
        ) : (
          <div></div>
        )}
        {/* <div style={ flexBox }>
          <div style={ flexBox2 }>
          <img style={ imgSize } src={this.props.image} />
        </div>
        </div> */}
      </div>
    );
  }
}

const container = {
  display: 'flex',
  height: "80%",
  width: '100%',
  background: "whitesmoke",
  border: '1px solid gray',
};

const flexBox = {
 display: 'flex',
 alignSelf: 'center',
 justifyContent: 'center',
 margin: '0 auto',
 background: 'white',
 border: '1px solid gray',
 width: '90%',
 height: '90%',
}

const flexBox2 = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '0 auto',
  overflow: 'hidden',
  width: '100%'
}

const imgSize = { 
  display: 'flex',
  alignContent: 'center',
  alignSelf: 'center',
  height: '90%',
  minWidth: '100%',
}



export default CanvasArea;
