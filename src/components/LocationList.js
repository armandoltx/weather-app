import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city={"Sydney,au"} />
      <WeatherLocation city={"Madrid,es"} />
      <WeatherLocation city={"Buenos Aires,ar"} />
    </div>
  )
};

export default LocationList;