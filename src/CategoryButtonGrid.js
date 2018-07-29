import React, { Component } from 'react';
import CategoryButton from './CategoryButton'


class CategoryButtonGrid extends Component {
    constructor () {
      super();
      this.state = {
        groups: [
          ["Breakfast", "Burgers", "Pizza", "Boba", "Snacks", "Tacos"]
        ],
        current_group: 0
      }
    }

    createButtons = () => {
      let buttons = [];
      let count = 0;
      for (let i = 1; i < 3; i++) {
        for (let j=1; j < 4; j++) {

          buttons.push(<CategoryButton row={i} col={j} category={this.state.groups[this.state.current_group][count]}/>);
          count++;
        }
      }
      return buttons;
    }

    render() {

      return (
        <div className="buttonGrid">
          {this.createButtons()}
        </div>
      )
    }
}

export default CategoryButtonGrid;
