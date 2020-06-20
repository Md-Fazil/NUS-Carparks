import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class SearchList extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'School of Computing'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A location was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        return <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Label>Where to?</Form.Label>
            </Col>
            <Col>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="School of Computing">School of Computing</MenuItem>
                <MenuItem value="Faculty of Engineering">Twenty</MenuItem>
                <MenuItem value="U-Town">U-Town</MenuItem>
                <MenuItem value="Faculty of Science">Faculty of Science</MenuItem>
                <MenuItem value="School of Business">School of Business</MenuItem>
              </Select>
              <FormHelperText>Final Destination</FormHelperText>
              </FormControl>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
              Go!
              </Button> 
            </Col>
          </Form.Row>
        </Form>
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