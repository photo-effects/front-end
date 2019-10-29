import React, { Component } from "react";

import Box from "../../components/CanvasArea/Box";
import Paint from "../../components/LeftPanelArea/Tools/Paint/Paint";

class CanvasArea extends Component {
  state = {
    items: [],
    maxHeight: 0
  };

  componentDidMount() {
    const container = this.refs.container.getBoundingClientRect();
    this.setState({ maxHeight: container.height - 72 });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.items) {
      return {
        items: nextProps.items
      };
    } else return null;
  }

  render() {
    const { items, maxHeight } = this.state;
    const { image } = this.props;

    const container = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "75%",
      height: "calc(100% - 72px)",
      position: "absolute",
      bottom: 0,
      right: 0,
      background: "whitesmoke",
      border: "1px solid gray"
      // border: '5px solid red'
    };

    const bg = {
      width: image ? "auto" : "100%",
      height: image ? "auto" : "100%",
      position: "relative"
    };

    const hidden = {
      maxHeight,
      width: "auto",
      zIndex: -1000000000
    };

    return (
      <div style={container} ref="container">
        <div ref="parent" id="capture" style={bg}>
          {items.length > 1 ? (
            this.state.items.map((item, i) => {
              if (item.type === "Paint") {
                return (
                  <Paint
                    z={item.props.style.zIndex}
                    id={item.props.id}
                    setPaint={this.props.setPaint}
                    bringToTop={this.props.bringToTop}
                    parent={this.refs.parent}
                    container={this.refs.container}
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
                    setTextbox={this.props.setTextbox}
                  />
                );
            })
          ) : items.length === 1 ? (
            items[0].type === "Paint" ? (
              <Paint
                z={items[0].props.style.zIndex}
                id={items[0].props.id}
                setPaint={this.props.setPaint}
                bringToTop={this.props.bringToTop}
                parent={this.refs.parent}
                container={this.refs.container}
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
                setTextbox={this.props.setTextbox}
              />
            )
          ) : (
            <div></div>
          )}
          {this.props.image ? (
            <img
              ref="image"
              src={this.props.image.secure_url}
              style={hidden}
              alt="img"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CanvasArea;
