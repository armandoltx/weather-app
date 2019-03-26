import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
];

// const data = {
//   temperature: 10,
//   weatherState: 'normal',
//   humidity: 10,
//   wind: 'normal', 
// }

const api_key = "4bce8856b98b59eeff0abf03755be294";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    // fetch or axios
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
    
    fetch(url_forecast) // genera una promise
    .then(
      response => response.json() // pasamos la info q viene del server a json
    ).then( // obtenemos el weather_data como objeto
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log("forecastData => ", forecastData);
        this.setState({
          forecastData: forecastData
        });
      }
    );
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}/>) );
  }

  renderProgress = ()  => {
    return <h3>Cargando Pronostico extendido...</h3>;
  }

  render(){
    const { city } = this.props; // === const city = this.props.city;
    const { forecastData } = this.state;

    return(
      <div>
        <h1 className='forecast-title'>Pronostico Extendido para {city}</h1>
        {
          forecastData ? 
            this.renderForecastItemDays(forecastData)
          :
            this.renderProgress()
        }
      </div>
    );
  }
}


ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;