/* Ejemplo de uso del Hook usestate. */
/* 
Crear un componente de tipo funcion y acceder a su estado.
privado a traves de hook y, ademas, poder modificarlo.
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
  // Valor inicial para un contador.
  const valorInicial = 0;

  // Valor inicialpara una persona.
  const personaInicial = {
    nombre: 'Sergio',
    email: 'bellacus.dev@gamil.com'
  }

  const [contador, setcontador] = useState(valorInicial);
  const [persona, setpersona] = useState(personaInicial);

  /* funcion para actualizar el estado privativo que contiene el contador */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setcontador(contador +1);
  }

  /**
   * funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setpersona(
      {
        nombre: 'Javier',
        email: 'Javier@gmail.com'
      }
    )
  }
  
  return (
    <div>
      <h1>Ejemplo de usestate()</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos personales:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <div>
        <button onClick={incrementarContador}>incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  );
}

export default Ejemplo1;

