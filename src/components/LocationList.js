import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';


const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
  };
  const strToComponents = (cities) => {
    return cities.map( city =>
      (
        <WeatherLocation
          key={city}
          city={city}
          onWeatherLocationClick={ () => handleWeatherLocationClick(city) }
        />
      )
    );
    // key tiene q ser unica, y tiene q estar relacionada con el componente, por eso no es bueno usar el indice, lo mejor es usar id, pero aqui no tenemos id.
  };

  console.log(cities);
  return (
    <div className="locationList">
      {strToComponents(cities)}
    </div>
  )
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;