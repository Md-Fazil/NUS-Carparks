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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { TextField } from '@material-ui/core';
import axios from 'axios';




function createData(Carpark, Location, Type, LotsAvailable, link) {
  return {Carpark, Location, Type, LotsAvailable, link};
}

const rows = [
  createData('CP6', 'S7 & S13, Faculty of Science', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6.pdf"),
  createData('CP7', 'S10 & S14, Faculty of Science', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-7.pdf"),
  createData('CP8', 'S16, Faculty of Science', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-8.pdf"),
  createData('CP9A', 'MD11, Yong Loo Lin School of Medicine', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-9A.pdf"),
  createData('CP10C', 'Centre of Life Sciences', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10C.pdf"),
  createData('CP1/2/2A/2B', 'Faculty of Engineering', 'Public', 0,'http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-1.pdf'),
  createData('CP4', 'Raffles Hall', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-44A.pdf"),
  createData('CP2C', 'DSI', 'Public', 0),
  createData('CP17', 'Computer Centre', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-17.pdf"),
  createData('CP3', 'University Cultural Centre/Yong Siew Toh Conservatory of Music', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3.pdf"),
  createData('CP3A', 'Lee Kong Chian Natural History Museum', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3A.pdf"),
  createData('CP13', 'COM1, School of Computing', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-13.pdf"),
  createData('CP14', 'Shaw Foundation Building (AS7), Faculty of Arts & Social Sciences', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-14.pdf"),
  createData('CP15', 'Temasek & Eusoff Hall', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-15.pdf"),
  createData('CP11', 'BIZ2, School of Business', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-11A.pdf"),
  createData('CP12', 'Hon Sui Sen Memorial Library, School of Business', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-12.pdf"),
  createData('CP11B', 'Innovation 4.0', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-11.pdf"),
  createData('CP11C', 'TCOMS', 'Public', 0),
  createData('CP12B', 'I-Cube', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-12B.pdf"),
  createData('CP16', 'Lecture Theatre 11, Faculty of Arts and Social Sciences', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-16.pdf"),
  createData('CP18', 'AS8, Faculty of Arts & Social Sciences', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-18.pdf"),
  createData('CP10B', 'Prince George’s Park Residences', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10B.pdf"),
  createData('CP10A', 'CRISPS', 'Public', 0,"http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10A.pdf"),
  createData('U-Town', 'University Town (College Avenue East and West)', 'Public', 0),
  createData('CREATETower', 'CREATE', 'Staff Only', 0),
  createData('SRC', 'Stephen Riady Centre, U-Town', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-SRC.pdf"),
  createData('CP6A', 'S1A, Faculty of Science', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6A.pdf"),
  createData('CP6B', 'University Hall', 'Public', 0,"http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6B.pdf"),
  createData('CP5', 'Sports and Recreation Centre', 'Public', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-5.pdf"),
  createData('CP5B', 'NUS Staff Club', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-5B.pdf"),
  createData('CP10', 'S17, Faculty of Science', 'Staff Only', 0, "http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10-staff.pdf"),
  createData('CP10V', 'S17, Faculty of Science', 'Public', 0),
];

var temp = rows;


function filtering(string) {
  const tableResult = rows.filter(row => row.Location.toLowerCase().includes(string));
  temp = tableResult;
}


function setLive(array){
  for(let i = 0; i < rows.length; i++){
    rows[i].LotsAvailable = array[i].lots;
  }
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
  { id: 'Carpark', numeric: false, disablePadding: true, label: 'Carpark' },
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
  const { numSelected, whenChange} = props;

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
      <div style ={{width: 250}}/>
      {<div className={classes.where}>
        <Form.Group controlId="exampleForm.ControlSelect1" className = {classes.test}>
          <Form.Label><b>Where to?</b></Form.Label>
          <div style ={{width: 10}}/>
          <Form.Control as="select">
            <option>School of Computing</option>
            <option>Faculty of Engineering</option>
            <option>Faculty of Science</option>
            <option>U-town</option>
            <option>School of Business</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Go!
        </Button>
      </div>}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
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

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('LotsAvailable');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [table, setTable] = React.useState(temp);

 /* useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://nusparking.ramky.com.sg/NpasRest/service/Carpark').then(response => 
        {setLive(response.data.carpark); setCount(count + 1)})
        .catch(err => console.log(err))
  });
  */

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
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
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
          numSelected={selected.length} 
          table={table} 
          value={search}
          whenChange={filtering}/>
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
              {stableSort(table, getComparator(order, orderBy))
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
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}