import React, { Component } from 'react';
import CategoryButton from './CategoryButton'
require('./images/pizza.png')

class CategoryButtonGrid extends Component {
    constructor () {
      super();
      this.state = {
        groups: [
          require('./images/breakfast.png'),
          require('./images/pizza.png'),
          require('./images/noodles.png'),
          require('./images/coffee.png'),
          require('./images/burgers.png'),
          require('./images/dessert.png')

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
          let path = this.state.groups[count];
          buttons.push(<CategoryButton update={this.props.update} onClick={this.props.onClick} row={i} col={j} image={path} category={this.state.groups[this.state.current_group][count]} />);
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
