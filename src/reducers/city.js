import { SET_CITY } from './../actions/index';  // importamos la action para poder usarla en el reducer

export const city = (state, action) => { // esta es la funcion reducer
  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.payload};
    default:
      return state;
  }
}
