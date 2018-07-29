import React, { Component } from 'react';
import CategoryButtonGrid from './CategoryButtonGrid'
import Input from './Input'


class CategoryColumn extends Component {
    render() {

      return (
        <div className = "categoryColumn">
          <CategoryButtonGrid />
          <br />
          <h3 style = { {textAlign: "center"}}>or</h3>
          <br />
          <Input placeholder=" Category" handleTextChange={this.props.handleTextChange}/>
        </div>
      )
    }
}

export default CategoryColumn;
