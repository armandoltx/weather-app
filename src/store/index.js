import { createStore } from 'redux';


export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // window.__REDUX_DEVTOLLS_EXTENSION__ .... to connect the app woith the redux extension for chrome