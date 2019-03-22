import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
} from './../../constants/weather';


const location = "Sydney,au";
const api_key = "4bce8856b98b59eeff0abf03755be294";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

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

  getTemp =(kelvin) => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
  }

  getWeatherState = (weather_data) => {
    return SUN;
  }

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp);

    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }

    return data;
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

      const newWeather = this.getData(data);
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