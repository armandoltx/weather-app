import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/LocationListContainer';

import './App.css';

const cities = [
  'Sydney, au',
  'Madrid, es',
  'Barcelona, es',
  'Buenos Aires, ar',
  'Lima, pe',
];

class App extends Component {

  // constructor() {   // ya no lo usamos pq lo manejamos con redux
  //   super();

  //   this.state = {
  //     city: null,
  //   }
  // }

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

// ================    TIENE SENTIDO EN EL ANTERIOR COMMIT ================
// const mapDispatchToProps = (dispatch) => (
//   {
//     dispatchSetCity: value => dispatch(setCity(value)) //funcion con parametro value, invocamos a disptach y utilizamos el action creator que es setCity pasandole el parametro value
//   }
// );
// creamos una funcion que invoque connect, q a su vez pide 2 funciones
// la 1 la dejamos nula y la 2 va a ser una funcion que nos permita trabajar con las acciones
// llamada mapDispatchToProps
// componentConnected es una funcion q retorna otra funcion que espera que le pasemos el componente como parametro
//const componentConnected = connect(null, mapDispatchToPropsActions)(App);
// ahora lo que exportamos es el componente pasado por la funcion
// le cambiamos el nombre a componentConnected por AppcConnected
// no tenemos acceso al store ahora, le pasamos a mapDispatchToPropsActions dispatch como parametro y retornara un objet que tendra las funciones que estemos ivocando para hacer la creacion de las secciones

// const AppConnected = connect(null, mapDispatchToProps)(App);

// export default AppConnected;
// export default connect(null, mapDispatchToProps)(App);
