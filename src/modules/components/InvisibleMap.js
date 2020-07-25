import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import zIndex from '@material-ui/core/styles/zIndex';

export class InvisibleMap extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const mapStyles= {
            zIndex: -1,
            opacity: 1,
            width: '100%',
            height: '100%'

        };
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ'
  })(InvisibleMap);