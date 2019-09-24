import React, { Component } from 'react';


const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.restaurant.image_url} />
      <p>{props.restaurant.name} - {props.restaurant.price}</p>
      <p>{props.restaurant.phone}</p>
      <p>{props.restaurant.rating}</p>
    </div>
  )
}

export default Restaurant;
