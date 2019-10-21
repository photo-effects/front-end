import React, { Component } from 'react';

import Box from '../../components/CanvasArea/Box';
import Paint from '../../components/LeftPanelArea/Tools/Paint/Paint';

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
    const { image } = this.props;

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
      width: image ? 'auto' : '100%',
      height: image ? 'auto' : '100%',
      position: 'relative'
    };

    const hidden = {
      height: 'auto',
      width: 'auto',
      zIndex: -1000000000
    };

    return (
      <div style={container} ref="container">
        <div ref="parent" id="capture" style={bg}>
          {items.length > 1 ? (
            this.state.items.map((item, i) => {
              if (item.type === 'Paint') {
                return (
                  <Paint
                    z={item.props.style.zIndex}
                    id={item.props.id}
                    setPaint={this.props.setPaint}
                    bringToTop={this.props.bringToTop}
                  />
                );
              } else
                return (
                  <Box
                    key={i}
                    item={item}
                    bringToTop={this.props.bringToTop}
                    setItem={this.props.setItem}
                    getJsonData={this.props.getJsonData}
                    removeImage={this.props.removeImage}
                    parent={this.refs.parent}
                    container={this.refs.container}
                  />
                );
            })
          ) : items.length === 1 ? (
            items[0].type === 'Paint' ? (
              <Paint
                z={items[0].props.style.zIndex}
                id={items[0].props.id}
                setPaint={this.props.setPaint}
                bringToTop={this.props.bringToTop}
              />
            ) : (
              <Box
                item={items[0]}
                bringToTop={this.props.bringToTop}
                setItem={this.props.setItem}
                getJsonData={this.props.getJsonData}
                removeImage={this.props.removeImage}
                parent={this.refs.parent}
                container={this.refs.container}
              />
            )
          ) : (
            <div></div>
          )}
          {this.props.image ? (
            <img ref="image" src={this.props.image} style={hidden} alt="img" />
          ) : null}
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
