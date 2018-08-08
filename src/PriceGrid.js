import React, { Component } from 'react';
import PriceButton from './PriceButton'
class PriceGrid extends Component {

  createButtons = () => {
    let buttons = [];
    for (let i = 0; i < 4; i++) {
      buttons.push(<PriceButton col={i} val={i} text={this.props.price[i]['name']} isActive={this.props.price[i]['isActive']} onClick={this.props.onClick}/>);

    }
    return buttons;
  }

  render() {
    return (
      <div className="priceGrid">
        {this.createButtons()}
      </div>
    )
  }

}
export default PriceGrid;
