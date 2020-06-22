import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const data = {"carpark":[{"lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},{"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},{"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
{"lots":136,"longitude":103.770616,"latitude":1.295049,"caption":"Shaw Foundation Building (AS7), Faculty of Arts & ","name":"CP14","id":702,"type":"(Staff only)"},
{"lots":473,"longitude":103.772185,"latitude":1.293211,"caption":"Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve","name":"CP15","id":703,"type":""},
{"lots":54,"longitude":103.775315,"latitude":1.293776,"caption":"School of Business","name":"CP11","id":801,"type":""},
{"lots":40,"longitude":103.774633,"latitude":1.292603,"caption":"Hon Sui Sen Memorial Library, School of Business","name":"CP12","id":802,"type":"(Staff only)"},
{"lots":58,"longitude":103.775855,"latitude":1.293894,"caption":"Innovation 4.0","name":"CP11B","id":803,"type":""},
{"lots":13,"longitude":103.776944,"latitude":1.293611,"caption":"TCOMS","name":"CP11C","id":804,"type":""},
{"lots":99,"longitude":103.776079,"latitude":1.291773,"caption":"I-Cube","name":"CP12B","id":903,"type":""},
{"lots":27,"longitude":103.77079,"latitude":1.295536,"caption":"Faculty of Arts & Social Science (LT11/AS2)","name":"CP16","id":1001,"type":""},
{"lots":28,"longitude":103.771951,"latitude":1.296164,"caption":"AS8","name":"CP18","id":1002,"type":"(Staff only)"},
{"lots":0,"longitude":103.780267,"latitude":1.291692,"caption":"PGP Residences","name":"CP10B","id":1201,"type":""},
{"lots":9,"longitude":103.781627,"latitude":1.292182,"caption":"CRISPS","name":"CP10A","id":1301,"type":""},
{"lots":40,"longitude":103.774087,"latitude":1.303158,"caption":"University Town (College Avenue East and West)","name":"U-Town","id":1401,"type":""},
{"lots":135,"longitude":103.773435,"latitude":1.303741,"caption":"CREATE","name":"CREATETower","id":1402,"type":"(NRF Staff and Visitors)"},
{"lots":322,"longitude":103.77194,"latitude":1.304957,"caption":"University Town (SRC)","name":"StephenRiadyCentre","id":1403,"type":""},
{"lots":21,"longitude":103.778297,"latitude":1.296911,"caption":"S1A, Faculty of Science","name":"CP6A","id":1601,"type":"(Staff only)"},
{"lots":164,"longitude":103.777296,"latitude":1.297492,"caption":"University Hall","name":"CP6B","id":1602,"type":"(Staff and Authorised Visitors only)"},
{"lots":131,"longitude":103.77441,"latitude":1.300671,"caption":"Sports & Recreation Centre","name":"CP5","id":1701,"type":""},
{"lots":29,"longitude":103.7753,"latitude":1.299,"caption":"NUS Staff Club","name":"CP5B","id":1702,"type":"(Staff only)"},
{"lots":208,"longitude":103.781555,"latitude":1.297461,"caption":"S17, Faculty of Science","name":"CP10S","id":1801,"type":"(Staff and Authorised Season Holders)"},
{"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
      selectedPlace : '', 
      isSelected: false 
      }
  }
 
  onClose = props => {
      this.setState({
        selectedPlace: '',
        isSelected: false
      });
  };

  render() {
    return (
      <Map
      google = {this.props.google}
      zoom = {16}
      style = {mapStyles}
      initialCenter = {
        { lat: 1.296643,
          lng: 103.776398}
      }>
          {data.carpark.map(park =>(
              <Marker
              key = {park.id}
              position = {{
                  lat: park.latitude,
                  lng: park.longitude
              }}
              name = {park.caption}
              onClick={() => {this.setState(
                {selectedPlace: park.caption,
                isSelected: true}
              )}}
              /> 
          ))}
          {this.state.selectedPlace && (
           <InfoWindow>park details</InfoWindow>   
          )}
                
      </Map>    
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ'
})(MapContainer);






import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const data = {"carpark":[{"lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},{"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},{"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
{"lots":136,"longitude":103.770616,"latitude":1.295049,"caption":"Shaw Foundation Building (AS7), Faculty of Arts & ","name":"CP14","id":702,"type":"(Staff only)"},
{"lots":473,"longitude":103.772185,"latitude":1.293211,"caption":"Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve","name":"CP15","id":703,"type":""},
{"lots":54,"longitude":103.775315,"latitude":1.293776,"caption":"School of Business","name":"CP11","id":801,"type":""},
{"lots":40,"longitude":103.774633,"latitude":1.292603,"caption":"Hon Sui Sen Memorial Library, School of Business","name":"CP12","id":802,"type":"(Staff only)"},
{"lots":58,"longitude":103.775855,"latitude":1.293894,"caption":"Innovation 4.0","name":"CP11B","id":803,"type":""},
{"lots":13,"longitude":103.776944,"latitude":1.293611,"caption":"TCOMS","name":"CP11C","id":804,"type":""},
{"lots":99,"longitude":103.776079,"latitude":1.291773,"caption":"I-Cube","name":"CP12B","id":903,"type":""},
{"lots":27,"longitude":103.77079,"latitude":1.295536,"caption":"Faculty of Arts & Social Science (LT11/AS2)","name":"CP16","id":1001,"type":""},
{"lots":28,"longitude":103.771951,"latitude":1.296164,"caption":"AS8","name":"CP18","id":1002,"type":"(Staff only)"},
{"lots":0,"longitude":103.780267,"latitude":1.291692,"caption":"PGP Residences","name":"CP10B","id":1201,"type":""},
{"lots":9,"longitude":103.781627,"latitude":1.292182,"caption":"CRISPS","name":"CP10A","id":1301,"type":""},
{"lots":40,"longitude":103.774087,"latitude":1.303158,"caption":"University Town (College Avenue East and West)","name":"U-Town","id":1401,"type":""},
{"lots":135,"longitude":103.773435,"latitude":1.303741,"caption":"CREATE","name":"CREATETower","id":1402,"type":"(NRF Staff and Visitors)"},
{"lots":322,"longitude":103.77194,"latitude":1.304957,"caption":"University Town (SRC)","name":"StephenRiadyCentre","id":1403,"type":""},
{"lots":21,"longitude":103.778297,"latitude":1.296911,"caption":"S1A, Faculty of Science","name":"CP6A","id":1601,"type":"(Staff only)"},
{"lots":164,"longitude":103.777296,"latitude":1.297492,"caption":"University Hall","name":"CP6B","id":1602,"type":"(Staff and Authorised Visitors only)"},
{"lots":131,"longitude":103.77441,"latitude":1.300671,"caption":"Sports & Recreation Centre","name":"CP5","id":1701,"type":""},
{"lots":29,"longitude":103.7753,"latitude":1.299,"caption":"NUS Staff Club","name":"CP5B","id":1702,"type":"(Staff only)"},
{"lots":208,"longitude":103.781555,"latitude":1.297461,"caption":"S17, Faculty of Science","name":"CP10S","id":1801,"type":"(Staff and Authorised Season Holders)"},
{"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      }
  }
 
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
          google = {this.props.google}
          zoom = {16}
          style = {mapStyles}
          initialCenter = {{
                            lat: 1.296643,
                            lng: 103.776398
                          }}>
          {data.carpark.map(park =>(
              <Marker
              key = {park.id}
              position = {{
                            lat: park.latitude,
                            lng: park.longitude
                         }}
              name = {park.caption}
              onClick={this.onMarkerClick}
              />    
          ))}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>          
      </Map>    
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ'
})(MapContainer);


import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const data = {"carpark":[{"lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},{"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},{"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
{"lots":136,"longitude":103.770616,"latitude":1.295049,"caption":"Shaw Foundation Building (AS7), Faculty of Arts & ","name":"CP14","id":702,"type":"(Staff only)"},
{"lots":473,"longitude":103.772185,"latitude":1.293211,"caption":"Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve","name":"CP15","id":703,"type":""},
{"lots":54,"longitude":103.775315,"latitude":1.293776,"caption":"School of Business","name":"CP11","id":801,"type":""},
{"lots":40,"longitude":103.774633,"latitude":1.292603,"caption":"Hon Sui Sen Memorial Library, School of Business","name":"CP12","id":802,"type":"(Staff only)"},
{"lots":58,"longitude":103.775855,"latitude":1.293894,"caption":"Innovation 4.0","name":"CP11B","id":803,"type":""},
{"lots":13,"longitude":103.776944,"latitude":1.293611,"caption":"TCOMS","name":"CP11C","id":804,"type":""},
{"lots":99,"longitude":103.776079,"latitude":1.291773,"caption":"I-Cube","name":"CP12B","id":903,"type":""},
{"lots":27,"longitude":103.77079,"latitude":1.295536,"caption":"Faculty of Arts & Social Science (LT11/AS2)","name":"CP16","id":1001,"type":""},
{"lots":28,"longitude":103.771951,"latitude":1.296164,"caption":"AS8","name":"CP18","id":1002,"type":"(Staff only)"},
{"lots":0,"longitude":103.780267,"latitude":1.291692,"caption":"PGP Residences","name":"CP10B","id":1201,"type":""},
{"lots":9,"longitude":103.781627,"latitude":1.292182,"caption":"CRISPS","name":"CP10A","id":1301,"type":""},
{"lots":40,"longitude":103.774087,"latitude":1.303158,"caption":"University Town (College Avenue East and West)","name":"U-Town","id":1401,"type":""},
{"lots":135,"longitude":103.773435,"latitude":1.303741,"caption":"CREATE","name":"CREATETower","id":1402,"type":"(NRF Staff and Visitors)"},
{"lots":322,"longitude":103.77194,"latitude":1.304957,"caption":"University Town (SRC)","name":"StephenRiadyCentre","id":1403,"type":""},
{"lots":21,"longitude":103.778297,"latitude":1.296911,"caption":"S1A, Faculty of Science","name":"CP6A","id":1601,"type":"(Staff only)"},
{"lots":164,"longitude":103.777296,"latitude":1.297492,"caption":"University Hall","name":"CP6B","id":1602,"type":"(Staff and Authorised Visitors only)"},
{"lots":131,"longitude":103.77441,"latitude":1.300671,"caption":"Sports & Recreation Centre","name":"CP5","id":1701,"type":""},
{"lots":29,"longitude":103.7753,"latitude":1.299,"caption":"NUS Staff Club","name":"CP5B","id":1702,"type":"(Staff only)"},
{"lots":208,"longitude":103.781555,"latitude":1.297461,"caption":"S17, Faculty of Science","name":"CP10S","id":1801,"type":"(Staff and Authorised Season Holders)"},
{"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: ''          //Shows the infoWindow to the selected place upon a marker
      }
  }
 
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      selectedPlace: '',
      showingInfoWindow: false,
      activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
          google = {this.props.google}
          zoom = {16}
          style = {mapStyles}
          initialCenter = {{
                            lat: 1.297887,
                            lng: 103.775321
                          }}>
          {data.carpark.map(park =>(
              <Marker      
              key = {park.id}
              position = {{
                            lat: park.latitude,
                            lng: park.longitude
                         }}
              name = {park.caption}
              onClick= {this.onMarkerClick}         
              />    
          ))}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>          
      </Map>    
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ'
})(MapContainer);












//with location
const mapStyles = {
  width: '100%',
  height: '100%'
};

const icon = { url: require("./image/park.svg"), scaledSize: { width: 32, height: 32 } };

export class MapContainer extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: ''          //Shows the infoWindow to the selected place upon a marker
      }
  }
 
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        {data.carpark.map(park =>(
              <Marker      
              icon = {icon}
              key = {park.id}
              position = {{
                            lat: park.latitude,
                            lng: park.longitude
                         }}
              name = {park.caption}
              onClick= {this.onMarkerClick}         
              />    
          ))}
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ'
})(MapContainer);