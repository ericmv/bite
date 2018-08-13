import React, { Component } from 'react';
import CategoryButtonGrid from './CategoryButtonGrid'
import Input from './Input'


class CategoryColumn extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     buttonPressed:0,
    //     term:""
    //   }
    // }
    //
    // handleButtonPress = (event) => {
    //   // console.log(event.target.value);
    //   this.setState({term:event.target.value});
    //   this.props.handleTextChange(event);
    //   // console.log(this.state.term);
    // }
    //
    // handleTextChange = (event) => {
    //   this.setState({term:event.target.value});
    // }

    render() {

      return (

        <div className = "categoryColumn">
          <CategoryButtonGrid onClick={this.props.handleCategoryPress}/>
          <br />
          <h3 style = { {textAlign: "center"}}>or</h3>
          <br />
          <Input placeholder="Category" event={this.props.handleTextChange} val={this.props.current_input}/>
          <button onClick={this.props.handleAddButton} className="selectedButton">Add</button>
        </div>
      )
    }
}

export default CategoryColumn;
