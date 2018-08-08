import React, { Component } from 'react';
import CategoryButton from './CategoryButton'
require('./images/pizza.png')

class CategoryButtonGrid extends Component {
    constructor () {
      super();
      this.state = {
        groups: [
          {val:'breakfast', image:require('./images/breakfast.png')},
          {val:'pizza', image:require('./images/pizza.png')},
          {val:'noodles', image:require('./images/noodles.png')},
          {val:'coffee', image:require('./images/coffee.png')},
          {val:'burgers', image:require('./images/burgers.png')},
          {val:'dessert', image:require('./images/dessert.png')}

        ],
        current_group: 0
      }
    }


    createButtons = () => {
      let buttons = [];
      let count = 0;
      for (let i = 1; i < 3; i++) {
        for (let j=1; j < 4; j++) {
          // let path = './images/' + this.state.groups[this.state.current_group][count] + '.png';
          let path = this.state.groups[count]['image'];
          let val = this.state.groups[count]['val'];
          buttons.push(<CategoryButton update={this.props.update} onClick={this.props.onClick} row={i} col={j} image={path} val={val}  />);
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
