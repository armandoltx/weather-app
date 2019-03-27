import React, { Component } from 'react';
import { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Sydney, au',
  'Madrid, es',
  'Barcelona, es',
  'Buenos Aires, ar',
  'Lima, pe',
];

const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // window.__REDUX_DEVTOLLS_EXTENSION__ .... to connect the app woith the redux extension for chrome

const setCity = (value) => ({ type: `setCity`, value }); // esto es un action Creator

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

    store.dispatch(setCity(city));
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
