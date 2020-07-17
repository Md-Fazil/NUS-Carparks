import React, {useState,useRef,useEffect} from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow, DistanceMatrixService, DirectionsService, DirectionsRenderer, TrafficLayer,StreetViewPanorama} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from "@reach/combobox";
import { formatRelative } from "date-fns";
import Axios from "axios";
//import "@reach/combobox/styles.css";
//import mapStyles from "./mapStyles";

const icon = { url: require("./image/park.svg"), scaledSize: { width: 32, height: 32 } };

const data = {"carpark":[{"lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},
{"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},
{"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
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
{"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]};

const destinationData = [
{lng:103.778961,lat:1.296788},
{lng:103.779851,lat:1.297239},
{lng:103.780732,lat:1.297417},
{lng:103.782044,lat:1.296284},
{lng:103.781069,lat:1.294556},
{lng:103.77098,lat:1.296488},
{lng:103.774462,lat:1.299937},
{lng:103.772492,lat:1.299078},
{lng:103.772388,lat:1.297044},
{lng:103.77331,lat:1.302189},
{lng:103.773386,lat:1.301946},
{lng:103.772555,lat:1.294125},
{lng:103.770616,lat:1.295049},
{lng:103.772185,lat:1.293211},
{lng:103.775315,lat:1.293776},
{lng:103.774633,lat:1.292603},
{lng:103.775855,lat:1.293894},
]

const destinationData2 = [
{lng:103.776944,lat:1.293611},
{lng:103.776079,lat:1.291773},
{lng:103.77079,lat:1.295536},
{lng:103.771951,lat:1.296164},
{lng:103.780267,lat:1.291692},
{lng:103.781627,lat:1.292182},
{lng:103.774087,lat:1.303158},
{lng:103.773435,lat:1.303741},
{lng:103.77194,lat:1.304957},
{lng:103.778297,lat:1.296911},
{lng:103.777296,lat:1.297492},
{lng:103.77441,lat:1.300671},
{lng:103.7753,lat:1.299},
{lng:103.781555,lat:1.297461},
{lng:103.782244,lat:1.297083}];

const libraries = ["places"];

const mapContainerStyle = {
 height: "500px",
 width: "80%",
 margin: "auto"

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
const [control, setControl] = useState(true);
const [duration, setDuration] = useState(0);
const [distance, setDistance] = useState(0);
const [durationObtained, setDurationObtained] = useState(false);

const directionsCallback = (response) => {
  console.log(response);
  if (response !== null) {
    if (response.status === 'OK') {
      setResponse(response)
    } else {
      console.log('response: ', response);
    }
  }
}

const durationsCallback = (response, status) => {
  console.log(response);
  if (response !== null) {
    if (status === 'OK') {
      setDuration(response.rows[0].elements[0].duration.text);
      setDistance(response.rows[0].elements[0].distance.text);
      setDurationObtained(true);
    } else {
      console.log('response: ', response);
    }
  }
}

const onInfoWindowClose = () => {
  setSelected({});
  
}
const success = position => {
  const currentPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  setCurrentPosition(currentPosition);
  setIsLocationObtained(true);
};

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);
})

const onSelect = item => {
  setSelected(item);
}

const mapRef = React.useRef();

const onMapLoad = React.useCallback((map) => {
  mapRef.current = map;
}, []);

const panTo = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(14);
}, []);

if (loadError) return "Error";
  
if (!isLoaded) return "Loading...";

 return (
    <div>
      <button onClick = {() => {panTo(currentPosition)}}>Your location</button>
      <Search panTo={panTo} style = {{position: 'absolute'}} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
      <TrafficLayer/>
      {data.carpark.map(park =>
        ( <Marker  
          icon = {icon}
          key = {park.id}
          position = {{
                      lat: park.latitude,
                      lng: park.longitude
                     }}    
          onClick={() => onSelect(park)}           
          />    
        ))}    

        {selected.name && 
            (<InfoWindow
              position={{
                lat: selected.latitude,
                lng: selected.longitude
              }}
              clickable={true}
              onCloseClick={onInfoWindowClose}
              style ={{width: 700, height: 100}}
            >
              <div>
              <h3>{selected.name} {selected.type} <br/> {selected.caption}</h3> 
              {duration == 0 && (<button onClick = {() => {setDestinationLat(selected.latitude); setDestinationLng(selected.longitude); isDestination(true);
              setControl(true);}}>Get Directions</button>)}
              {durationObtained && (<h5>Distance: {distance} <br/> Travel time: {duration} </h5>)}
              </div>
            </InfoWindow>
            )
         }

          { currentPosition.lat &&
            ( 
              <Marker position={currentPosition}>Current Location</Marker>
            ) 
          } 

          {destination && duration == 0 && distance == 0 && (<DistanceMatrixService
            options={{
              destinations: [{lng: destinationLng, lat: destinationLat}],
              origins: [{lng:103.780267, lat:1.291692}],
              travelMode: "DRIVING",
            }}
            callback = {durationsCallback}
          />)}
          
          {control && isLocationObtained && destination &&(<DirectionsService
           options = {{
            destination: {lng:destinationLng, lat:destinationLat},
            origin: currentPosition,
            travelMode: "DRIVING"
          }}
          callback = {(response, status) => {setResponse(response); console.log(response); setControl(false);}}
          />)}
          
          {response !== null && (
          <DirectionsRenderer
          options ={{
            directions: response
          }}
          />
          )}  

          


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
     // <img src="/compass.svg" alt="compass" />
    </button>
  );
}


function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 1.297887, lng: () => 103.775321},
      radius: 1 * 1,
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
    <div className="search" style = {{zIndex: 10}}>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}



/*
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow,useGoogleMap, DirectionsRenderer,DirectionsService } from "@react-google-maps/api";

const icon = { url: require("./image/park.svg"), scaledSize: { width: 32, height: 32 } };

const data = {"carpark":[{"lots":26,"longitude":103.778961,"latitude":1.296788,"caption":"S7 & S13, Faculty of Science","name":"CP6","id":101,"type":"(Staff only)"},
{"lots":18,"longitude":103.779851,"latitude":1.297239,"caption":"S10 & S14, Faculty of Science","name":"CP7","id":104,"type":"(Staff only)"},
{"lots":18,"longitude":103.780732,"latitude":1.297417,"caption":"S16, Faculty of Science","name":"CP8","id":201,"type":"(Staff only)"},
{"lots":21,"longitude":103.782044,"latitude":1.296284,"caption":"MD11, Yong Loo Lin School of Medicine","name":"CP9A","id":203,"type":"(Staff only)"},
{"lots":23,"longitude":103.781069,"latitude":1.294556,"caption":"Centre for Life Sciences","name":"CP10C","id":301,"type":"(Staff only)"},
{"lots":351,"longitude":103.77098,"latitude":1.296488,"caption":"School of Design/Faculty of Engineering","name":"CP1/CP2/CP2A/CP2B","id":401,"type":""},
{"lots":116,"longitude":103.774462,"latitude":1.299937,"caption":"Raffles Hall","name":"CP4","id":402,"type":""},
{"lots":45,"longitude":103.772492,"latitude":1.299078,"caption":"DSI","name":"CP2C","id":403,"type":""},
{"lots":41,"longitude":103.772388,"latitude":1.297044,"caption":"NUS IT","name":"CP17","id":502,"type":"(Staff only)"},
{"lots":223,"longitude":103.77331,"latitude":1.302189,"caption":"University Cultural Centre/Yong Siew Toh Conservat","name":"CP3","id":601,"type":""},
{"lots":42,"longitude":103.773386,"latitude":1.301946,"caption":"Lee Kong Chian Natural History Museum","name":"CP3A","id":604,"type":""},
{"lots":110,"longitude":103.772555,"latitude":1.294125,"caption":"COM1, School of Computing","name":"CP13","id":701,"type":"(Staff only)"},
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
{"lots":41,"longitude":103.782244,"latitude":1.297083,"caption":"S17, Faculty of Science","name":"CP10V","id":1802,"type":""}]};


function Map() {
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});
  const [count, setCount] = useState(0);
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    if(count == 0){

      setCount(1);
      alert('1 request sent');
    }
  })
  
  const onSelect = item => {
    setSelected(item);
  }
  const [currentCenter, setCurrentCenter] = useState({
    lat: 1.297887,
    lng: 103.775321
  });

  const mapContainerStyle = {
    height: "500px",
    width: "80%",
    margin: "auto"
  };

  return (
      <LoadScript id="script-loader" googleMapsApiKey="AIzaSyBrgo3k6ArVPdNxrWTGPQtorFPoJcZjDaQ">
        <GoogleMap
          id="google-map-api"
          mapContainerStyle={mapContainerStyle}
          zoom={15.5}
          center={currentCenter}
        >
        
        {data.carpark.map(park =>
        ( <Marker  
          icon = {icon}
          key = {park.id}
          position = {{
                      lat: park.latitude,
                      lng: park.longitude
                     }}    
          onClick={() => onSelect(park)}           
          />    
        ))}    

        {selected.name && 
            (<InfoWindow
              position={{
                lat: selected.latitude,
                lng: selected.longitude
              }}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}-{selected.caption}</p>
            </InfoWindow>
            )
         }             

          { currentPosition.lat &&
            ( 
              <Marker position={currentPosition}>Current Location</Marker>
            ) 
          }
        <DirectionsService options = {{
        origin: { lat: 1.296788, lng: 103.778961 },
        destination: { lat: 1.303158, lng: 103.774087 },
        travelMode: 'DRIVING'
      }} callback = {(result, status) => {console.log(status);console.log(result)}}/>
        </GoogleMap>
      </LoadScript>
    
  );
}

export default Map;
*/

/*


          <DistanceMatrixService
            options={{
              destinations: destinationData,
              origins: [{lng:103.780267, lat:1.291692}],
              travelMode: "DRIVING",
            }}
            callback = {(response, status) => {console.log(response)}}
          />


    
         { count == 0 && (<DirectionsService
           options = {{
            destination: {lng:103.780267, lat:1.291692},
            origin: currentPosition,
            travelMode: "DRIVING"
          }}
          callback = {(response, status) => {setResponse(response); console.log(response.rows); setCount(1);}}
          />)}

          {response !== null && (
            <DirectionsRenderer
            options ={{
              directions: response
            }}
            />
          )}         
          */