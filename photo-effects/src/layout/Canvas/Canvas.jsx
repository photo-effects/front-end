// The Canvas exists as 3 main parts: The Tools Area, the canvas itself, and the toolbar associated with each element.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

// The Tools Area holds all the elements that can be added to the canvas images, (graphics, text, etc). When an element is clicked from the tools area, it gets added to the canvas.
import ToolsArea from './layout/ToolsArea/ToolsArea';

// The Canvas Area holds the canvas and toolbar. The canvas holds each element, and allows them to be dragged, resized, and relayered. The toolbar is distinct for each element, and will only show the toolbar for the element currently being manipulated, or the last element added to the canvas.
import CanvasArea from './layout/CanvasArea/CanvasArea';
import axios from 'axios';

export default class Canvas extends Component {
  state = {
    // These are the items that get added to the canvas via the setItem method.
    items: [],
    w: 0,
    saved: false
  }

  componentDidMount() {
    this.setState({ w: (ReactDOM.findDOMNode(this).getBoundingClientRect().width / 4) * 3 })

    // this.setState({ items: JSON.parse("[{\"type\":\"img\",\"key\":null,\"ref\":null,\"props\":{\"height\":492,\"width\":293.875,\"x\":270.8125,\"y\":-27,\"style\":{\"zIndex\":1},\"id\":\"88b2af17-a46e-4c04-bba2-30508737c444\",\"src\":\"https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg\"},\"_owner\":null,\"_store\":{}}]") })
  }

  
  
  
  // This method changes the zIndex for the selected item, and places it as the top-level element. The selected item is whatever item is currently being dragged. The selected item's ID is passed as a parameter to this function.
  bringToTop = id => {

    // This creates a new array from the items array in state, maps over them to get just the zIndex value, sorts them so the highest zIndex is first in the array, then holds that top zIndex value in the 'z' variable. 
    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]

    // This creates a new array from the items array in state, maps over them, checks if the item's id matches the id passed in as a parameter. If so, it applies a zIndex value of z (defined above) + 1. This causes the selected item to have the highest zIndex value, placing it as the top-level element.
    let items = this.state.items.map(item => {
      if(item.props.id === id) {
        return (
          // The 'item.type', as of now, will either return 'img' or 'div', which is why this syntax works.
          <item.type
            {...item.props}
            style={{
              ...item.props.style,
              // applying the zIndex.
              zIndex: z + 1
            }}
          >
            {item.props.children}
          </item.type>
        )
      } else return item;
    });

    // last step is to just update the state with the new items array that has the updated zIndex 
    this.setState({ items })
  }

  // this method adds an item from the tools area to the canvas. this method takes the whole element and adds it to the items array in state. since elements in the tools area are simple images, this method adds all the properties before adding them to state.
  addItem = item => {
    // get top-level zIndex, same as above.
    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]
    
    // simple setState call to add the item.
    this.setState({ items: [
      
      // spread operator to gather all previous elements in the items array in state
      ...this.state.items,

      // This adds the item into the array. 'item.type' works the same as above.
      <item.type 
        // initial size
        height = { 100 }
        width = { 100 }
        // initial coordinates
        x = { (this.state.w / 2) - 100 }
        y = { 100 }

        // styling to make sure the new element is on top
        style = {{ 
          zIndex: this.state.items.length ? z + 1 : 0
        }}

        // randomized id (change, get rid of uuid)
        id = { uuidv4() }

        // sets src and alt attributes if the item is an image
        src = { item.type === 'img' ? item.props.src : null }
        alt = { item.props }
        // alt = { item.type === 'img' ? item.props.title : null }
      />
    ] })
  }

   // Filter
   filter = id => {
    return this.state.items.filter(item => item.props.id !== id);
  };

  // Remove pic from state using filter
  removeImage = id => {
    this.setState({ items: this.filter(id) });
    console.log(this.state.items);
  };

  // this method sets the size and coordinates for each element in state, so their values are maintained when new items are added. this method is called when the mouseup event is triggered after an element is done being dragged.
  // id is the id of the element that's being dragged. w is width, h is height, x and y are the coordinates.
  setItem = (id, w, h, x, y) => {  
    
    // gets all the elements in the items array in state, sets them in a new array, then sets the w, h, x, and y values for that element.
    let items = this.state.items.map(item => {
      if (item.props.id === id) {
        return (
          <item.type
            // maintain all previous props, changing what's needed below
            { ...item.props }

            // w and h are passed in when the method is called
            width = { w }
            height = { h }

            // if this element is the only element in the array, x and y are set to the x and y value passed in, minue 1/2 the width for x, or 1/2 the heeght for y. this assures the dragging position stays in the middle of the element. Otherwise, the passed in x and y values will be based on the center position anyway, so we can just set them directly.
            x = { this.state.items.length === 1 ? x - (w / 2) : x }
            y = { this.state.items.length === 1 ? y - (h / 2) : y }
          >
            {item.props.children}
          </item.type>
        );
      } else return item;
    });

    // set the items on state
    this.setState({ items })
  }

  // phony method as of now to get the html data to save a project as an html doc, or return to an in-progress project
  getJsonData = () => {
    console.log('hello', JSON.stringify(this.state.items))

    const canvasProjectData = JSON.stringify(this.state.items);
    console.log("stringified", canvasProjectData);

    const canvasProject = {
        "p_name": "Project from App",
        "p_description": "Image project description",
        "user_created_id": 1,
        "user_created_google_id": "google-oauth2|113561531601298466202",
        "p_created_at": null,
        "p_data": `${canvasProjectData}`,
        "p_likes": 5,
        "p_published": false
    }

    if (!this.state.saved) {
      axios.post("https://photo-effects-backend-stage-1.herokuapp.com/canvas", canvasProject)
      .then(res => {
        console.log(this.state.saved)
        console.log("SAVED", res.data[0].id);
        localStorage.setItem("currentCanvasProject", res.data[0].id)
        this.setState({saved: true})
        console.log(this.state.saved)
      })
    } else {
      axios.put(`https://photo-effects-backend-stage-1.herokuapp.com/canvas/${localStorage.getItem("currentCanvasProject")}`, canvasProject)
      .then(res => {
        console.log(res.data)
      })
    }
  }

  render() { 
    return (
      <div style = { page }>
        <ToolsArea 
          auth = { this.props.auth } 
          addItem = { this.addItem }
        />
        <CanvasArea 
          items = { this.state.items }
          bringToTop = { this.bringToTop }
          setItem = { this.setItem }
          getJsonData = { this.getJsonData }
          removeImage={this.removeImage}
          image={this.props.image}
        />
      </div>
    )
  }
}

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
}
