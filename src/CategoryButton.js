import React, { Component } from 'react';



class CategoryButton extends Component {

    handleButtonPress = () => {
      console.log("Hello123");
      this.props.onClick("hello");
    }
    render() {

      return (
        <input type="button" onClick={this.handleButtonPress} className="categoryButton" style={
          {
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundSize: 'cover',
            gridArea: this.props.row /this.props.col / this.props.row+1 / this.props.col+1
          }
        }>
        </input>
      )
    }
}

export default CategoryButton;
