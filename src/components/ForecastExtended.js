import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
  render(){
    const { city } = this.props; // === const city = this.props.city;

    return(
      <div>
        <h1 className='forecast-title'>Pronostico Extendido para {city}</h1>
      </div>
    );
  }
}


ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;