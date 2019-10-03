import React, { Component } from 'react';

class EditButton extends Component {
  state = {
    active: false
  }

  set = () => {
    const { active } = this.state;
    
    if(active) {
      this.props.setTextbox(this.props.type, 'unset')
      this.setState({ active: false })
    } else {
      this.props.setTextbox(this.props.type, this.props.action)
      this.setState({ active: true })
    }
  }

  render() {
    return (
      <button
        key={this.props.action}
        onClick = { () => this.set() }
        style = { this.props.style }
      >
        <i className={'fas fa-' + this.props.action }> </i>
      </button>
    );
  }
}

export default EditButton
