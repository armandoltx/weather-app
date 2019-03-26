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
class ForecastExtended extends Component {

  renderForecastItemDays() {
    return days.map( day => (<ForecastItem weekDay={day}/>) );
  }

  render(){
    const { city } = this.props; // === const city = this.props.city;

    return(
      <div>
        <h1 className='forecast-title'>Pronostico Extendido para {city}</h1>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}


ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;