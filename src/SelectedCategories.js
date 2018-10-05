import React, { Component } from 'react';

class SelectedCategories extends Component {

  render() {
    const categories = this.props.categories.map((category) =>
      <li key={category}><button value={category} onClick={this.props.onClick} class="selectedButton"><div class="ex">&times;</div>{category}</button></li>
    )
    return (
      <div>
        <ul id="selected">
          <li key="label" style={{"marginLeft": "3%", "paddingRight": "10px"}}><strong>Selected: </strong></li>
          {categories}
        </ul>
      </div>
    )
  }

}
export default SelectedCategories
