
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';  
const apikey = ''
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsZwc4NHo2JhjvtoFmv5N89u7Ta042KtE&libraries=places"></script> */}

const Marker = ({ text }) => <div>{text}</div>;

const Map = ({ pickupLocation, dropoffLocation }) => {
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // San Francisco as default center
  const [zoom, setZoom] = useState(11); // Zoom level

  const handleApiLoaded = (map, maps) => {
    // Get geocoded location for pickup and dropoff addresses
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address: pickupLocation }, (results, status) => {
      if (status === 'OK') {
        // Set center of map to pickup location
        setCenter({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() });

        // Add marker for pickup location
        const marker = new maps.Marker({
          position: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
          map,
          title: 'Pickup Location',
        });
      } else {
        console.error(`Geocode error: ${status}`);
      }
    });

    geocoder.geocode({ address: dropoffLocation }, (results, status) => {
      if (status === 'OK') {
        // Add marker for dropoff location
        const marker = new maps.Marker({
          position: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
          map,
          title: 'Dropoff Location',
        });
      } else {
        console.error(`Geocode error: ${status}`);
      }
    });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Marker lat={pickupLocation.lat} lng={pickupLocation.lng} text="Pickup Location" />
        <Marker lat={dropoffLocation.lat} lng={dropoffLocation.lng} text="Dropoff Location" />
      </GoogleMapReact>
    </div>
  );
};

const App = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDropoffLocationChange = (event) => {
    setDropoffLocation(event.target.value);
  };

  return (
    <div>
      <label>
        Pickup Location:
        <input type="text" value={pickupLocation} onChange={handlePickupLocationChange} />
      </label>
      <br />
      <label>
        Dropoff Location:
        <input type="text" value={dropoffLocation} onChange={handleDropoffLocationChange} />
      </label>
      <br />
      {pickupLocation && dropoffLocation && (
        <Map
          pickupLocation={pickupLocation}
          dropoffLocation={dropoffLocation}
        />
      )}
    </div>
  );
};

export default App;
