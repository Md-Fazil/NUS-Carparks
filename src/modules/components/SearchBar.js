import React, {Component} from 'react'
import  Select  from 'react-select'
import searchdata from 'searchdata.json'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: null};
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (selectedOption) => {
        this.setState(selectedOption);
    }

    render() {
        const searchList = searchdata.map(
            (place) => {
              return { 
               value: place.latitude, 
               label: place.location
              }
             }
            );
        return (
            <div>
             <Select
               value={this.state.selectedOption}
               options={searchList}
               onChange={this.handleChange}
               placeholder= "Search..."
               openMenuOnClick={false}
             />
            </div>
        )
    }
}

export default SearchBar