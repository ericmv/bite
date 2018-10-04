import React, { Component } from 'react';

class SelectedCategories extends Component {

  render() {
    const categories = this.props.categories.map((category) =>
      <li key={category}><button value={category} onClick={this.props.onClick} class="selectedButton"><div class="ex">&times;</div>{category}</button></li>
    )
    return (
      <div style={ {"gridArea": "3 / 1 / span 1 / span 7", "textAlign": "left" } }>
        <ul id="selected">
          <li key="label" style={{"paddingRight": "10px"}}><strong>Selected: </strong></li>
          {categories}
        </ul>
      </div>
    )
  }

}
export default SelectedCategories
