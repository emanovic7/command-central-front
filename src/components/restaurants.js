import React, { Component } from 'react';



class Restaurants extends Component {

  constructor(){
    super()
    this.state = {
      restaurants: ''
    }
  }


  handleRestaurantsFetch = () => {
    const API_KEY = "9wVGFz42pdKJ8LvcERXRPwdKw-Z2cT5v--4Uh9HxIGZ9HjBh2d4G_oqxXmGgCT5yhfatqwIiFRIf_GYZ3xmaqtHO8yhhOGCeVkGNClqrKBBjd__EfIVcW6kH6-yAXXYx";
    let locationSearched = "new york city"
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        categories: 'breakfast_brunch',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return(
      <div>
        <h1>Restaurants</h1><br />
        <button onClick={this.handleRestaurantsFetch}>fetch restaurants</button>
      </div>
    )
  }



}


export default Restaurants;
