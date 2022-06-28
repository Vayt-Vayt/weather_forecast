import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { axiosWeatherForDay } from './component/saga/sagas';
import Routers from './component/weather/Routers';

function App() {
  // axiosWeatherForDay()
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
