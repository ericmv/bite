import React, { Component } from 'react';


class Input extends Component {

    constructor() {
      super();
      this.state = {
        suggestions: ["Costa Mesa", "Irvine", "Los Angeles"],
        current_suggestions: ["Irvine", "Istanbul"],
        focus: 0
      }
    }

    highlight = () => {

    }

    onChange = (event) => {
      this.props.event(event);
      // this.props.updateParent(event);
    }

    handleKeyDown = (event) => {
      const keyCode = event.keyCode;
      if (keyCode === 40) {
        let focus = this.state.focus;
        focus++;
        this.setState({focus: focus});
      }
      else if (keyCode === 38) {
        let focus = this.state.focus;
        focus--;
        this.setState({focus: focus});
      }
    }

    render() {
      const suggestions = this.state.current_suggestions.map((suggestion) =>
        <div key={suggestion} className="suggestion">{suggestion}</div>
      )
      return (

        <div>
          <input className="input" type="text" ref="category" placeholder={this.props.placeholder} onChange={this.onChange} value={this.props.val}/>
          {suggestions}
        </div>
      )
    }
}

export default Input;
