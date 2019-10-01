import React, { Component } from 'react';
import Reservation from '../components/reservations/reservation';


class ReservationsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({
      reservations
    }))
  }

  render(){
      console.log("reservations", this.state.reservations)

      const reservations = this.state.reservations.map(reservation =>
        <Reservation key={reservation.id} reservation={reservation} />
      )
    return (
      <div>
        {reservations}
      </div>
    )
  }
}


export default ReservationsContainer;
