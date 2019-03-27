import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';

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

    store.dispatch(setCity(city)); // en vez de hacer el dispatch de una accion directamente se llama a un actiom creator, que es una funcion.
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

export default App;
