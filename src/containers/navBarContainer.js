import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'




class NavBarContainer extends Component {
  render(){
    return(
      <div className="NavBar">
        <AppBar position="static">
          <Toolbar>
            Home
            Profile
            Logout
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}


export default NavBarContainer;
