import React, { Component } from 'react';
import { connect } from 'react-redux'; // sirve para conectar las 2 lirberias, react y redux.
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';

const cities = [
  'Sydney, au',
  'Madrid, es',
  'Barcelona, es',
  'Buenos Aires, ar',
  'Lima, pe',
];

class App extends Component {

  constructor() {
    super();

    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = (city) => {
    this.setState({
      city: city // the 2nd city is coming as a parameter
    });
    console.log(`handleSelectedLocation ${city}`);

    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;
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
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
                {
                  city &&
                    <ForecastExtended city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
        
      </Grid>
    );
  }
}

// export default App;

const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value)) //funcion con parametro value, invocamos a disptach y utiliza,ps el action creator que es setCity pasandole el parametro value
});
// creamos una funcion que invoque connect, q a su vez pide 2 funciones
// la 1 la dejamos nula y la 2 va a ser una funcion que nos permita trabajar con las acciones
// llamada mapDispatchToProps
// componentConnected es una funcion q retorna otra funcion que espera que le pasemos el componente como parametro
//const componentConnected = connect(null, mapDispatchToPropsActions)(App);
// ahora lo que exportamos es el componente pasado por la funcion
// le cambiamos el nombre a componentConnected por AppcConnected
// no tenemos acceso al store ahora, le pasamos a mapDispatchToPropsActions dispatch como parametro y retornara un objet que tendra las funciones que estemos ivocando para hacer la creacion de las secciones
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
