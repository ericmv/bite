import React, { Component } from 'react';
import PriceButton from './PriceButton'
class PriceGrid extends Component {
  constructor() {
    super();
    this.state = {
      grid: ["$", "$$", "$$$", "$$$$"]
    }
  }

  createButtons = () => {
    let buttons = [];
    for (let i = 0; i < 4; i++) {
      buttons.push(<PriceButton col={i} val={i} text={this.state.grid[i]} onClick={this.props.onClick}/>);

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
