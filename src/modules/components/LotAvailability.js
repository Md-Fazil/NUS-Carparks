import React, { Component } from 'react'
import axios from 'axios';

class LotAvailability extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             availability: []
        }
    }
    
    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://nusparking.ramky.com.sg/NpasRest/service/Carpark').then(response => 
        {this.setState({availability: response.data.carpark})})
        .catch(err => console.log(err))
    }

    Helper = (array) => {
        if(array.length <= 1){
            return <p> loading.. </p>
        } else {
        const lotsArray = array.map(({lots}) => lots);
        return (<div>
                {lotsArray.map((value) => {
                return <p>{value}</p>
                })}    
                </div>)
        }
    }

    render() {
        return (
            this.Helper(this.state.availability)
        )
    }
}

export default LotAvailability