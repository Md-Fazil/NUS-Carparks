import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import { styles as toolbarStyles } from '../components/Toolbar';
import Navbar from '../components/navbar/Navbar';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1
    
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.common.white,
  },
});

function AppNavBar(props) {
  const { classes } = props;

  return (
    <div>
    <div>
    <div>
      <AppBar position="fixed">
      <Navbar className = {classes.toolbar}/>  
      </AppBar>
      <div className={classes.placeholder} />
    </div>
    </div>
    </div>
  );
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);


