import React from 'react';

const persona = (propiedades) => {
    return (
        <div>
            <p onClick={propiedades.click}>Hola, soy {propiedades.nombre} persona y tengo {propiedades.edad} años de edad</p>
            <p> {propiedades.children} </p>
            <input type="text" onChange={propiedades.cambiar} value={propiedades.nombre} />
        </div>
    )
}

export default persona;