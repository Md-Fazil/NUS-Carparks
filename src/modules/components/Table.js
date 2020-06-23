import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
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



function createData(Carpark, Location, Type, LotsAvailable) {
  return {Carpark, Location, Type, LotsAvailable};
}

const rows = [
  createData('CP6 (Staff Season)', 'S7 & S13, Faculty of Science', 'Staff Only', 0),
  createData('CP7 (Staff Season)', 'S10 & S14, Faculty of Science', 'Staff Only', 0),
  createData('CP8 (Staff Season)', 'S16, Faculty of Science', 'Staff Only', 0),
  createData('CP9A (Staff Season)', 'MD11, Yong Loo Lin School of Medicine', 'Staff Only', 0),
  createData('CP10C (Staff Season)', 'Centre of Life Sciences', 'Staff Only', 0),
  createData('CP1/2/2A/2B', 'Faculty of Engineering', 'Public', 0),
  createData('CP4', 'Raffles Hall', 'Public', 0),
  createData('CP2C', 'DSI', 'Public', 0),
  createData('CP17 (Staff Season)', 'Computer Centre', 'Staff Only', 0),
  createData('CP3', 'University Cultural Centre/Yong Siew Toh Conservatory of Music', 'Public', 0),
  createData('CP3A', 'Lee Kong Chian Natural History Museum', 'Public', 0),
  createData('CP13 (Staff Season)', 'COM1, School of Computing', 'Staff Only', 0),
  createData('CP14 (Staff Season)', 'Shaw Foundation Building (AS7), Faculty of Arts & Social Sciences', 'Staff Only', 0),
  createData('CP15', 'Temasek & Eusoff Hall', 'Public', 0),
  createData('CP11 (Staff Season)', 'BIZ2, School of Business', 'Staff Only', 0),
  createData('CP12 (Staff Season)', 'Hon Sui Sen Memorial Library, School of Business', 'Staff Only', 0),
  createData('CP11B', 'Innovation 4.0', 'Public', 0),
  createData('CP11C', 'TCOMS', 'Public', 0),
  createData('CP12B', 'I-Cube', 'Public', 0),
  createData('CP16', 'Lecture Theatre 11, Faculty of Arts and Social Sciences', 'Public', 0),
  createData('CP18 (Staff Season)', 'AS8, Faculty of Arts & Social Sciences', 'Staff Only', 0),
  createData('CP10B', 'Prince George’s Park Residences', 'Public', 0),
  createData('CP10A', 'CRISPS', 'Public', 0),
  createData('U-Town', 'University Town (College Avenue East and West)', 'Public', 0),
  createData('CREATETower (Staff Season)', 'CREATE', 'Staff Only', 0),
  createData('SRC', 'Stephen Riady Centre, U-Town', 'Public', 0),
  createData('CP6A (Staff Season)', 'S1A, Faculty of Science', 'Staff Only', 0),
  createData('CP6B', 'University Hall', 'Public', 0),
  createData('CP5', 'Sports and Recreation Centre', 'Public', 0),
  createData('CP5B (Staff Season)', 'NUS Staff Club', 'Staff Only', 0),
  createData('CP10 (Staff Season)', 'S17, Faculty of Science', 'Staff Only', 0),
  createData('CP10V', 'S17, Faculty of Science', 'Public', 0),
];

var temp = rows;

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
  { id: 'Type', numeric: true, disablePadding: false, label: 'Carpark Type' },
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
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
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
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected,} = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Carparks in NUS
        </Typography>
      )}

      {<div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Where to?</Form.Label>
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

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: "green",

  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    opacity: 0.5,
    backgroundColor: "green",
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
  searchfield: {
    textAlign: 'center'
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('LotsAvailable');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [table, setTable] = React.useState(temp);

  /*useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://nusparking.ramky.com.sg/NpasRest/service/Carpark').then(response => 
        {setLive(response.data.carpark); setCount(count + 1)})
        .catch(err => console.log(err))
  }); */

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

  function filtering(string) {
    const tableResult = rows.filter(row => row.Location.toLowerCase().includes(string));
    setTable(tableResult);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TextField 
        className={classes.searchfield}
        id="outlined-basic"
        label="Search Carpark"
        variant= 'outlined'
        value={search}
        onChange={e => {
          setSearch(e.target.value.toLowerCase());
          filtering(e.target.value);
        }}
        />
        <p>
          Date : 13/33/22
          Time: 08:00:00
        </p>
        <TableContainer>
          <Table
            className={classes.rows}
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
                      hover
                      onClick={(event) => handleClick(event, row.Carpark)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Carpark}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.Carpark}
                      </TableCell>
                      <TableCell align="left">{row.Location}</TableCell>
                      <TableCell align="left">{row.Type}</TableCell>                
                      <TableCell align="left">{row.LotsAvailable}</TableCell>
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
          rowsPerPageOptions={[3, 5, 7]}
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