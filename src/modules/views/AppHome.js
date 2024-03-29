import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '../components/Table'
import AppHomeLayout from './AppHomeLayout';
import backgroundi from './images/NUS5.jpg'

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
  

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundi})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    height: 700
    
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function AppHome(props) {
  const { classes } = props;

  return (
    <div id = "Availability" style = {{height: 700}}>
    <AppHomeLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Table />
    </AppHomeLayout>
    </div>
  );
}

AppHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHome);
