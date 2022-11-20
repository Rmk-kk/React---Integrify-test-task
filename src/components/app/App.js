import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppHeader from "../app-header/AppHeader";
import React, {useState} from "react";
import WeatherApp from "../weather-app/WeatherApp";
import PersonListContainer from "../person-app/PersonApp";
import WeatherCity from "../weather-app-city/WeatherCity";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddPersonForm from "../person-app-add-form/AddPersonForm";

const App = () => {

  return (
      <Router>
          <div className="App">
              <AppHeader/>
              <Routes>
                  <Route path='/' element={<PersonListContainer/>}/>
                  <Route path='/weather' element={<WeatherApp/>}/>
                  <Route exact path='/weather/:id' element={<WeatherCity />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
