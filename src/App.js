import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

class App extends Component {
  state = {
    array_de_personas: [
      { nombre: 'Abelardo', edad: 23 },
      { nombre: 'Manuel', edad: 24 }
    ]
  }

  cambiarNombreHandler = () => {
    this.setState({
      array_de_personas: [
        { nombre: 'Abel', edad: 22 },
        { nombre: 'Manuel', edad: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hola, soy una aplicación de React</h1>
        <button onClick={this.cambiarNombreHandler}>Cambiar Nombre</button>
        <Persona nombre={this.state.array_de_personas[0].nombre} edad={this.state.array_de_personas[0].edad} >Mis hobbies: Correr</Persona>
        <Persona nombre={this.state.array_de_personas[1].nombre} edad={this.state.array_de_personas[1].edad} />
      </div>
    );
  }
}

export default App;
