import React, { Component } from 'react';
import axios from 'axios';

import Tools from './layout/ToolsArea/ToolsArea';
import CanvasArea from './layout/CanvasArea/CanvasArea';
import ToolPanel from './components/LeftPanelArea/ToolPanel';

export default class Canvas extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios
      .get('https://photo-effects-backend.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data)
        const items = res.data.map((item, i) => {
          return (
            <img 
              src = { item.secure_url }
              style = {{ 
                height: '100%', 
                width: '100%',
                zIndex: i
              }}
              key = { item.id }
              id = { item.id }
            />
          )
        })
        this.setState({ items })
      })
      .catch(err => console.log(err))
  }

  bringToTop = id => {

    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]

    console.log(z)

    let items = this.state.items.map(item => {
      if(item.props.id === id) {
        console.log('in if statement')
        return (
          <item.type
            { ...item.props }
            style = {{
              ...item.props.style,
              zIndex: z + 1
            }}
          >
          { item.props.children }
          </item.type>

        )
      } else return item;
    })

    console.log(items)

    this.setState({ items })
  }

  render() {
    return (
      <div style = { page }>
        <Tools 
          auth = { this.props.auth } 
          addItem = { this.addItem }
        />
        <CanvasArea 
          items = { this.state.items }
          bringToTop = { this.bringToTop }
        />
      </div>
    )
  }
}

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex'
}