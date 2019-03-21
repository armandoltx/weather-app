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


const location = "Sydney,au";
const api_key = "4bce8856b98b59eeff0abf03755be294";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

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
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API
    //https://developer.mozilla.org/es/docs/Web/API/Response
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(api_weather).then( resolve => {
      // console.log(resolve);
      // debugger;
      return resolve.json() // esto es una nueva promise
    }).then( data => {
      console.log(data);
      debugger;
    })



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