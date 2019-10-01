import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  resultsH3: {
    color: 'red'
  }
}));


const Restaurant = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (restaurant) => {
    console.log(restaurant);
    handleClose();
  }



  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div"><h3 className={classes.resultsH3}>showing results for {(props.restaurant.term).toUpperCase()} in {(props.restaurant.location).toUpperCase()}</h3></ListSubheader>
            </GridListTile>
            {props.restaurant.restaurants.map(restaurant => (
              <GridListTile key={restaurant.img}>
                <img src={restaurant.image_url} alt={restaurant.title} />
                <GridListTileBar
                  title={restaurant.name}
                  subtitle={<span>{restaurant.phone} - {restaurant.price}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${restaurant.rating}`} className={classes.icon}>
                      <InfoIcon onClick={handleClick}/>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => handleSelect(restaurant)}>Reserve</MenuItem>
                        <MenuItem onClick={() => handleSelect(restaurant)}>Favorite</MenuItem>
                    </Menu>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
      </div>
      <BackspaceIcon color="primary" fontSize="large" onClick={props.handleClear} />
    </div>
  )
}

export default Restaurant;
