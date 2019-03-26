import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
  render(){
    const { city } = this.props; // === const city = this.props.city;

    return(
      <div>Pronostico Extendido para {city}</div>
    );
  }
}


ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;