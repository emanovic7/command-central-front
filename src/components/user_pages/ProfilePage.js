import React, { Component } from 'react';


class ProfilePage extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      user_id: ''
    }
  }

  componentDidMount() {
    this.setState({
      username: this.props.username
    })
}


  handleLogout = () => {
    localStorage.clear()
    this.props.redirectPage('login')
  }

  render(){
    console.log(this.props)
    return(
      <div>
      <button onClick={this.handleLogout}>Logout</button>
        {
          this.state.username ?
          <h2>Welcome {this.state.username}!</h2>
            :
          <h2>getting your info...</h2>
        }
      </div>
    )
  }
}


export default ProfilePage;
