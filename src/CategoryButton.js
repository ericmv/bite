import React, { Component } from 'react';


class CategoryButton extends Component {

    render() {

      return (
        <div className = "categoryButton" style={
          {
            gridArea: this.props.row /this.props.col / this.props.row+1 / this.props.col+1
          }
        }>
          {this.props.category}
        </div>
      )
    }
}

export default CategoryButton;
