/**
 * Ejemplo para entender el uso de props.chindren
 */

import React from 'react';

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo de Chindren props</h1>
      <h2>
        Nombre: {props.nombre}
      </h2>
      {/* props.childen pintara por defecto aquello que se encuentre en las etiquetas 
      de apertura y cierre de este componente desde el componente de orden superior */}
      {props.children}
    </div>
  );
}

export default Ejemplo4;
