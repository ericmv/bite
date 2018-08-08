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

    handleButtonPress = (event) => {
      // console.log(event.target.value);
      this.setState({term:event.target.value});
      this.props.handleTextChange(event);
      // console.log(this.state.term);
    }

    handleTextChange = (event) => {
      this.setState({term:event.target.value});
    }

    render() {

      return (

        <div className = "categoryColumn">
          <CategoryButtonGrid update={this.props.handleTextChange} onClick={this.handleButtonPress.bind(this)}/>
          <br />
          <h3 style = { {textAlign: "center"}}>or</h3>
          <br />
          <Input placeholder=" Category" event={this.props.handleTextChange} updateParent={this.handleTextChange.bind(this)} val={this.state.term}/>
        </div>
      )
    }
}

export default CategoryColumn;
