import React, { Component } from 'react'

export class Toolbars extends Component {
  render() {
    return (
      <div style = { container }>
        <ImageTools />
        <ElementTools />
        <Home />
      </div>
    )
  }
}

const ImageTools = props => {
  const container = {
    display: 'flex',
    border: '2px solid red'
  }

  const tools = [
    'Share',
    'Print',
    'Save'
  ]

  return (
    <div style = { container }>
      image toolbar
    </div>
  )
}

const ElementTools = props => {
  const container = {
    display: 'flex',
    border: '2px solid blue',
  }

  return (
    <div style = { container }>
      element toolbar
    </div>
  )
}

const Home = props => {
  const btn = {
    border: '2px solid green'
  }

  return (
    <div style = { btn }>
      Home
    </div>
  )
}

export default Toolbars
