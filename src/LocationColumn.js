import React, { Component } from 'react';
import Input from './Input'
import CategoryButtonGrid from './CategoryButtonGrid'



class LocationColumn extends Component {
    render() {

      return (
        <div className="locationColumn">

          <Input placeholder=" City, State, Zip, etc" />
        </div>
      )
    }
}

export default LocationColumn;
