import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux'




class NavBarContainer extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render(){
    console.log("NAVBAR", this.props)
    return(
      <div className="NavBar">
        <Navbar sticky="top" collapseOnSelect expland="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">JARVIS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/profile">{this.props.user.username}</Nav.Link>
            <Nav.Link href="/events">Calendar</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/reservations">Reservations</Nav.Link>
          </Nav>
          <Nav>
            <div >
              <Nav.Link href="#">
                {this.props.user ? <button onClick={this.handleLogout}>Logout</button> : null}
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
    user: store.user
  }
}


export default connect(mapStateToProps, null)(NavBarContainer);
