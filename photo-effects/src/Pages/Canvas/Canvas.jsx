import React, { Component } from "react";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import uuidv4 from "uuid/v4";
import axios from "axios";
import withAuth from "../../components/Auth/AuthOne/withAuth";
import ToolsArea from "./layout/ToolsArea/ToolsArea";
import CanvasArea from "./layout/CanvasArea/CanvasArea";

import TextEdit from "./components/LeftPanelArea/Tools/TextBox/TextEdit";

export class Canvas extends Component {
  state = {
    items: [],
    w: 0,
    image: null,
    // imgUrl: [],
    imgPreview: null,
    projectTitle: "",
    projectSecureUrl: ""
  };

  componentDidMount() {
    if (this.props.image && this.props.image.p_data) {
      let data = this.props.image.p_data.split("");
      let p_data = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i] === "\\") {
          p_data.splice(0, data[i]);
        } else {
          p_data.push(data[i]);
        }
      }

      console.log(p_data.join(""));

      const _ = React.createElement;

      p_data = JSON.parse(p_data.join("")).map(a =>
        a.props.textbox
          ? _(TextEdit, a.props, null)
          : _(a.type, a.props, a.children)
      );

      const image = {
        ...p_data[0],
        secure_url: p_data[0].props.src
      };

      const items = p_data.slice(1, p_data.length);

      this.setState({ items, image });
    } else if (this.props.image) {
      this.setState({ image: this.props.image });
    }

    // this.setState({
    //   w: (ReactDOM.findDOMNode(this).getBoundingClientRect().width / 4) * 3,
    //   image: this.props.image.secure_url || null,
    //   items: JSON.parse(this.props.image.p_data) || null
    // });
  }

  componentDidUpdate() {
    // setTimeout(() => this.saveImageToState(), 60000)
  }

  saveImageToState = () => {
    html2canvas(document.querySelector("#capture"), {
      proxy: "https://photo-effects-backend-stage-1.herokuapp.com",
      useCORS: true
    }).then(canvas => {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      this.setState({ imgPreview: image });
    });
  };



  handleScreenshot = () => {
    html2canvas(document.querySelector("#capture"), {
      proxy: "https://photo-effects-backend-stage-1.herokuapp.com",
      useCORS: true
    }).then(canvas => {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      this.setState({ imgPreview: image });

      const link = document.createElement("a");
      link.download = this.state.projectName + ".png";
      link.href = image;
      link.click();
    });
  };


  handleChange = e => {
    this.setState({
      ...this.state,
      projectTitle: e.target.value
    });
  }

  saveImg = () => {
    this.saveImageToState();
    const public_id = localStorage.getItem("publicId");

    const imgForm = {
      image: this.state.imgPreview,
      options: {
        format: "png",
        overwrite: "true",
        public_id
      }
    };

    console.log(`imgForm:`, imgForm);

    setTimeout(() => {
      axios
        .post(
          `https://photo-effects-backend-stage-1.herokuapp.com/cloudinary/upload2`,
          imgForm
        )
        .then(res => {
          console.log(res);
          this.setState({ projectSecureUrl: res.data.secure_url });
          console.log(res.data.secure_url);

          this.updateProject();
        })
        .catch(err => {
          console.log(err);
        });
    }, 500);
  };

  updateProject = () => {
    console.log(this.state.items);
    let data = JSON.stringify([
      {
        type: "img",
        props: { src: this.state.image.secure_url, style: { zIndex: 0 } }
      },
      ...this.state.items.map(item =>
        item.type === TextEdit ? (
          <div {...item.props}>{item.props.textbox.text}</div>
        ) : (
          item
        )
      )
    ]).split("");
    let p_data = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i] === '"') {
        p_data.push('\\"');
      } else {
        p_data.push(data[i]);
      }
    }

    console.log(p_data.join(""));

    const updatedProject = {
      p_name: this.state.projectTitle,
      p_data: p_data.join(""),
      secure_url: this.state.projectSecureUrl
    };

    setTimeout(() => {
      console.log(this.state.items);
      console.log(typeof JSON.stringify(this.state.items));
      console.log(JSON.stringify(this.state.items));

      console.log(updatedProject);

      axios
        .put(
          `https://photo-effects-backend-stage-1.herokuapp.com/canvas/${localStorage.getItem(
            "projectId"
          )}`,
          updatedProject
        )
        .then(res => {
          console.log("Project updated", res.data);
        })
        .catch(err => console.log("error"));
    }, 500);
  };

  // this.setState({ items: JSON.parse("[{\"type\":\"img\",\"key\":null,\"ref\":null,\"props\":{\"height\":492,\"width\":293.875,\"x\":270.8125,\"y\":-27,\"style\":{\"zIndex\":1},\"id\":\"88b2af17-a46e-4c04-bba2-30508737c444\",\"src\":\"https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg\"},\"_owner\":null,\"_store\":{}}]") })

  // this.setState({ items: JSON.parse() })

  bringToTop = id => {
    let z = this.state.items
      .map(item => item.props.style.zIndex)
      .sort((a, b) => b - a)[0];

    let items = this.state.items.map(item => {
      if ((item.props && item.props.id === id) || item.id === id) {
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
    this.saveImageToState();
  };

  addItem = item => {
    let z = this.state.items
      .map(item => item.props.style.zIndex)
      .sort((a, b) => b - a)[0];

    let add_item;

    if (item === "Paint") {
      add_item = () => ({
        type: "Paint",
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
            zIndex: this.state.items.length ? z * 100 + 1 : 100,
            width: "100%",
            height: "100%"
          }}
          id={uuidv4()}
          textbox={
            item.type === TextEdit
              ? {
                  color: "",
                  background: "",
                  style: "",
                  weight: "",
                  decoration: "",
                  slider: 15,
                  editable: false,
                  text: "text"
                }
              : null
          }
          src={item.type === "img" ? item.props.src : null}
          alt={item.type === "img" ? item.props.title : null}
        />
      );
    }

    let items = [...this.state.items, add_item()];
    // this.state.items.length === 0 && item === "Paint"
    //   ? [<div style={{ zIndex: 0 }}></div>, add_item()]
    //   : [...this.state.items, add_item()];

    this.setState({ items });
    this.saveImageToState();
  };

  filter = id => {
    return this.state.items.filter(item => item.props.id !== id);
  };

  removeImage = id => {
    this.setState({ items: this.filter(id) });
  };

  setItem = (id, w, h, x, y) => {
    let items;
    items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            {...item.props}
            width={w}
            height={h}
            x={x}
            y={y}
            style={{
              ...item.props.style,
              width: "100%",
              height: "100%"
            }}
          >
            {item.props.children}
          </item.type>
        );
      } else return item;
    });

    this.setState({ items });
    this.saveImageToState();
  };

  setTextbox = (id, textbox) => {
    const { x, y } = textbox;

    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            {...item.props}
            x={x}
            y={y}
            textbox={textbox}
            style={item.props.style}
          />
        );
      }
      return item;
    });

    this.setState({ items });
    this.saveImageToState();
  };

  setPaint = (id, image, x, y, w, h) => {
    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <img
            {...item.props}
            width={w}
            height={h}
            x={x}
            y={y}
            src={image}
            alt={"paint layer image"}
          />
        );
      } else return item;
    });

    this.setState({ items });
    this.saveImageToState();
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
          projectTitle={this.state.projectTitle}
          handleChange={this.handleChange}
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
          setTextbox={this.setTextbox}
         
        />
      </div>
    );
  }
}

export default Canvas;

const page = {
  height: "100vh",
  width: "100vw",
  display: "flex"
};
