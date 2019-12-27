import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { logOut } from '../actions/userActions';




class NavBarContainer extends Component {

  handleLogout = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render(){

    //Current Time
    const getCurrentTime = () => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();

      return `${hours}:${minutes}`

    }


    console.log("navbar state", this.props)
    return(
      <div className="NavBar">
        <Navbar sticky="top" collapseOnSelect expland="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">JARVIS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {this.props.user.username ?
              <Nav className="mr-auto">
                <Nav.Link href="/profile">{this.props.user.username}</Nav.Link>
                <Nav.Link href="/events">Calendar</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <Nav.Link href="/reservations">Reservations</Nav.Link>

                <Nav>
                  <Nav.Link>Current Location: {this.props.location}</Nav.Link>
                  <Nav.Link>Local Time: {getCurrentTime()}</Nav.Link>
                </Nav>
              </Nav>
                :
                null
            }

              <Nav>
                <div >
                  <Nav.Link href="#">
                    {this.props.user.username ? <button onClick={this.handleLogout}>Logout</button> : null}
                  </Nav.Link>
                </div>
              </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    user: store.currentUser,
    location: store.geolocation.location
  }
}

const mapDispatchToProps = {
  logOut: logOut
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));
