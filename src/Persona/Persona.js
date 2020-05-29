import React from 'react';

const persona = (propiedades) => {
    return (
        <div>
            <p>Hola, soy {propiedades.nombre} persona y tengo {propiedades.edad} años de edad</p>
            <p> {propiedades.children} </p>
        </div>
    )
}

export default persona;