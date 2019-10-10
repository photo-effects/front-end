import React, { Component } from 'react';

import Paint from './Paint/Paint';

export default class Test extends Component {
  render() {
    return (
      <div
        // style={{
        //   border: '2px solid blue',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}
      >
        <Paint />
      </div>
    );
  }
}
