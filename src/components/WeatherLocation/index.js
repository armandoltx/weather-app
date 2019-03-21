import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../constants/weather';

const data = {
  temperature: 5,
  weatherState: SNOW,
  humidity: 10,
  wind: '10 m/s',
}

const data2 = {
  temperature: 35,
  weatherState: SUN,
  humidity: 90,
  wind: '5 m/s',
}

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Sydney',
      data: data, // coming from the const declared before.
    };
  }

  handleUpdateClick =() => {
    console.log("Actualizado");

    this.setState({
      city: 'Melbourne',
      data: data2
    });
  }

  render () {
    const { city, data } = this.state
    return (
      <div className="weatherLocationCont">
        <Location city={city}/>
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;