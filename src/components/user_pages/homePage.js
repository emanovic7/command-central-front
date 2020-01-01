import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class HomePage extends Component {
  render(){
    return(
      <div className="Homepage">
        <div className="Homepage-text">
          <h1>Welcome to FOURAPPS</h1>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/signup">Sign Up</Link></button>
        </div>
      </div>
    )
  }
}



export default HomePage;
