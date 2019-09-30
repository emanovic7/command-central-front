import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';




class NavBarContainer extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render(){
    console.log("from navbar", this.props)
    return(
      <div className="NavBar">
        <Navbar sticky="top" collapseOnSelect expland="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">JARVIS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/profile">{this.props.username}</Nav.Link>
            <Nav.Link href="/events">Calendar</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/tasks">Saved</Nav.Link>
          </Nav>
          <Nav>
            <div >
              <Nav.Link href="#">
                <button onClick={this.handleLogout}>Logout</button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}


export default NavBarContainer;

//
// <div>
//   <button onClick={this.handleLogout}>Logout</button>
//   {this.props.username ? <h2>Welcome {this.props.username}!</h2> : <h2>getting your info...</h2>}
// </div>
