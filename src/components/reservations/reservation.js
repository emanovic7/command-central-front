import React, { Component } from 'react';



class Reservation extends Component {
  render(){
    return(
      <div>
        <p>title: {this.props.reservation.title}</p>
        <p>venue: {this.props.reservation.venue}</p>
        <p>date: {this.props.reservation.date}</p>
        <p>time: {this.props.reservation.time}</p>
      </div>
    )
  }
}


export default Reservation;
