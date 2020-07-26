import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form'

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: [103.7714891, 1.2948582]};
  }


  
    render() {
      const mystyle = {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 16
      };
      const useStyles = {
        width: 300,
        };
      return <div style={mystyle}>
        <Form.Label><b>Search Nearby</b></ Form.Label>
        <div style={{width: 20}}></div>
        <select onChange={this.props.selectedLocation}>
            <optgroup label='Schools'>
              <option value='0'>Computing</option>
              <option value='1'>Engineering</option>
              <option value='2'>Science</option>
              <option value='3'>Medicine</option>
              <option value='4'>Dentistry</option>
              <option value='5'>Design and Environment</option>
              <option value='6'>Business</option>
              <option value='7'>Yale-NUS College</option>
              <option value='8'>FASS</option>
            </optgroup>
            <optgroup label='Residences'>
              <option value='9'>Temasek Hall</option>
              <option value='10'>Eusoff Hall</option>
              <option value='11'>Kent Ridge Hall</option>
              <option value='12'>Sheares Hall</option>
              <option value='13'>Raffles Hall</option>
              <option value='14'>Prince George's Park Residences</option>
              <option value='15'>King Edward VII Hall</option>
              <option value='16'>Residential College 4</option>
              <option value='17'>College of Alice and Peter Tan</option>
              <option value='18'>Tembusu College</option>
              <option value='19'>Cinnamon College</option>
              <option value='20'>Ridge View Residences</option>
            </optgroup>
            <optgroup label='Cultural/Recreational/Social Facilities'>
              <option value='21'>Kent Ridge Guild House</option>
              <option value='22'>NUS Staff Club</option>
              <option value='23'>Sports and Recreation Centre</option>
              <option value='24'>University Cultural Centre</option>
              <option value='25'>Lee Kong Chian Natural History Museum</option>
              <option value='26'>Ventus</option>
              <option value='27'>University Health Centre</option>
              <option value='28'>I-Cube</option>
              <option value='29'>Yusoff Ishak House</option>
              <option value='30'>Central Library</option>
              <option value='31'>NUS Information Technology</option>
              <option value='32'>TCOMS</option>
              <option value='33'>University Hall</option>
              <option value='34'>CREATE Tower</option>
            </optgroup>
            <optgroup label='U-Town'>
              <option value='35'>Stephen Riady Centre</option>
              <option value='36'>Education and Resource Centre</option>
            </optgroup>
        </ select>
        <Button variant="contained" color="secondary" onClick={this.props.finalClick}>
         Go!
        </Button>
      </div>
    }
}

export default SearchList



/*<Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
<option>School of Computing</option>
<option>Faculty of Engineering</option>
<option>Faculty of Science</option>
<option>U-town</option>
<option>School of Business</option>
</Form.Control>*/