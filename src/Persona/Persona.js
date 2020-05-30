import React from 'react';
import './Persona.css';

const persona = (propiedades) => {
    return (
        <div className="Persona">
            <p onClick={propiedades.click}>Hola, soy {propiedades.nombre} persona y tengo {propiedades.edad} años de edad</p>
            <p> {propiedades.children} </p>
            <input type="text" onChange={propiedades.cambiar} value={propiedades.nombre} />
        </div>
    )
}

export default persona;