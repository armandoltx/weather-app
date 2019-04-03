import React, { Component } from 'react';
import { connect } from 'react-redux'; // sirve para conectar las 2 lirberias, react y redux. para q sea un smart component
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

  handleSelectedLocation = (city) => {

    this.props.dispatchSetCity(city);
  }


  render() {
    return(
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatchSetCity: value => dispatch(setCity(value)) //funcion con parametro value, invocamos a disptach y utilizamos el action creator que es setCity pasandole el parametro value
  }
);


export default connect(null, mapDispatchToProps)(LocationListContainer);