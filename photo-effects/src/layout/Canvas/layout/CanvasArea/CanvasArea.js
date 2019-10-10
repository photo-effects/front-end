import React, { Component } from 'react';

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

    const container = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '75%',
      height: 'calc(100% - 72px)',
      position: 'absolute',
      bottom: 0,
      right: 0,
      background: 'whitesmoke',
      border: '1px solid gray'
    };

    const bg = {
      width: 'auto',
      height: 'auto',
      border: '2px solid red',
    };

    const hidden = {
      height: '90%',
      width: 'auto',
      zIndex: -1000000000
    };

    return (
      <div style={container}>
        <div ref="parent" id="capture" style={bg}>
          { items.length > 1 ? (
            this.state.items.map((item, i) => (
              <Box
                key={i}
                item={item}
                bringToTop={this.props.bringToTop}
                setItem={this.props.setItem}
                getJsonData={this.props.getJsonData}
                removeImage={this.props.removeImage}
                parent={this.refs.parent}
              />
            ))
          ) : items.length === 1 ? (
            <Box
              item={items[0]}
              bringToTop={this.props.bringToTop}
              setItem={this.props.setItem}
              getJsonData={this.props.getJsonData}
              removeImage={this.props.removeImage}
              parent={this.refs.parent}
            />
          ) : (
            <div></div>
          )}
          <img ref="image" src={this.props.image} style={hidden} />
        </div>
      </div>
    );
  }
}

const flexBox = {
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  background: 'white',
  border: '1px solid gray',
  width: '60%',
  height: '80%'
};

const flexBox2 = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '0 auto',
  overflow: 'hidden',
  width: '100%'
};

const imgSize = {
  display: 'flex',
  alignContent: 'center',
  alignSelf: 'center',
  // border: '1px solid yellow',
  height: '600px',
  minWidth: '100%'
};

export default CanvasArea;
