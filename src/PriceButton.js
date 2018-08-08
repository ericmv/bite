// import React from 'react';
import React, { Component } from 'react';

// import Input from './Input'
// import CategoryButtonGrid from './CategoryButtonGrid'



class PriceButton extends Component {


  handleClick = (event) => {
    this.props.onClick(this.props.val);

  }
  render() {
    let divStyle = {
      gridArea: "1 / " + (this.props.col + 1) + " / 2 / " + (this.props.col+2)
    };
    if (this.props.isActive) {
      divStyle['opacity'] = '.60';
    }
    else {
      divStyle['opacity'] = '1';
    }
    return (
      <button type="button" className="priceButton" style={divStyle} val={this.props.val} onClick={this.handleClick}>
        <div>{this.props.text}</div>
      </button>
    )

  }



}

export default PriceButton;
