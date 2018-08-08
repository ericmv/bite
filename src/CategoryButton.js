import React, { Component } from 'react';



class CategoryButton extends Component {

    handleButtonPress = (event) => {
      this.props.onClick(event);
      this.props.update(event);
    }
    render() {

      return (
        <input type="button" onClick={this.props.onClick} className="categoryButton" style={
          {
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundSize: 'cover',
            color: 'transparent',
            gridArea: this.props.row /this.props.col / this.props.row+1 / this.props.col+1
          }
        } value="123">
        </input>
      )
    }
}

export default CategoryButton;
