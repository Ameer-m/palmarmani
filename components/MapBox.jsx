'use client';
// components/MyGoogleMap.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  maxWidth: '100%',
  height: '400px'
};

const center = {
  lat: 25.1213703,
  lng: 55.1217638
};

const location = {
  lat: 25.1383125, 
  lng: 55.1465625, 
  title: 'Your Location Title', 
  description: 'Your location description or information.'
};

const mapOptions = {
    mapTypeControl: false // This will hide the map type control
  };

const MyGoogleMap = () => {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            padding: '10px',
            
            zIndex: 1, // Make sure it's above the map
          }} className='m-4 lg:m-8'>
          <h2 className='text-black font-semibold text-lg md:text-2xl'>Armani Beach Residences<br /> Palm Jumeirah</h2>
        </div>
  
        <LoadScript googleMapsApiKey="AIzaSyCJOfM6OuArYyPucOr8YhGwnEyUUOs1F0s">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={mapOptions}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  };

export default React.memo(MyGoogleMap);