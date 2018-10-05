import React, { Component } from 'react';
import CategoryButtonGrid from './CategoryButtonGrid'
import Input from './Input'


class CategoryColumn extends Component {

    render() {

      return (

        <div className = "categoryColumn">
          <CategoryButtonGrid onClick={this.props.handleCategoryPress}/>
          <div className="or">
            <h3 style = { {textAlign: "center"}}>or</h3>
          </div>
          <div className="categoryInput">
            <div style={{"flex": 1}}>
              <Input size="200px" placeholder="Category" event={this.props.handleTextChange} val={this.props.current_input}/>
            </div>
            <button class="addButton" onClick={this.props.handleAddButton}>Add</button>
          </div>
        </div>
      )
    }
}

export default CategoryColumn;
