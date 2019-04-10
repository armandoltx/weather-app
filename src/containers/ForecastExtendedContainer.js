import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';// sirve para conectar las 2 lirberias, react y redux. para q sea un smart component
import ForecastExtended from './../components/ForecastExtended';




class ForecastExtendedContainer extends Component {

  render() {
    return(
      this.props.city &&
      < ForecastExtended city={this.props.city} /> // el props.city viene de la funcion mapStateToProps por eso el nombre distinto ==> this.props.city1
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
}

// a esta funcion se le pasa como parametro el state => const mapStateToProps =(state) => ({ city1: state.city });// esta funcion espera q retornemos un objeto q es la parte del state q nos interesa.  CON DESTRUCTURING:
const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null) (ForecastExtendedContainer);