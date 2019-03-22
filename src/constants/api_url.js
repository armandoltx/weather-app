const location = "Sydney,au";
const api_key = "4bce8856b98b59eeff0abf03755be294";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

