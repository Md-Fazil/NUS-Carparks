import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { TextField } from '@material-ui/core';
import axios from 'axios';
import SearchList from './SearchList';




function createData(Carpark, Location, Type, LotsAvailable, Coords, link) {
  return {Carpark, Location, Type, LotsAvailable, Coords, link};
}

const rows = [
  createData('CP6', 'S7 & S13, Faculty of Science', 'Staff Only', 28, [103.778961, 1.296788], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6.pdf"),
  createData('CP7', 'S10 & S14, Faculty of Science', 'Staff Only', 26, [103.779851, 1.297239], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-7.pdf"),
  createData('CP8', 'S16, Faculty of Science', 'Staff Only', 26, [103.780732, 1.297417], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-8.pdf"),
  createData('CP9A', 'MD11, Yong Loo Lin School of Medicine', 'Staff Only', 24, [103.782044, 1.296284], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-9A.pdf"),
  createData('CP10C', 'Centre of Life Sciences', 'Staff Only', 25, [103.781069, 1.294556], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10C.pdf"),
  createData('CP1/2/2A/2B', 'Faculty of Engineering', 'Public', 386, [103.77098, 1.296488], 'http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-1.pdf'),
  createData('CP4', 'Raffles Hall', 'Public', 116, [103.774462, 1.299937], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-44A.pdf"),
  createData('CP2C', 'DSI', 'Public', 45, [103.772492, 1.299078]),
  createData('CP17', 'Computer Centre', 'Staff Only', 41, [103.772388, 1.297044], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-17.pdf"),
  createData('CP3', 'University Cultural Centre/Yong Siew Toh Conservatory of Music', 'Public', 220, [103.77331, 1.302189], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3.pdf"),
  createData('CP3A', 'Lee Kong Chian Natural History Museum', 'Public', 45, [103.773386, 1.301946], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3A.pdf"),
  createData('CP13', 'COM1, School of Computing', 'Staff Only', 113, [103.772555, 1.294125], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-13.pdf"),
  createData('CP14', 'Shaw Foundation Building (AS7), Faculty of Arts & Social Sciences', 'Staff Only', 132, [103.770616, 1.295049], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-14.pdf"),
  createData('CP15', 'Temasek & Eusoff Hall', 'Public', 443, [103.772185, 1.293211], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-15.pdf"),
  createData('CP11', 'BIZ2, School of Business', 'Staff Only', 51, [103.775315, 1.293776], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-11A.pdf"),
  createData('CP12', 'Hon Sui Sen Memorial Library, School of Business', 'Staff Only', 41, [103.774633, 1.292603], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-12.pdf"),
  createData('CP11B', 'Innovation 4.0', 'Public', 55, [103.775855, 1.293894], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-11.pdf"),
  createData('CP11C', 'TCOMS', 'Public', 7, [103.776944, 1.293611]),
  createData('CP12B', 'I-Cube', 'Public', 94, [103.776079, 1.291773], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-12B.pdf"),
  createData('CP16', 'Lecture Theatre 11, Faculty of Arts and Social Sciences', 'Public', 22, [103.77079, 1.295536], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-16.pdf"),
  createData('CP18', 'AS8, Faculty of Arts & Social Sciences', 'Staff Only', 27, [103.771951, 1.296164], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-18.pdf"),
  createData('CP10B', 'Prince George’s Park Residences', 'Public', 0, [103.780267, 1.291692], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10B.pdf"),
  createData('CP10A', 'CRISPS', 'Public', 0, [103.781627, 1.292182], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10A.pdf"),
  createData('U-Town', 'University Town (College Avenue East and West)', 'Public', 47, [103.774087, 1.303158]),
  createData('CREATETower', 'CREATE', 'Staff Only', 130, [103.773435, 1.303741]),
  createData('SRC', 'Stephen Riady Centre, U-Town', 'Public', 323, [103.77194, 1.304957], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-SRC.pdf"),
  createData('CP6A', 'S1A, Faculty of Science', 'Staff Only', 20, [103.778297, 1.296911], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6A.pdf"),
  createData('CP6B', 'University Hall', 'Public', 161, [103.777296, 1.297492], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6B.pdf"),
  createData('CP5', 'Sports and Recreation Centre', 'Public', 140, [103.77441, 1.300671], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-5.pdf"),
  createData('CP5B', 'NUS Staff Club', 'Staff Only', 29, [103.7753, 1.299], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-5B.pdf"),
  createData('CP10', 'S17, Faculty of Science', 'Staff Only', 212, [103.781555, 1.297461], "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10-staff.pdf"),
  createData('CP10V', 'S17, Faculty of Science', 'Public', 45, [103.782244, 1.297083]),
];

const tables = [
[['CP13',0.1,1], ['CP11',0.1,1], ['CP15',0.2,2], ['CP12',0.3,4], ['CP11B',0.3,4], ['CP14',0.5,6], ['CP16',0.6,7]],
[['CP1/2/2A/2B', 0.1, 1], ['CP2C', 0.3,4], ['CP4', 0.5,6], ['CP5',0.5,6], ['CP3A',0.6,8], ['CP3',0.6,8], ['CP5B',0.6,8]],
[['CP8',0.1,1], ['CP7',0.2,2], ['CP6A',0.2,2], ['CP6',0.2,3], ['CP10', 0.3,3], ['CP10V',0.3,3], ['CP6B',0.4,5]],
[['CP9A',0.1,1], ['CP10',0.2,3], ['CP10V',0.2,3], ['CP8',0.3,4], ['CP7',0.4,5], ['CP6',0.4,5], ['CP6A',0.7,8]],
[['CP9A',0.2,3], ['CP10V',0.2,3], ['CP10',0.3,3], ['CP8',0.4,5], ['CP7',0.4,6], ['CP10C',0.5,7], ['CP6',0.5,7]],
[['CP1/2/2A/2B',0.2,2], ['CP18',0.3,4], ['CP16',0.3,4], ['CP14',0.4,5], ['CP17',0.4,6], ['CP2C',0.8,10], ['CP4',0.8,11]],
[['CP12',0.1,1], ['CP11',0.2,2], ['CP12B',0.2,3], ['CP13',0.3,3], ['CP11B',0.3,4], ['CP15',0.3,4], ['CP11C',0.4,5]],
[['SRC',0.2,3], ['CREATETower',0.3,4], ['U-Town',0.4,5], ['CP3',0.5,6], ['CP3A',0.6,8], ['CP5',1.0,13], ['CP4',1.1,14]],
[['CP14',0.1,1], ['CP16',0.2,2], ['CP15',0.2,2], ['CP18',0.3,4], ['CP13',0.3,4], ['CP17',0.5,7], ['CP11',0.7,8]],
[['CP15',0.1,1], ['CP13',0.3,4], ['CP14',0.4,5], ['CP16',0.4,5], ['CP12',0.6,8], ['CP12B',0.7,9], ['CP11',0.8,10]],
[['CP15',0.1,1], ['CP14',0.2,2], ['CP16',0.3,4], ['CP13',0.4,6], ['CP18',0.4,6], ['CP12',0.7,8], ['CP12B',0.8,9]],
[['CP12',0.1,1], ['CP12B',0.2,2], ['CP11B',0.3,3], ['CP11',0.3,4], ['CP15',0.4,5], ['CP13',0.4,6], ['CP14',0.6,8]],
[['CP12B',0.1,1], ['CP12',0.2,2], ['CP11',0.4,4], ['CP11B',0.4,6], ['CP15',0.5,6], ['CP13',0.5,7], ['CP11C',0.5,7]],
[['CP4',0.1,1], ['CP5',0.1,2], ['CP5B',0.2,3], ['CP3',0.3,3], ['CP3A',0.3,3], ['CP2C',0.4,7], ['CP17',0.5,7]],
[['CP10B',0.1,2], ['CP10A',0.4,6], ['CP11C',0.6,7], ['CP11B',0.7,9], ['CP11',0.8,9], ['CP12',0.9,11], ['CP12B',1.2,15]],
[['CP10A',0.3,4], ['CP10B',0.6,8], ['CP11C',0.9,12], ['CP11B',1.0,13], ['CP11',1.0,13], ['CP12',1.2,15], ['CP10C',1.3,16]],
[['SRC',0.6,7], ['CREATETower',0.7,9], ['U-Town',0.8,10], ['CP3',1.0,12], ['CP3A',1.0,12], ['CP5',1.0,13], ['CP4',1.1,14]],
[['SRC',0.7,8], ['CREATETower',0.7,9], ['U-Town',0.7,9], ['CP3',1.0,12], ['CP3A',1.0,12], ['CP5',1.0,12], ['CP4',1.1,13]],
[['CREATETower',0.4,5], ['SRC',0.5,6], ['U-Town',0.5,6], ['CP5',0.7,9], ['CP3',0.8,10], ['CP3A',0.8,10],['CP4',0.8,10]],
[['CREATETower',0.5,6], ['SRC',0.6,7], ['U-Town',0.7,8], ['CP5',0.8,9], ['CP3',0.9,11], ['CP3A',0.9,11],['CP4',0.9,11]],
[['CP6B',0.1,1], ['CP6A',0.2,3], ['CP6',0.3,3], ['CP7',0.3,4], ['CP5B',0.3,4], ['CP8',0.4,5], ['CP10',0.5,6]],
[['CP15',0.1,2], ['CP13',0.2,2], ['CP12',0.3,4], ['CP11',0.4,5], ['CP14',0.4,5], ['CP12B',0.4,6], ['CP16',0.5,6]],
[['CP5B',0.1,1], ['CP4',0.2,3], ['CP6B',0.2,3], ['CP5',0.3,4], ['CP6A',0.4,5], ['CP6',0.5,6], ['CP3A',0.5,7]],
[['CP5',0.1,1], ['CP4',0.3,4], ['CP5B',0.4,5], ['CP3',0.4,5], ['CP3A',0.4,5], ['U-Town',0.5,6], ['CP6B',0.7,9]],
[['CP3',0.2,2], ['CP3A',0.2,2], ['CP5',0.3,4], ['CP4',0.3,5], ['CP2C',0.3,5], ['CP5B',0.5,7], ['U-Town',0.6,7]],
[['CP3A',0.1,1], ['CP5',0.1,2], ['CP3',0.2,2], ['CP4',0.2,3], ['CP5B',0.3,5], ['U-Town',0.4,5], ['CP2C',0.4,6]],
[['CP14',0.1,1], ['CP16',0.1,1], ['CP1/2/2A/2B',0.2,2], ['CP18',0.3,4], ['CP15',0.4,5], ['CP13',0.4,5], ['CP17',0.4,6]],
[['CP5B',0.1,2],['CP6B',0.2,3],['CP4',0.3,4],['CP6A',0.3,5],['CP5',0.3,4],['CP6',0.4,5],['CP7',0.5,6]],
[['CP12B',0.1,2],['CP12',0.2,3],['CP11',0.2,4],['CP11B',0.3,5],['CP11C',0.4,7],['CP15',0.5,8],['CP13',0.6,9]],
[['CP5B', 0.1,1],['CP4',0.1,2],['CP5',0.2,3],['CP6B',0.3,4],['CP2C',0.4,6],['CP17',0.4,6],['CP3A', 0.5,5]],
[['CP17',0.1,1],['CP18',0.1,1],['CP1/2/2A/2B',0.2,3],['CP16',0.3,3],['CP4',0.4,5],['CP2C',0.4,5],['CP5',0.5,6]],
[['CP17', 0.1, 1],['CP2C',0.4,5],['CP18',0.2,2],['CP1/2/2A/2B',0.3,3],['CP16',0.3,4],['CP14',0.4,5], ['CP5B',0.4,5]],
[['CP11C' ,0.1, 1],['CP11B', 0.1, 1],['CP11', 0.2, 2],['CP12', 0.3,4],['CP12B', 0.6, 7],['CP10B',0.6, 8],['CP15', 0.7,9]],
[['CP6B', 0.1,1],['CP6A',0.1,1],['CP6',0.2,2],['CP7',0.2,3],['CP8',0.3,4],['CP5B',0.3,4],['CP10',0.4,5]],
[['CREATETower',0.01,1],['SRC',0.2,3],['U-Town',0.3,4],['CP5',0.6,8],['CP4',0.7,9],['CP3',0.8,10],['CP3A',0.8,10]],
[['SRC', 0.1, 1], ['CREATETower', 0.2, 3],['U-Town', 0.4, 5],['CP3A', 0.9, 11], ['CP5', 0.9, 11],['CP4', 0.9,11], ['CP3', 1.0, 12]],
[['SRC', 0.4,5],['CREATETower', 0.5, 6],['U-Town', 0.5, 6],['CP5', 0.8, 10],['CP3A', 0.8, 10],['CP4', 0.8, 10],['CP3',0.9, 11]]
];

var temp = rows;

function setLive(array){
  for(let i = 0; i < rows.length; i++){
    rows[i].LotsAvailable = array[i].lots;
  }
}

function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist) * (180/Math.PI) * 60 * 1.1515 * 1.609344;
		return dist;
	}
}

function distanceComparator(a, b, location) {
  const locationToA = distance(a.Coords[1], a.Coords[0], location[1], location[0]);
  const locationToB = distance(b.Coords[1], b.Coords[0], location[1], location[0]);
  if (locationToB < locationToA) {
    return 1;
  }
  if (locationToB > locationToA) {
    return -1;
  }
  return 0;
}

function typeComparator(a, b,location, order) {
  const locationToA = distance(a.Coords[1], a.Coords[0], location[1], location[0]);
  const locationToB = distance(b.Coords[1], b.Coords[0], location[1], location[0]);
  if (order === 'desc') {
    if (b.Type < a.Type) {
      return -1;
    }
    if (b.Type > a.Type) {
      return 1;
    }
    if (locationToB < locationToA) {
      return 1;
    }
    if (locationToB > locationToA) {
      return -1;
    }
    return 0;
  } else {
    if (b.Type < a.Type) {
      return 1;
    }
    if (b.Type > a.Type) {
      return -1;
    }
    if (locationToB < locationToA) {
      return 1;
    }
    if (locationToB > locationToA) {
      return -1;
    }
    return 0;
  }
}

function descendingComparator(a, b, orderBy, location, order,) {
  if (orderBy === "Coords") {
    return distanceComparator(a, b,location);
  }
  if (orderBy === "Type") {
    return typeComparator(a, b, location, order);
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy, location, manual) {
  if (manual) {
    return (a, b) => 1;
  } else if (order === 'desc' || orderBy === "Type") {
    return (a, b) => descendingComparator(a, b, orderBy, location, order);
  } else {
    return (a, b) => -descendingComparator(a, b, orderBy, location, order);
  }
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'Carpark', numeric: false, disablePadding: true, label: 'Car Park' },
  { id: 'Location', numeric: false, disablePadding: false, label: 'Location' },
  { id: 'Type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'LotsAvailable', numeric: true, disablePadding: false, label: 'Lots Available' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, manual } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.header}
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id? order : false}
          >
            {headCell.label}
            <TableSortLabel
              className={classes.icon}
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {manual && (<TableCell className={classes.header} align={"center"}>Distance</TableCell>)}
        {manual && (<TableCell className={classes.header} align={"center"}>Walking Time</TableCell>)}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
  table: temp,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    flexDirection: "row"
   
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
   
    color: "#013D7C",
    fontSize: 32
  },
  where: {
    display: 'flex',
    flexDirection: 'row',
    color: "#013D7C",
    fontSize: 18,

  },
  test: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    color: "#013D7C",
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, whenChange, finalPlace, selected} = props;

  return (
    <Toolbar className={classes.root}>
      <CssTextField
        inputProps={{className: classes.input}}
        InputLabelProps={{className: classes.input}}
        label="Search Carpark Location"
        variant="outlined"
        id="custom-css-outlined-input"
        style = {{width: 400}} 
        onChange = {whenChange}
      />
      <div style ={{width: 500}}/>
      <div className={classes.where}>
        <SearchList selectedLocation={selected} finalClick={finalPlace}/>
      </div>

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    opacity: 0.8
 
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
    backgroundColor: "#F8F8F8",
  },
  table: {
    minWidth: 750,
    
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0) ',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  content: {
    color: "#013D7C",
    fontSize: 16,
    fontFamily: 'Montserrat',
    
  },
  icon: {
    opacity: 1,
   
   
  },
  header: {
    color: "#013D7C",
    fontSize: 19,
    fontFamily: 'Montserrat',
   

  },
  lowContent: {
    color: "red",
    fontSize: 16,
    fontFamily: 'Montserrat'
  },
  highContent: {
    color: "#33F31B",
    fontSize: 16,
    fontFamily: 'Montserrat'
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "orange",
        color: "blue"
      },
      "&:hover fieldset": {
        borderColor: "orange"
      },
      "&.Mui-focused fieldset": {
        borderColor: "orange"
      }
    }
  }
})(TextField);


export default function EnhancedTable() {
  const classes = useStyles();
  //const success = (position) => [position.coords.longitude, position.coords.latitude];

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState(navigator.geolocation ? 'Coords' : 'LotsAvailable');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [nearest, setNearest] = React.useState(navigator.geolocation ? true : false);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [table, setTable] = React.useState(temp);
  const [location, setLocation] = React.useState([0,0]);
  const [finalDestination, setFinalDestination] = React.useState(0);
  const [isFirstTime, setIsFirstTime] = React.useState(true);
  const [manualTableSort, setManualTableSort] = React.useState(false);
  const [manual,setManual]= React.useState(false);

  useEffect(() => {
    //axios.get('https://cors-anywhere.herokuapp.com/https://nusparking.ramky.com.sg/NpasRest/service/Carpark').then(response => 
        //{setLive(response.data.carpark); setCount(count + 1)})
        //.catch(err => console.log(err))
    if (isFirstTime) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        setLocation([coords.longitude, coords.latitude]);
      });
      setIsFirstTime(false);
    } else if (navigator.geolocation && !manualTableSort) {
      const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = position.coords;
          setLocation([coords.longitude, coords.latitude]);
        })
      }, 15000);
      return () => clearInterval(interval);
    }
 
  });

  const handleRequestSort = (event, property) => {
    //alert('handleRequestSort');
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setManualTableSort(false);
    if (nearest && property !== "Type") {
      setNearest(false);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Carpark);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const filtering = (event) => {
    setSearch(event.target.value.toLowerCase());
    const tableResult = rows.filter(row => row.Location.toLowerCase().includes(event.target.value.toLowerCase()));
    //setManual(false);
    setTable(tableResult);
  };

  const handleChange = (event) => {
    //const res = event.target.value.split(',', 2);
    //setFinalDestination([parseFloat(res[0]), parseFloat(res[1])]);
    setFinalDestination(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    //const tableResult = stableSort(table, getComparator(order, "Coords", finalDestination));  
    if (!nearest) {
      //setOrderBy('Coords');
      //setOrder('desc');
      setNearest(true);
    }
    const tableContent = tables[finalDestination];
    console.log(tableContent);
    const tableResult = tableContent.map(content => {
      for (let i = 0; i < rows.length; i++) {
        if (content[0] === rows[i].Carpark) {
          return rows[i];
        }
      }
    });
    setManualTableSort(true);
    //setManual(true);
    setLocation(0);
    setTable(tableResult);

  }

  const handleSort = (event) => {
    alert('handleSort')
    if (event.target.checked && orderBy !== "Type") {
      setOrder("desc");
      setOrderBy("Coords");
    } 
    if (event.target.checked && orderBy === "Type") {
      setOrderBy("Type");
    }
    if (!event.target.checked) {
      setOrderBy("LotsAvailable");
    } 
    setNearest(event.target.checked);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
          numSelected={selected.length} 
          whenChange={filtering}
          selected={handleChange}
          finalPlace={handleSubmit}/>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}

            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              manual={manualTableSort}
            />
            <TableBody>
              {stableSort(table, getComparator(order, orderBy, location, manualTableSort))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Carpark);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className={classes.table}
                      hover
                      onClick={(event) => handleClick(event, row.Carpark)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Carpark}
                      selected={isItemSelected}
                    >
                      <TableCell className={classes.content} component="th" id={labelId} scope="row" padding="none" align="center">
                        <a href={row.link} target="_blank"><b>{row.Carpark}</b></a>
                      </TableCell>
                      <TableCell className={classes.content} align="center">
                        <b>{row.Location}</b>
                      </TableCell>
                      <TableCell className={classes.content} align="center"><b>{row.Type}</b></TableCell>                
                      <TableCell className={row.LotsAvailable < 50 ? classes.lowContent : classes.highContent} align= "center">
                        <b>{row.LotsAvailable}</b></TableCell>
                      {manualTableSort && (<TableCell className={classes.content} align="center"><b>{tables[finalDestination][index][1]} km</b></TableCell>)}
                      {manualTableSort && (<TableCell className={classes.content} align="center"><b>{tables[finalDestination][index][2]} {tables[finalDestination][index][2] === 1 ? 'min' : 'mins'}</b></TableCell>)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.content}
          rowsPerPageOptions={[5, 7]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={nearest} onChange={handleSort} />}
        label="Nearest"
      />
    </div>
  );
}