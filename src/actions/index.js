export const SET_CITY = 'SET_CITY';

// la action es un objeto que tiene el type y el payload, el type es el nombre de la action y el payload el cambio de estado
// en nuestro ejemplo hemos creado una funcion donde pasamos el payload como parametro
 
// const action = {
//   type:  SET_CITY, // este es el nombre de la acion
//   payload: 'lo que se vaya a cambiar'
// }

export const setCity = (payload) => ({ type: SET_CITY, payload }); // esto es un action Creator

const api_key = "4bce8856b98b59eeff0abf03755be294";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = (payload) => {
  return (dispatch) => {  // gracias al Middleware thunk podemos crear esta funcion a la q le pasamos el dispatch como parametro
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    
    // activar en el estado un indicador de busqueda de datos
    fetch(url_forecast) // genera una promise
      .then(
        response => response.json() // pasamos la info q viene del server a json
      ).then( // obtenemos el weather_data como objeto
        weather_data => {
          const forecastData = transformForecast(weather_data);
          console.log("forecastData => ", forecastData);
          
          // En este punto se modifica el estado con el resultado de la promise
        }
      );
  }
}