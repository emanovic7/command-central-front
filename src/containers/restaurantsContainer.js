import React, { Component } from 'react';
import Restaurant from '../components/restaurants/restaurant'



class RestaurantsContainer extends Component {

  constructor(){
    super()
    this.state = {
      restaurants: [],
      location: '',
      category: ''
    }
  }


  handleRestaurantsFetch = () => {
    const API_KEY = "9wVGFz42pdKJ8LvcERXRPwdKw-Z2cT5v--4Uh9HxIGZ9HjBh2d4G_oqxXmGgCT5yhfatqwIiFRIf_GYZ3xmaqtHO8yhhOGCeVkGNClqrKBBjd__EfIVcW6kH6-yAXXYx";
    let locationSearched = this.state.location
    let category = this.state.category
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        categories: category
      }
    })
    .then(response => response.json())
    .then(data => this.setState({
      restaurants: data.businesses
    }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleRestaurantsFetch()
  }



  render(){
    console.log("restaurants from state", this.state.restaurants)
    const AllRestaurants = this.state.restaurants.map((restaurant, idx) =>
      <Restaurant key={idx} restaurant={restaurant} />
    )

    return(
      <div>
        <h2>Find something to eat</h2><br />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>location</label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/><br />
            <label>category</label>
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange}/><br />
            <input type="submit" value="find grub" />
          </form>
        </div>

        <div>
          {AllRestaurants}
        </div>
      </div>
    )
  }
}


export default RestaurantsContainer;
