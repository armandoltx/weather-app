import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import moment from 'moment';

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
];


const data = {
  temperature: 10,
  weatherState: 'normal',
  humidity: 10,
  wind: 'normal', 
}

const api_key = "4bce8856b98b59eeff0abf03755be294";
const url = "http://api.openweathermap.org/data/2.5/forecast";

const transformForecast = (data) => {
  return (
    data.list.filter(item =>(
      moment.unix(item.dt).utc().hour() === 6 ||
      moment.unix(item.dt).utc().hour() === 12 ||
      moment.unix(item.dt).utc().hour() === 18
    ))
  );
};
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

  renderForecastItemDays() {
    return days.map( day => (<ForecastItem weekDay={day} data={data}/>) );
  }

  renderProgress = ()  => {
    return <h3>Cargando Pronostico extendido...</h3>;
  }

  render(){
    const { city } = this.props; // === const city = this.props.city;
    const { forecastData } = this.state;

    return(
      <div>
        <h1 className='forecast-title'>Pronostico Extendido para {city} hour={10}</h1>
        {
          forecastData ? 
            this.renderForecastItemDays()
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