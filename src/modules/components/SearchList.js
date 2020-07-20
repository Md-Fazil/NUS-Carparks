import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      return <div style={mystyle}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><b>Where to?</b></Form.Label>
          <Form.Control as="select" onChange={this.props.selectedLocation} style={anotherstyle}>
            <option value={[103.7714891, 1.2948582]}>School of Computing</option>
            <option value={[103.7682901, 1.3000924]}>Faculty of Engineering</option>
            <option>Faculty of Science</option>
            <option value={[103.7708709, 1.3054913]}>U-town</option>
            <option>School of Business</option>
            <option>Music Library</option>
            <option>Medical Library</option>
            <option>Central Library</option>
            <option>Chinese Library</option>
            <option>Science Library</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.props.finalClick}>
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