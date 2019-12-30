import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/restaurants/restaurant';
import RestaurantsBoard from '../components/restaurants/restaurant';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




class RestaurantsContainer extends Component {

  constructor(){
    super()
    this.state = {
      restaurants: [],
      location: '',
      category: '',
      term: '',
      currentLocation: false
    }
  }


  handleRestaurantsFetch = () => {
    const API_KEY = "9wVGFz42pdKJ8LvcERXRPwdKw-Z2cT5v--4Uh9HxIGZ9HjBh2d4G_oqxXmGgCT5yhfatqwIiFRIf_GYZ3xmaqtHO8yhhOGCeVkGNClqrKBBjd__EfIVcW6kH6-yAXXYx";
    let locationSearched = this.state.location;
    let latitude = this.props.latitude;
    let longitude = this.props.longitude;
    let term = this.state.term;
    if(this.state.currentLocation === true){
      fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=${term}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })
      .then(response => response.json())
      .then(data => this.setState({
        restaurants: data.businesses
      }))
    }else {
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}&term=${term}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
    .then(response => response.json())
    .then(data => this.setState({
      restaurants: data.businesses
    }))
  }
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

  handleClear = () => {
    this.setState({
      restaurants: []
    })
  }

  handleLocationChange = (event) => {
    this.setState({
      currentLocation: !this.state.currentLocation
    })
  }



  render(){

    console.log("restaurant state", this.state);
    console.log("restaurant props", this.props)

    const AllRestaurants = this.state.restaurants.map((restaurant, idx) =>
      <Restaurant key={idx} restaurant={restaurant} />
    )

    const freshRestaurants = this.state.restaurants.map((restaurant, idx) =>
      <RestaurantsBoard restaurant={restaurant} />
    )

    return(

      <div>
      <h1>food and places</h1><br />

      use my current location <input type="checkbox" name="currentLocation" value={this.state.currentLocation} onChange={this.handleLocationChange}/><br />
      {this.state.restaurants.length === 0 ?

          <Form onSubmit={this.handleSubmit}>
          {this.state.currentLocation === false ?
            <Form.Group >
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="eg. chelsea new york" name="location" value={this.state.location} onChange={this.handleChange}/>
            </Form.Group>
            : null
          }

            <Form.Group >
              <Form.Label>Term</Form.Label>
              <Form.Control type="text" placeholder="eg. vegan, comedy" name="term" value={this.state.term} onChange={this.handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>

          // <div>
          //   <h2>Find something to eat</h2><br />
          //   <form onSubmit={this.handleSubmit}>
          //     <label>location</label>
          //     <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/><br />
          //     <label>category</label>
          //     <input type="text" name="category" value={this.state.category} onChange={this.handleChange}/><br />
          //     <input type="submit" value="find grub" />
          //   </form>
          // </div>
        :
        <div>
          <Restaurant handleClear={this.handleClear} restaurant={this.state} addFavorite={(favorite) => this.props.addFavorite(favorite)} reserveRestaurant={(restaurant) => this.props.reserveRestaurant(restaurant)}/>
        </div>
      }


      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    latitude: store.geolocation.latitude,
    longitude: store.geolocation.longitude
  }
}


export default connect(mapStateToProps, null)(RestaurantsContainer);
