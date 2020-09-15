import React from 'react';

import AirportChooser from './AirportChooser/AirportChooser';

import './App.css';

function App() {
  return (
    <div className='App'>
      <AirportChooser
        noOfElementsToAdd='10'
        url='./data1.json'
      ></AirportChooser>
    </div>
  );
}

export default App;
