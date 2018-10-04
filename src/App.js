import React, { Component } from 'react';
import axios from 'axios';
import CategoryColumn from './CategoryColumn'
import LocationColumn from './LocationColumn'
import Divider from './Divider'
import PriceGrid from './PriceGrid'
import Button from './Button'
import Results from './Results'
import SelectedCategories from './SelectedCategories'
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state =
      {
        location: "Costa Mesa",
        current_input: "",
        terms: [],
        category: "",
        lat: 0,
        lon: 0,
        price: [
          {name: '$', val: '1', isActive: false},
          {name: '$$', val: '2', isActive: false},
          {name: '$$$', val: '3', isActive: false},
          {name: '$$$$', val: '4', isActive: false}
        ],
        showResults: false,
        results: {
          name: "McDonalds",
          location: ["123"],
          price: "$",
          url: "345",
          image_url: "",
          categories: "",
          rating: "4",
          review_count: "456",
          phone: "7142222222",
          latlon: ""
        }
      }
  }

  handleSubmit = () => {
    console.log("sdjkfsdkljf")
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
    const index = Math.floor(Math.random() * this.state.terms.length);
    const term = this.state.terms[index];

    params['term'] = term;

    // outerParams['params'] = innerParams;
    axios.get("/search", {
        params: params
      },
      headers
    )
    .then(res => {
      console.log(res)
      const rand = Math.floor(Math.random() * 25);
      const business = res.data.businesses[rand];
      let categories = "";
      const business_categories = business.categories;
      for (let i = 0; i < business_categories.length; i++) {
        categories += business_categories[i].title
        categories += ", "
      }
      categories = categories.substring(0, categories.length - 2);

      let location = ""
      const location_array = business.location.display_address;
      for (let i = 0; i < location_array.length; i++) {
        location += location_array[i] + " ";
      }
      const filtered = {name:business.name,
        location: business.location.display_address,
        rating: business.rating,
        url: business.url,
        price: business.price,
        review_count: business.review_count,
        categories: categories,
        phone: business.display_phone,
        image_url: business.image_url,
      }
      this.setState({results: filtered, showResults: true});
      // axios.get("/map", {params: {'location': location}})
      // .then(res => {
      //
      //   const ll = res.data.results[0].geometry.location;
      //   const filtered = {name:business.name,
      //     location: business.location.display_address,
      //     rating: business.rating,
      //     url: business.url,
      //     price: business.price,
      //     review_count: business.review_count,
      //     categories: categories,
      //     phone: business.display_phone,
      //     image_url: business.image_url,
      //     latlon: ll
      //   }
      //   this.setState({results: filtered, showResults: true});
      // })
      // .catch(function() {
      //   console.log("OHNO");
      // })
    })
    .catch(function() {
      console.log("UHOH");
    })
  }

  handleTextChange = (event) => {
    this.setState({current_input: event.target.value});
    console.log(this.state.current_input);
  }

  handleAddButton = () => {
    let terms = this.state.terms.slice();
    const val = this.state.current_input;
    if (!terms.includes(val)) {
      terms.push(val);
      this.setState({terms: terms, current_input: ""});
    }
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

  handleCategoryPress = (event) => {
    let terms = this.state.terms.slice();
    const val = event.target.value;
    if (!terms.includes(val)) {
      terms.push(val);
      this.setState({terms: terms});
    }
  }
  handleRemove = (event) => {
    let terms = this.state.terms.slice();
    const index = terms.findIndex(x => x === event.target.value);
    terms.splice(index, 1);
    this.setState({terms: terms});
  }
  handleModalClose = () => {
    const newResults = !this.state.showResults;
    this.setState({showResults: newResults});
  }

  render() {
    return (

      <div className="App">
          <div id="logo"><h1>Nibble</h1></div>
          <CategoryColumn handleAddButton={this.handleAddButton.bind(this)} handleCategoryPress={this.handleCategoryPress.bind(this)} handleTextChange={this.handleTextChange.bind(this)} current_input={this.state.current_input}/>
          <Divider col={2} />
          <LocationColumn location={this.state.location} handleLocationChange={this.handleLocationChange.bind(this)}/>
          <Divider col={4} />
          <PriceGrid price={this.state.price} onClick={this.handlePriceChange.bind(this)}/>
          <Divider col={6} />
          <Button handleSubmit={this.handleSubmit.bind(this)}/>
          <Results display={this.state.showResults} handleClose={this.handleModalClose.bind(this)} results={this.state.results}/>
          <SelectedCategories onClick={this.handleRemove.bind(this)} categories={this.state.terms}/>
      </div>


    );
  }
}

export default App;
