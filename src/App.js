import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola, soy una aplicación de React</h1>
        <Persona nombre="Abel" edad="22" >Mis hobbies: Correr</Persona>
        <Persona nombre="Manu" edad="23" />
      </div>
    );
  }
}

export default App;
