import React, {useState,useEffect} from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow, DistanceMatrixService, DirectionsService, DirectionsRenderer, TrafficLayer,StreetViewPanorama} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from "@reach/combobox";
import Geocode from "react-geocode";
import LocationOn from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalParkingOutlinedIcon from '@material-ui/icons/LocalParkingOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';


const icon = { url: require("./image/park.svg"), scaledSize: { width: 32, height: 32 } };

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const data = {"carpark":[{"pos": 0, "lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"pos": 1,"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"pos": 2,"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"pos": 3,"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"pos": 4,"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"pos": 5,"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"pos": 6,"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},
{"pos": 7,"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"pos": 8,"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"pos": 9,"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"pos": 10,"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},
{"pos": 11,"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
{"pos": 12,"lots":136,"longitude":103.770616,"latitude":1.295049,"caption":"Shaw Foundation Building (AS7), Faculty of Arts & ","name":"CP14","id":702,"type":"(Staff only)"},
{"pos": 13,"lots":473,"longitude":103.772185,"latitude":1.293211,"caption":"Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve","name":"CP15","id":703,"type":""},
{"pos": 14,"lots":54,"longitude":103.775315,"latitude":1.293776,"caption":"School of Business","name":"CP11","id":801,"type":""},
{"pos": 15,"lots":40,"longitude":103.774633,"latitude":1.292603,"caption":"Hon Sui Sen Memorial Library, School of Business","name":"CP12","id":802,"type":"(Staff only)"},
{"pos": 16,"lots":58,"longitude":103.775855,"latitude":1.293894,"caption":"Innovation 4.0","name":"CP11B","id":803,"type":""},
{"pos": 17,"lots":13,"longitude":103.776944,"latitude":1.293611,"caption":"TCOMS","name":"CP11C","id":804,"type":""},
{"pos": 18,"lots":99,"longitude":103.776079,"latitude":1.291773,"caption":"I-Cube","name":"CP12B","id":903,"type":""},
{"pos": 19,"lots":27,"longitude":103.77079,"latitude":1.295536,"caption":"Faculty of Arts & Social Science (LT11/AS2)","name":"CP16","id":1001,"type":""},
{"pos": 20,"lots":28,"longitude":103.771951,"latitude":1.296164,"caption":"AS8","name":"CP18","id":1002,"type":"(Staff only)"},
{"pos": 21,"lots":0,"longitude":103.780267,"latitude":1.291692,"caption":"PGP Residences","name":"CP10B","id":1201,"type":""},
{"pos": 22,"lots":9,"longitude":103.781627,"latitude":1.292182,"caption":"CRISPS","name":"CP10A","id":1301,"type":""},
{"pos": 23,"lots":40,"longitude":103.774087,"latitude":1.303158,"caption":"University Town (College Avenue East and West)","name":"U-Town","id":1401,"type":""},
{"pos": 24,"lots":135,"longitude":103.773435,"latitude":1.303741,"caption":"CREATE","name":"CREATETower","id":1402,"type":"(NRF Staff and Visitors)"},
{"pos": 25,"lots":322,"longitude":103.77194,"latitude":1.304957,"caption":"University Town (SRC)","name":"StephenRiadyCentre","id":1403,"type":""},
{"pos": 26,"lots":21,"longitude":103.778297,"latitude":1.296911,"caption":"S1A, Faculty of Science","name":"CP6A","id":1601,"type":"(Staff only)"},
{"pos": 27,"lots":164,"longitude":103.777296,"latitude":1.297492,"caption":"University Hall","name":"CP6B","id":1602,"type":"(Staff and Authorised Visitors only)"},
{"pos": 28,"lots":131,"longitude":103.77441,"latitude":1.300671,"caption":"Sports & Recreation Centre","name":"CP5","id":1701,"type":""},
{"pos": 29,"lots":29,"longitude":103.7753,"latitude":1.299,"caption":"NUS Staff Club","name":"CP5B","id":1702,"type":"(Staff only)"},
{"pos": 30,"lots":208,"longitude":103.781555,"latitude":1.297461,"caption":"S17, Faculty of Science","name":"CP10S","id":1801,"type":"(Staff and Authorised Season Holders)"},
{"pos": 31,"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]};

Geocode.setApiKey("AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ");
Geocode.setLanguage("en");

const libraries = ["places"];

const mapContainerStyle = {
 height: "550px",
 width: "100%",

};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 1.297887,
  lng: 103.775321
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ",
    libraries,
  });

const [selected, setSelected ] = useState({});
const [currentPosition, setCurrentPosition ] = useState({});
const [isLocationObtained, setIsLocationObtained] = useState(false);
const [response, setResponse] = useState(null);
const [destinationLat, setDestinationLat] = useState(0);
const [destinationLng, setDestinationLng] = useState(0);
const [destination, isDestination] = useState(false);
const [control, setControl] = useState(false);
const [duration, setDuration] = useState(0);
const [distance, setDistance] = useState(0);
const [durationObtained, setDurationObtained] = useState(false);
const [addressLat, setAddressLat] = useState(0);
const [addressLng, setAddressLng] = useState(0);
const [address, setAddress] = useState('');
const [direction, setDirection] = useState(false);


const directionsCallback = (response) => {
  
  if (response !== null) {
    if (response.status === 'OK') {
      setResponse(response)
    } else {
      console.log('response: ', response);
    }
  }
}

const durationsCallback = (response, status) => {
  if (response !== null) {
      setDuration(response.rows[0].elements[0].duration.text);
      setDistance(response.rows[0].elements[0].distance.text);
      setDurationObtained(true);
  }
}

const onDirectionsClose = () => {
  setSelected({});
  setDurationObtained(false);
  setResponse(null);
  panToCarpark(center);
  setDirection(false);
  setDestinationLat(0);
  setDestinationLng(0);
  isDestination(false);
  setDuration(0);
  setDistance(0);  
}


const onInfoWindowClose = () => {
  setSelected({});
  setDurationObtained(false);
  setResponse(null);
  setDirection(false);
  setDestinationLat(0);
  setDestinationLng(0);
  isDestination(false);
  setDuration(0);
  setDistance(0);  
}


const success = position => {
  const currentPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  setCurrentPosition(currentPosition);
  setIsLocationObtained(true);
  setAddressLat(position.coords.latitude);
  setAddressLng(position.coords.longitude);
};

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);
  
})

const onDirectionsClick = () => {
  setDirection(true);
  
}

const onSelect = item => {
  setSelected(item);
  setDurationObtained(false);
  setDestinationLat(item.latitude); 
  setDestinationLng(item.longitude); 
  isDestination(true);
  setControl(true);
  Geocode.fromLatLng(addressLat, addressLng).then(
    response => {
      const address = response.results[0].formatted_address;
      setAddress(address);
    },
    error => {
      console.error(error);
    }
  );
}

const mapRef = React.useRef();

const classes = useStyles();

const onMapLoad = React.useCallback((map) => {
  mapRef.current = map;
}, []);

const panTo = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  //mapRef.current.setZoom(15);
}, []);

const panToSearch = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(18);
}, []);

const panToCarpark = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(15.5);
}, []);

const panToLocation = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(16);
}, []);

if (loadError) return "Error";
  
if (!isLoaded) return "Loading...";

 return (
    <div>
      <div style = {{display: 'flex', flexDirection : 'row', position : "absolute", width: '95%', }}>
     
      <div style ={{width: '300px'}}/>
     
      <Search panTo={panToSearch} />
      
      <div>
      <Button className = {classes.button} color = "default" variant = "contained" startIcon = {<LocationOn/>} 
      onClick = {() => {panToLocation(currentPosition)}}
      onClick = {() => {panToLocation({lat: 1.312883, lng: 103.768835})}}
      >
        Your Location
      </Button>
      <Button className = {classes.button} color = "default" variant = "contained" startIcon = {<LocalParkingOutlinedIcon/>} onClick = {() =>{panToCarpark(center)}} >Carparks</Button>
      {direction && (
        <Button         
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />} 
        onClick = {onDirectionsClose}>
        Clear Directions
        </Button>
      )}
      </div>
    
      </div>
      
      <div style = {{height: "50px"}}/>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15.3}
        center={center}
        options={options}
        onLoad={onMapLoad}
        
      >
      <TrafficLayer/>
      {data.carpark.map(park => !direction?
       (<Marker  
          icon = {icon}
          key = {park.id}
          position = {{
                      lat: park.latitude,
                      lng: park.longitude
                     }}    
          onClick={() => onSelect(park)}           
          />    
        ): null)}    

        {selected.name && !direction &&
            (<InfoWindow
              position={{
                lat: selected.latitude,
                lng: selected.longitude
              }}
              clickable={true}
              onCloseClick={onInfoWindowClose}
              style = {{}}
            >
              <div>
              <h3>{selected.name}, {selected.caption} </h3>
              Current Location: <strong>{address}</strong><br/>
              Distance: <strong>{distance}</strong><br/> Estimated Travel Time: <strong>{duration}</strong> 
              <div style = {{ display: "flex", flexDirection: "row"}}>
              <div style = {{width: "60px"}}/> 
              <Button className = {classes.button}
              variant = "contained" 
              color = "secondary" 
              startIcon = {<DirectionsCarOutlinedIcon/>} 
              onClick = {onDirectionsClick}>
              Get Directions
              </Button>
              </div>
              </div>
          
             
            </InfoWindow>
            )
         }

          {isLocationObtained && !direction &&
            ( 
              <Marker 
              //position={currentPosition}
              position = {{lat: 1.312883, lng: 103.768835}}
              >
                Current Location</Marker>
            ) 
          } 

          {!durationObtained && destination && isLocationObtained && control && destinationLat != 0 && destinationLng != 0 && (<DistanceMatrixService
            options={{
              destinations: [{lat: destinationLat, lng: destinationLng}],
            //origins: [currentPosition],
              origins:[{lat: 1.312883, lng: 103.768835}], 
              travelMode: "DRIVING",
            }}
            callback = {durationsCallback}
          />)}
          
          {isLocationObtained && destination && control && direction &&(<DirectionsService
           options = {{
            destination: {lng:destinationLng, lat:destinationLat},
        //  origin: currentPosition,  
            origin:{lat: 1.312883, lng: 103.768835},
            travelMode: "DRIVING"
          }}
          callback = {(response, status) => {setResponse(response); setControl(false);}}
          />)}
          
          {response !== null && (
          <DirectionsRenderer
          options ={{
            directions: response
          }}
          panel = {document.getElementById("panel")}
          />      
          )}  
      {response !== null && (<div id="panel"></div>)}
      </GoogleMap>
      
     
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Your location
    <img src="./image/location.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 1.297887, lng: () => 103.775321},
      radius: 0 * 0,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
          style ={{width: "400px", height: "37px", margin:"8px"}}
        />
        <ComboboxPopover style ={{opacity: 0.8, backgroundColor: 'white'}}>
          <ComboboxList >
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description}  />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}





