import React, { Component } from 'react';
import axios from 'axios';
import CategoryColumn from './CategoryColumn'
import LocationColumn from './LocationColumn'
import Divider from './Divider'
import PriceGrid from './PriceGrid'
import Button from './Button'
import './App.css';

class App extends Component {
  API_KEY = "9OWN7mLDbiSvGqpS8uwgd-XBK3DLJJhjn2uMUP4FIt1vmAk6vy8xKoA7VqEbjy0kKd8Qqj52z3eo3mgiqN9ykUfkW2sveDyLHw6qPNNts0Zhu3AGUSR_C9L7AplbW3Yx"
  CLIENT_ID = "MlSQCh9BD3pvWCC-KEXENw"
  YELP_URL = 'https://api.yelp.com/v3/businesses/search' + this.API_KEY

  constructor () {
    super();
    this.state =
      {
        images:["sqirl.jpeg", "sqirl2.jpg"],
        current_index: 0,
        current_image: "./images/sqirl2.jpg",
        location: "Costa Mesa",
        term: "",
        category: "",
        lat: 0,
        lon: 0,
        price: 1,

      }
  }

  handleSubmit = () => {
    let headers = {
      'Authorization': 'Bearer' + this.API_KEY
    }
    let params = {}

    if (this.state.lat && this.state.lon) {
      params['latitude'] = this.state.lat;
      params['longitude'] = this.state.lon;
    } else {
      params['location'] = this.state.location;
    }

    axios.get(
      this.YELP_URL, {
        params: params
      },
      headers
    )
  }

  handleTextChange = (event) => {
    this.setState({term: event.target.value});
  }

  handlePriceChange = (val) => {
    this.setState({price: val});
  }

  render() {
    let image = this.state.current_image;
    return (
      <div className="App">
          <div id="logo"><h1>IDKYouPick</h1></div>
          <CategoryColumn handleTextChange={this.handleTextChange.bind(this)}/>
          <Divider col={2} />
          <LocationColumn />
          <Divider col={4} />
          <PriceGrid onClick={this.handlePriceChange.bind(this)}/>
          <Divider col={6} />
          <Button />
      </div>
    );
  }
}

export default App;
