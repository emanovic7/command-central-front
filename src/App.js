import React, { Component } from 'react';
import './App.css';

//Components
import LoginPage from './components/user_pages/LoginPage';
import ProfilePage from './components/user_pages/ProfilePage';
import SignUpPage from './components/user_pages/SignUpPage';


//Containers
import TasksContainer from './containers/tasksContainer';


class App extends Component {

  

  constructor(){
    super()
    this.state = {
      page: 'login',
      username: '',
      user_id: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => this.setState({
      username: user.current_user.username,
      user_id: user.current_user.id
    })
  )
  if(localStorage.token){
    this.redirectPage('profile')
  }
}


  redirectPage = (page) => {
    this.setState({
      page: page
    })
  }

  render(){
    switch (this.state.page) {
      case 'login':
        return <LoginPage redirectPage={this.redirectPage}/>
      case 'profile':
        return (
                <div>
                  <ProfilePage redirectPage={this.redirectPage} username={this.state.username}/>
                  <TasksContainer username={this.state.username} user_id={this.state.user_id}/>
                </div>)
      case 'signup':
        return <SignUpPage />

      default:
        return <LoginPage />
    }
  }



}


export default App;
