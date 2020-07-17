import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SearchList extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'School of Computing'};
    }
  
    render() {
      return <div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><b>Where to?</b></Form.Label>
          <div style ={{width: 10}}/>
          <Form.Control as="select">
            <option value={[103.7714891, 1.2948582]}>School of Computing</option>
            <option value={[103.7682901, 1.3000924]}>Faculty of Engineering</option>
            <option>Faculty of Science</option>
            <option value={[103.7708709, 1.3054913]}>U-town</option>
            <option>School of Business</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
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