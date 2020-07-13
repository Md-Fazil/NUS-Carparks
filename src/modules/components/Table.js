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

<<<<<<< HEAD
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

function descendingComparator(a, b, orderBy, location, order) {
  if (orderBy === "Coords") {
    return distanceComparator(a, b,location);
  }
  if (orderBy === "Type") {
    return typeComparator(a, b, location, order);
=======
function descendingComparator(a, b, orderBy, location) {
  if (orderBy === "Coords") {
    return distanceComparator(a, b, location);
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy, location) {
<<<<<<< HEAD
  return (order === 'desc' || orderBy === "Type")
    ? (a, b) => descendingComparator(a, b, orderBy, location, order)
    : (a, b) => -descendingComparator(a, b, orderBy, location, order);
=======
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy, location)
    : (a, b) => -descendingComparator(a, b, orderBy, location);
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
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
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
    <Toolbar
      className={classes.root}
    >
    
      <CssTextField
        inputProps={{className: classes.input}}
        InputLabelProps={{className: classes.input}}
        label="Search Carpark Location"
        variant="outlined"
        id="custom-css-outlined-input"
        style = {{width: 400}}
        onChange = {whenChange}
      />
      <div style ={{width: 450}}/>
      {<div className={classes.where}>
        <Form onSubmit={finalPlace}>
          <Form.Group controlId="exampleForm.ControlSelect1" className = {classes.test}>
            <Form.Label><b>Where to?</b></Form.Label>
            <div style ={{width: 10}}/>
            <Form.Control as="select" onChange={selected}>
<<<<<<< HEAD
              <option value={[103.7714891, 1.2948582]}>School of Computing</option>
              <option value={[103.7682901, 1.3000924]}>Faculty of Engineering</option>
              <option>Faculty of Science</option>
              <option value={[103.7708709, 1.3054913]}>U-town</option>
=======
              <option>School of Computing</option>
              <option value={[103.7682901, 1.3000924]}>Faculty of Engineering</option>
              <option>Faculty of Science</option>
              <option>U-town</option>
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
              <option>School of Business</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Go!
          </Button>
        </Form>
      </div>}

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
<<<<<<< HEAD
  const [nearest, setNearest] = React.useState(navigator.geolocation ? true : false);
=======
  const [nearest, setNearest] = React.useState(false);
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [table, setTable] = React.useState(temp);
<<<<<<< HEAD
  const [location, setLocation] = React.useState([0,0]);
  const [finalDestination, setFinalDestination] = React.useState([103.7714891, 1.2948582]);
  const [isFinalSelected, setIsFinalSelected] = React.useState(false);
  const [isFirstTime, setIsFirstTime] = React.useState(true);
=======
  const [location, setLocation] = React.useState([0, 0]);
  const [finalDestination, setFinalDestination] = React.useState([0, 0]);
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17

  useEffect(() => {
    //axios.get('https://cors-anywhere.herokuapp.com/https://nusparking.ramky.com.sg/NpasRest/service/Carpark').then(response => 
        //{setLive(response.data.carpark); setCount(count + 1)})
        //.catch(err => console.log(err))
<<<<<<< HEAD
    if (isFirstTime) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        setLocation([coords.longitude, coords.latitude]);
      });
      setIsFirstTime(false);
    } 
    if (isFinalSelected) {
    
    } else if (navigator.geolocation && !isFinalSelected) {
      const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = position.coords;
          setLocation([coords.longitude, coords.latitude]);
        })
      }, 5000);
      return () => clearInterval(interval);
=======
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        setLocation([coords.longitude, coords.latitude]);
      })
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
    }
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
<<<<<<< HEAD
    if (nearest && property !== "Type") {
=======
    if (nearest) {
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
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
    setTable(tableResult);
  };

  const handleChange = (event) => {
    setFinalDestination(event.target.value);
  };

<<<<<<< HEAD
  const handleSubmit = () => {
    //const tableResult = stableSort(table, getComparator(order, "Coords", finalDestination));
    alert(orderBy);
    alert(finalDestination);
    setIsFinalSelected(true);
    setLocation(finalDestination);
  }

  const handleSort = (event) => {
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
=======
  const handleSubmit = (event) => {
    const tableResult = stableSort(table, getComparator(order, orderBy, finalDestination));
    alert(finalDestination);
    setTable(tableResult);
  }

  const handleSort = (event) => {
    if (event.target.checked) {
      setOrder('desc');
      setOrderBy("Coords");
    } else {
      setOrderBy("LotsAvailable");
    }
>>>>>>> bca6b5408c92b13a42854422822ff5e9adcbfa17
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
            />
            <TableBody>
              {stableSort(table, getComparator(order, orderBy, location))
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
                      <TableCell className={classes.content} align="center"><b>{row.Location}</b></TableCell>
                      <TableCell className={classes.content} align="center"><b>{row.Type}</b></TableCell>                
                      <TableCell className={row.LotsAvailable < 50 ? classes.lowContent : classes.highContent} align= "center">
                        <b>{row.LotsAvailable}</b></TableCell>
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