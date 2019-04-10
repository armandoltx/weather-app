import { SET_FORECAST_DATA } from './../actions';  // importamos la action para poder usarla en el reducer


export const cities = (state = {}, action) => {// esta es la funcion reducer
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload;
      //  return { ...state, [city]: { forecastData: forecastData, weather: null }; por ecma script:
      return { ...state, [city]: { forecastData }};
    default:
      return state;
  }
}



import { SET_CITY } from './../actions/index';

export const city = (state, action) => { // esta es la funcion reducer
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
}
