import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
//import StarBorderIcon from '@material-ui/icons/StarBorder';

//CONTAINERS


//IMAGES
import maps from '../images/maps.jpg';
import restaurants from '../images/restaurants.jpg';
import weather from '../images/weather.jpg';
import toDo from '../images/to-do-list-photo.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  innerGrid: {
    width: 600,
    height: 500,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));



export default function SpacingGrid(props){
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleClick = (event) => {
    props.changeComponent(event.target.alt)
  }


  return (
    <div>


      <div className={classes.root}>
        <GridList className={classes.innerGrid} cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Pick One</ListSubheader>
        </GridListTile>

          <GridListTile onClick={(event) => handleClick(event)}>
            <img src={maps} alt="maps" />
            <GridListTileBar title="directions" subtitle={<span>get directions</span>} />
          </GridListTile>
          <GridListTile onClick={(event) => handleClick(event)}>
            <img src={restaurants} alt="restaurants" />
            <GridListTileBar title="reservations" subtitle={<span>search by category</span>} />
          </GridListTile>
          <GridListTile onClick={(event) => handleClick(event)}>
            <img src={weather} alt="weather" />
            <GridListTileBar title="weather" subtitle={<span>forecast</span>} />
          </GridListTile>
          <GridListTile onClick={(event) => handleClick(event)}>
            <img src={toDo} alt="toDo" />
            <GridListTileBar title="to-dos" subtitle={<span>complete/add task</span>} />
          </GridListTile>
        </GridList>
      </div>
    </div>
  )

}
