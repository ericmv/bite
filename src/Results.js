import React, { Component } from 'react';
import './w3.css';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      stars: {
        1: require('./images/stars/1.png'),
        1.5: require('./images/stars/1half.png'),
        2: require('./images/stars/2.png'),
        2.5: require('./images/stars/2half.png'),
        3: require('./images/stars/3.png'),
        3.5: require('./images/stars/3half.png'),
        4: require('./images/stars/4.png'),
        4.5: require('./images/stars/4half.png'),
        5: require('./images/stars/5.png'),
      }
    }
  }
  handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      this.props.handleClose();
    }
  }

  render() {
    if (this.props.display) {
      const locations = this.props.results.location.map((fields) => <h5 style={{'margin': '2px'}}className="resultInfo">{fields}</h5>);
      return (
        <div className='modal' onClick={this.handleClickOutside}>
          <div className='modal-content w3-animate-top w3-card-4'>
            <img src={this.props.results.image_url} style={{'margin': 'auto', 'width':"250px", 'height': '250px', 'border-radius': '5px'}}/>
            <div className="info">
              <ul>
                <li>
                  <h1 className="resultInfo"><a style={{'color': '#006fbe', 'text-decoration': 'none'}} href={this.props.results.url}>{this.props.results.name}</a></h1>
                </li>
                <li>
                  <div className="reviews">
                    <img style={{'float': 'left'}} className="resultInfo" src={this.state.stars[this.props.results.rating]} />
                    <p style={{'overflow': 'hidden', 'padding': "5px 5px"}}>{this.props.results.review_count} Reviews</p>
                  </div>
                </li>
                <li>
                  {this.props.results.price} - <i>{this.props.results.categories}</i>
                </li>
              </ul>
            </div>
            <div className="storeInfo">
              {locations}
            </div>
            <span className="close" onClick={this.props.handleClose}>&times;</span>

          </div>
        </div>
      );
    }
    return (<div></div>);

  }
}

export default Results;
