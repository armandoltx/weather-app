import { createStore } from 'redux';
import { city } from './../reducers/city';  // es desde donde importamos el reducer

const initialState ={}; // estado inicial de la app.

// const reducer = (state, action) => {
//   return state;
// }
// la funcion reducer recibe como parametros el state y la accion.
// los reducers los pasamos a la carpeta reducer para tenerlos mejor ordenados por eso lo dejo comentado aqui
// como aqui lo q queremos manejar es la ciudad, creamos city


export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
// Se le pasa al store como parametros la funcion reducer y el estado inicial de la app.
// window.__REDUX_DEVTOLLS_EXTENSION__ .... to connect the app woith the redux extension for chrome