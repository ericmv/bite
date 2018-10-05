import React, { Component } from 'react';


class Button extends Component {

    render() {
      return (
        <div className="search">
          <button className="searchButton" type="button" onClick={this.props.handleSubmit}>Find!</button>
        </div>
      )
    }
}

export default Button;
