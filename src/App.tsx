import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './component/weather/Routers';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
