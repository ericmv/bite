import React, { Component } from 'react';
import Input from './Input'

class LocationColumn extends Component {
    render() {

      return (
        <div className="locationColumn">

          <Input placeholder="City, State, Zip, etc" updateParent={() => {}} event={this.props.handleLocationChange}/>
        </div>
      )
    }
}

export default LocationColumn;
