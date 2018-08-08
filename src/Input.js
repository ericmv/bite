import React, { Component } from 'react';


class Input extends Component {



    onChange = (event) => {
      this.props.event(event);
      this.props.updateParent(event);
    }

    render() {

      return (

        <div>
          <input className="input" type="text" ref="category" placeholder={this.props.placeholder} onChange={this.onChange} value={this.props.val}/>
        </div>
      )
    }
}

export default Input;
