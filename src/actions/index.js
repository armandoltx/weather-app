export const SET_CITY = 'SET_CITY';

// la action es un objeto que tiene el type y el payload, el type es el nombre de la action y el payload el cambio de estado
// en nuestro ejemplo hemos creado una funcion donde pasamos el payload como parametro
 
// const action = {
//   type:  SET_CITY, // este es el nombre de la acion
//   payload: 'lo que se vaya a cambiar'
// }

export const setCity = (payload) => ({ type: SET_CITY, payload }); // esto es un action Creator