import React, { Component } from 'react';


class Input extends Component {

    render() {
      return (
        <div>
          <input className="input" type="text" ref="category" placeholder={this.props.placeholder} onChange={this.props.handleTextChange}/>
        </div>
      )
    }
}

export default Input;
