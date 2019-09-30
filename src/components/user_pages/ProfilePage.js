import React, { Component, Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../components/theme';



//STYLING
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//COMPONENTS
import DashBoardGrid from '../../components/dashBoardGrid';
import SpacingGrid from '../../components/spacingGrid';
import CenteredGrid from '../../components/centeredGrid';

//CONTAINERS
import TasksContainer from '../../containers/tasksContainer';
import RestaurantsContainer from '../../containers/restaurantsContainer';
import WeatherContainer from '../../containers/weatherContainer';
import RoutesContainer from '../../containers/routesContainer';
import DisplayElementsContainer from '../../containers/displayElementsContainer';
import NavBarContainer from '../../containers/navBarContainer';

class ProfilePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      user_id: '',
      component: ''
    }
  }


  changeComponent = (component) => {
    this.setState({
      component: component
    })
  }

  render(){

     switch (this.state.component) {
        case 'toDo':
          return <TasksContainer user_id={this.props.user_id} username={this.props.username} />
        case 'restaurants':
          return <RestaurantsContainer user_id={this.props.user_id} username={this.props.username} />
        case 'weather':
          return <WeatherContainer />
        case 'maps':
          return <RoutesContainer />

        default:
          return (


            <React.Fragment>
              <ThemeProvider theme={theme}>
                <DashBoardGrid user_id={this.props.user_id} username={this.props.username} logout={this.handleLogout}/>
              </ThemeProvider>
            </React.Fragment>
          )
      }


  }
}



export default ProfilePage;
