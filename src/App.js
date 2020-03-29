import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddressInput from "./Components/AddressInput.js";
import MapsContainer from "./Components/MapsContainer";

function App() {
  return (
    <div className="App">
      <h1>Jusqu'où pouvez-vous aller?</h1>
      <AddressInput />
      <div className="MapsContainer">
        <MapsContainer />
      </div>
    </div>
  );
}

export default App;
