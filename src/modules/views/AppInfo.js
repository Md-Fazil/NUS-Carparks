import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import Info from '../components/ParkingInfo'

const styles = (theme) => ({
  root: {
    
    display: 'flex',
    backgroundColor: 'EE7C01',
    overflow: 'hidden',
    flexDirection: 'column'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function AppInfo(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
        <div className = {classes.item} id = 'Info'>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Parking Info
        </Typography>
        </div>
        <div style= {{padding: 4}} className = {classes.item}>
        <Info/>
        </div>
    
    </section>
  );
}

AppInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppInfo);
