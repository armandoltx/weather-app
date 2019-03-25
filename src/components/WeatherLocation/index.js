import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';

import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,  //city: city, es similar pero como es igual, solo se pone uno
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevPops, prevState) {
    console.log("componentDidUpdate");
  }

  // They are unsafe, van a desaparecer en nuevas versiones de React;
  // componentWillMount() {
  //   console.log("UNSAFE componentWillMount");
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("UNSAFE componentWillUpdate");
  // }


  handleUpdateClick =() => {
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API
    //https://developer.mozilla.org/es/docs/Web/API/Response
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then( resolve => {
      // console.log(resolve);
      // debugger;
      return resolve.json() // esto es una nueva promise
    }).then( data => {
      console.log("resultado del handleUpdateClick");
      const newWeather = transformWeather(data);
      // console.log(data);
      // console.log("data.main humidity", data.main.humidity);
      // console.log("data.main humidity", data.main.temp);
      // console.log("data.main humidity", data.wind.spp);
      // debugger;

      this.setState({
        data: newWeather
      });
    })
  }

  render () {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data} /> : <CircularProgress />}
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;