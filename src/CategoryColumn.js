import React, { Component } from 'react';
import CategoryButtonGrid from './CategoryButtonGrid'
import Input from './Input'


class CategoryColumn extends Component {
    constructor() {
      super();
      this.state = {
        buttonPressed:0,
        term:""
      }
    }
    handleButtonPress = (category) => {
      this.setState({term:category});

    }
    render() {

      return (

        <div className = "categoryColumn">
          <CategoryButtonGrid onClick={this.handleButtonPress.bind(this)}/>
          <br />
          <h3 style = { {textAlign: "center"}}>or</h3>
          <br />
          <Input placeholder=" Category" event={this.props.handleTextChange} val={this.state.term}/>
        </div>
      )
    }
}

export default CategoryColumn;
