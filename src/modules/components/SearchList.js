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
              <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                <option>School of Computing</option>
                <option>Faculty of Engineering</option>
                <option>Faculty of Science</option>
                <option>U-town</option>
                <option>School of Business</option>
              </Form.Control>
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
