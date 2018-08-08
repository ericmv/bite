import React, { Component } from 'react';

class Results extends Component {


  render() {
    if (this.props.display) {
      return (
        <div className='modal'>
          <div className='modal-content'>
            <span class="close">&times;</span>
            <h1>Name Here</h1>
            <h4>Location Here</h4>
          </div>
        </div>
      );
    }
    return (<div></div>);

  }
}

export default Results;
