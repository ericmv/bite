import React, { Component } from 'react';


class Input extends Component {

    render() {
      const val = this.props.term;
      return (

        <div>
          <input className="input" type="text" ref="category" placeholder={this.props.placeholder} onChange={this.props.event} value={val}/>
        </div>
      )
    }
}

export default Input;
