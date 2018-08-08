import React, { Component } from 'react';
import axios from 'axios';
import CategoryColumn from './CategoryColumn'
import LocationColumn from './LocationColumn'
import Divider from './Divider'
import PriceGrid from './PriceGrid'
import Button from './Button'
import Results from './Results'
import './App.css';

class App extends Component {
  API_KEY = "9OWN7mLDbiSvGqpS8uwgd-XBK3DLJJhjn2uMUP4FIt1vmAk6vy8xKoA7VqEbjy0kKd8Qqj52z3eo3mgiqN9ykUfkW2sveDyLHw6qPNNts0Zhu3AGUSR_C9L7AplbW3Yx"
  CLIENT_ID = "MlSQCh9BD3pvWCC-KEXENw"
  YELP_URL = 'https://api.yelp.com/v3/businesses/search' + this.API_KEY

  constructor () {
    super();
    this.state =
      {
        location: "Costa Mesa",
        term: "",
        category: "",
        lat: 0,
        lon: 0,
        price: [
          {name: '$', val: '1', isActive: false},
          {name: '$$', val: '2', isActive: false},
          {name: '$$$', val: '3', isActive: false},
          {name: '$$$$', val: '4', isActive: false}
        ],
        showResults: true

      }
  }

  handleSubmit = () => {
    let headers = {
      'Content-Type': 'application/json'
    }
    let params = {}

    if (this.state.lat && this.state.lon) {
      params['latitude'] = this.state.lat;
      params['longitude'] = this.state.lon;
    } else {
      if (this.state.location) {
        params['location'] = this.state.location;
      }
      else {
        alert("Please enter a location");
      }
    }

    const prices = [];
    for (let i = 0; i < this.state.price.length; i++) {
      if (this.state.price[i].isActive) {
        prices.push(this.state.price[i].val);
      }
    }

    let price = ""
    for (let i = 0; i < prices.length; i++) {
      price += prices[i];
      price += ",";
    }
    price = price.substring(0, price.length - 1);
    console.log(price);
    if (price) {
      params['price'] = price;
    }

    params['term'] = this.state.term;
    // outerParams['params'] = innerParams;
    axios.get("/search", {
        params: params
      },
      headers
    )
    .then(res => {
      const businesses = res.data.businesses;
      const filtered = businesses.map((business) => {
        return [business.name, ];
      })
      console.log(JSON.stringify(businesses, null, 2));
    })
    .catch(function() {
      console.log("UHOH");
    })
  }

  handleTextChange = (event) => {
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  handlePriceChange = (i) => {
    let newPrice = this.state.price.slice();
    newPrice[i]['isActive'] = !newPrice[i]['isActive'];
    this.setState({price: newPrice});
  }

  handleLocationChange = (event) => {
    this.setState({location: event.target.value});
    console.log(this.state.location);
  }

  handleCategoryPress = (category) => {

  }

  render() {
    return (

      <div className="App">
          <div id="logo"><h1>IDKYouPick</h1></div>
          <CategoryColumn handleTextChange={this.handleTextChange.bind(this)}/>
          <Divider col={2} />
          <LocationColumn handleLocationChange={this.handleLocationChange.bind(this)}/>
          <Divider col={4} />
          <PriceGrid price={this.state.price} onClick={this.handlePriceChange.bind(this)}/>
          <Divider col={6} />
          <Button handleSubmit={this.handleSubmit.bind(this)}/>
          <Results display={this.state.showResults}/>
      </div>


    );
  }
}

export default App;
