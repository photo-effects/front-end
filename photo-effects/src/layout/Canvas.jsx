import React, { Component } from 'react'
import ToolPanel from '../components/Canvas/ToolPanel';
import TabsContainer from '../components/Canvas/TabsContainer';

export default class Canvas extends Component {
  render() {
    return (
      <div>
        Canvas
        <ToolPanel />
        <TabsContainer />

      </div>
    )
  }
}

