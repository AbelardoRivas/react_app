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

  cambiarValorHandler = (nuevoNombre) => {
    this.setState({
      array_de_personas: [
        { nombre: nuevoNombre, edad: 22 },
        { nombre: 'Manuel', edad: 23}
      ]
    })
  }

  cambiarNombreHandler = (event) => {
    this.setState({
      array_de_personas: [
        { nombre: event.target.value, edad: 22 },
        { nombre: 'Manuel', edad: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hola, soy una aplicación de React</h1>
        <button onClick={this.cambiarValorHandler.bind(this, '¡Abelardo!')}>Cambiar Nombre</button>
        <Persona 
          nombre={this.state.array_de_personas[0].nombre} 
          edad={this.state.array_de_personas[0].edad}
          click={this.cambiarValorHandler}
          cambiar={this.cambiarNombreHandler} >Mis hobbies: Correr
        </Persona>
        <Persona 
          nombre={this.state.array_de_personas[1].nombre} 
          edad={this.state.array_de_personas[1].edad} 
        />
      </div>
    );
  }
}

export default App;
