import React, { Component, useState } from 'react';
import './App.css';
import Persona from './Persona/Persona';

const app = propiedades => {

  const [estadoPersonas, cambiarEstadoPersonas] = useState({
    array_de_personas: [
      { nombre: 'Abelardo', edad: 23 },
      { nombre: 'Manuel', edad: 24 }
    ]
  })

  const cambiarNombreHandler = () => {
    cambiarEstadoPersonas({
      array_de_personas: [
        { nombre: 'Abel', edad: 22 },
        { nombre: 'Manuel', edad: 23 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hola, soy una aplicación de React</h1>
      <button onClick={cambiarNombreHandler}>Cambiar Nombre</button>
      <Persona
        nombre={estadoPersonas.array_de_personas[0].nombre}
        edad={estadoPersonas.array_de_personas[0].edad} >Mis hobbies: Correr
        </Persona>
      <Persona
        nombre={estadoPersonas.array_de_personas[1].nombre}
        edad={estadoPersonas.array_de_personas[1].edad}
      />
    </div>
  );
}

export default app;
