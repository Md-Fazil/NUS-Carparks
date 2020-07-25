import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: [103.7714891, 1.2948582]};
  }


  
    render() {
      const mystyle = {
        display: 'flex',
        flexDirection: 'row',
        color: "#013D7C",
        fontSize: 18,
      };
      const anotherstyle = {
        display: 'flex',
        flexDirection: 'row'
      };
      const useStyles = {
          width: 300,
        };
      return <div style={mystyle}>
        <FormControl className={useStyles} onClick={this.props.selectedLocation}>
          <InputLabel htmlFor="grouped-select">Where to?</InputLabel>
          <Select style={useStyles} defaultValue="Computing" id="grouped-select">
            <ListSubheader disableSticky={true}>Schools</ListSubheader>
              <MenuItem value='0'>Computing</MenuItem>
              <MenuItem value='1'>Engineering</MenuItem>
              <MenuItem value='2'>Science</MenuItem>
              <MenuItem value='3'>Medicine</MenuItem>
              <MenuItem value='4'>Dentistry</MenuItem>
              <MenuItem value='5'>Design and Environment</MenuItem>
              <MenuItem value='6'>Business</MenuItem>
              <MenuItem value='7'>Yale-NUS College</MenuItem>
              <MenuItem value='8'>FASS</MenuItem>
            <ListSubheader disableSticky={true}>Residences</ListSubheader>
              <MenuItem value='9'>Temasek Hall</MenuItem>
              <MenuItem value='10'>Eusoff Hall</MenuItem>
              <MenuItem value='11'>Kent Ridge Hall</MenuItem>
              <MenuItem value='12'>Sheares Hall</MenuItem>
              <MenuItem value='13'>Raffles Hall</MenuItem>
              <MenuItem value='14'>Prince George's Park Residences</MenuItem>
              <MenuItem value='15'>King Edward VII Hall</MenuItem>
              <MenuItem value='16'>Residential College 4</MenuItem>
              <MenuItem value='17'>College of Alice and Peter Tan</MenuItem>
              <MenuItem value='18'>Tembusu College</MenuItem>
              <MenuItem value='19'>Cinnamon College</MenuItem>
              <MenuItem value='20'>Ridge View Residences</MenuItem>
            <ListSubheader disableSticky={true}>Cultural/Recreational/Social Facilities</ListSubheader>
              <MenuItem value='21'>Kent Ridge Guild House</MenuItem>
              <MenuItem value='22'>NUS Staff Club</MenuItem>
              <MenuItem value='23'>Sports and Recreation Centre</MenuItem>
              <MenuItem value='24'>University Cultural Centre</MenuItem>
              <MenuItem value='25'>Lee Kong Chian Natural History Museum</MenuItem>
              <MenuItem value='26'>Ventus</MenuItem>
              <MenuItem value='27'>University Health Centre</MenuItem>
              <MenuItem value='28'>I-Cube</MenuItem>
              <MenuItem value='29'>Yusoff Ishak House</MenuItem>
              <MenuItem value='30'>Central Library</MenuItem>
              <MenuItem value='31'>NUS Information Technology</MenuItem>
              <MenuItem value='32'>TComms</MenuItem>
              <MenuItem value='33'>University Hall</MenuItem>
              <MenuItem value='34'>CREATE Tower</MenuItem>
            <ListSubheader disableSticky={true}>U-Town</ListSubheader>
              <MenuItem value='35'>Stephen Riady Centre</MenuItem>
              <MenuItem value='36'>Education and Resource Centre</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="secondary" onClick={this.props.finalClick}>
         Go!
        </Button>
      </div>
    }
}

export default SearchList



/*<Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
<MenuItem>School of Computing</MenuItem>
<MenuItem>Faculty of Engineering</MenuItem>
<MenuItem>Faculty of Science</MenuItem>
<MenuItem>U-town</MenuItem>
<MenuItem>School of Business</MenuItem>
</Form.Control>*/