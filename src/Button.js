import React, { Component } from 'react';


class Button extends Component {

    render() {
      return (
          <button style={{gridArea: "2 / 7 / 3 / 8", margin:"auto", width:"75%"}} className="search" type="button">Find!</button>
      )
    }
}

export default Button;
