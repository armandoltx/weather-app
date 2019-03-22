import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
} from './../../constants/weather';


const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
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
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API
    //https://developer.mozilla.org/es/docs/Web/API/Response
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(api_weather).then( resolve => {
      // console.log(resolve);
      // debugger;
      return resolve.json() // esto es una nueva promise
    }).then( data => {

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