import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import uuidv4 from 'uuid/v4';
import axios from 'axios';
import withAuth from '../../components/Auth/AuthOne/withAuth';

import ToolsArea from './layout/ToolsArea/ToolsArea';

import CanvasArea from './layout/CanvasArea/CanvasArea';

export class Canvas extends Component {
  state = {
    items: [],
    w: 0,
    image: null,
    imgUrl: [],
    preview: null,
    projectTitle: ''
  };

  componentDidMount() {
    this.setState({
      w: (ReactDOM.findDOMNode(this).getBoundingClientRect().width / 4) * 3,
      image: this.props.image
    });
  }

  handleScreenshot = () => {
    html2canvas(document.querySelector('#capture'), {
      proxy: 'https://photo-effects-backend-stage-1.herokuapp.com',
      useCORS: true
    }).then(canvas => {
      const image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      this.setState({ preview: image });

      const link = document.createElement('a');
      link.download = this.state.projectName + '.png';
      link.href = image;
      link.click();
    });
  };

  updateProject = () => {
    const updatedProject = {
      p_name: this.state.projectTitle,
      p_data: JSON.stringify(this.state.items),
      p_image: this.state.imgUrl
    };

    axios
      .put(
        `https://photo-effects-backend-stage-1.herokuapp.com/canvas/${localStorage.getItem(
          'projectId'
        )}`,
        updatedProject
      )
      .then(res => {
        console.log('saved?', res.data)
      })
      .catch(err => console.log(err));
  };

  saveImg = () => {
    const formData = new FormData();
    formData.append('image', this.state.preview);
    console.log(this.state.preview);

    axios
      .post(
        `https://photo-effects-backend-stage-1.herokuapp.com/cloudinary/upload2`,
        formData
      )
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(imgUrl => {
        this.setState({
          imgUrl
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // this.setState({ items: JSON.parse("[{\"type\":\"img\",\"key\":null,\"ref\":null,\"props\":{\"height\":492,\"width\":293.875,\"x\":270.8125,\"y\":-27,\"style\":{\"zIndex\":1},\"id\":\"88b2af17-a46e-4c04-bba2-30508737c444\",\"src\":\"https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg\"},\"_owner\":null,\"_store\":{}}]") })

  bringToTop = id => {
    let z = this.state.items
      .map(item => item.props.style.zIndex)
      .sort((a, b) => b - a)[0];

    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            {...item.props}
            style={{
              ...item.props.style,
              zIndex: z + 1
            }}
          >
            {item.props.children}
          </item.type>
        );
      } else return item;
    });

    this.setState({ items });
  };

  addItem = item => {
    let z = this.state.items
      .map(item => item.props.style.zIndex)
      .sort((a, b) => b - a)[0];

    let add_item;

    if (item === 'Paint') {
      add_item = () => ({
        type: 'Paint',
        props: {
          id: uuidv4(),
          style: { zIndex: this.state.items.length ? z * 100 + 1 : 100 }
        }
      });
    } else {
      add_item = () => (
        <item.type
          height={100}
          width={100}
          x={this.state.w / 2 - 100}
          y={100}
          style={{
            zIndex: this.state.items.length ? z * 100 + 1 : 100
          }}
          id={uuidv4()}
          src={item.type === 'img' ? item.props.src : null}
          alt={item.type === 'img' ? item.props.title : null}
        />
      );
    }

    let items =
      this.state.items.length === 0 && item === 'Paint'
        ? [<div style={{ zIndex: 0 }}></div>, add_item()]
        : [...this.state.items, add_item()];

    this.setState({ items });
  };

  filter = id => {
    return this.state.items.filter(item => item.props.id !== id);
  };

  removeImage = id => {
    this.setState({ items: this.filter(id) });
  };

  setItem = (id, w, h, x, y) => {
    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            {...item.props}
            width={w}
            height={h}
            // x={x}
            // y={y}
            x={this.state.items.length === 1 ? x - w / 2 : x}
            y={this.state.items.length === 1 ? y - h / 2 : y}
          >
            {item.props.children}
          </item.type>
        );
      } else return item;
    });

    this.setState({ items });
  };

  setPaint = (id, image, x, y, w, h) => {
    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <img {...item.props} width={w} height={h} x={x} y={y} src={image} />
        );
      } else return item;
    });

    this.setState({ items });
  };

  getJsonData = () => {
    console.log(JSON.stringify(this.state.items));
  };

  render() {
    console.log(this.state.items);
    return (
      <div style={page}>
        <ToolsArea
          auth={this.props.auth}
          addItem={this.addItem}
          handleScreenshot={this.handleScreenshot}
          updateProject={this.updateProject}
          saveImg={this.saveImg}
        />
        <CanvasArea
          items={this.state.items}
          bringToTop={this.bringToTop}
          setItem={this.setItem}
          getJsonData={this.getJsonData}
          removeImage={this.removeImage}
          image={this.state.image}
          saveImg={this.state.saveImg}
          setPaint={this.setPaint}
        />
      </div>
    );
  }
}

export default Canvas;

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex'
};
