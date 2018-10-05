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


      let location = ""
      const location_array = this.props.results.location;
      for (let i = 0; i < location_array.length; i++) {
        location += location_array[i] + " ";
      }

      const maps_url = "https://www.google.com/maps/embed/v1/place?q=" + location + "&zoom=13&key=AIzaSyDQ63451nCkvytKZa8XHDlXm7pXkgTsOBc";
      const directions_url = "https://www.google.com/maps/search/?api=1&query=" + location
      console.log(directions_url)
      return (
        <div className='modal' onClick={this.handleClickOutside}>
          <div className='modal-content w3-animate-top w3-card-4'>
            <div className='details'>
              <img src={this.props.results.image_url} className="business_image"/>
              <div className="info">

                    <h1 className="resultInfo"><a href={this.props.results.url}>{this.props.results.name}</a></h1>

                    <div className="reviews">
                      <img style={{'height': '100%'}} src={this.state.stars[this.props.results.rating]} />
                      <p style={{'overflow': 'hidden', 'padding': "5px 5px"}}>{this.props.results.review_count} Reviews</p>
                    </div>

                    {this.props.results.price} - <i>{this.props.results.categories}</i>

              </div>
            </div>
            <div className="map">
              <iframe src={maps_url} style={{'width': "90%", 'height': '80%'}} allowFullScreen></iframe>
              <h3><a style={{'textDecoration': 'none', 'color': 'rgba(100,160,160,1)'}} href={directions_url} target="_blank">Get Directions >></a></h3>
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
