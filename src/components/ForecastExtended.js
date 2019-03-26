import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

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
class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
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