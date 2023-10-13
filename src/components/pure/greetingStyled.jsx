import React from 'react';
import { useState } from 'react';

// definiendo estilos usuario logueado
const loggedStyle = {
  color: 'white',
  fontWeight: 'bold',
}

// definiendo estilos de usuario no logueado
const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold',
}



const GreetingStyled = (props) => {
  
  // generamos un estado para el componente y controlamos si esta logged
  const [logged, setLogged] = useState(false);

  
  
  
  return (
    <div style={ logged ? loggedStyle : unloggedStyle }>
    { logged ? (<p>Hola, {props.name}. </p>) : (<p>Please login</p>)}
      
      <button onClick={ () => {
        console.log('Boton pulsado')
        setLogged(!logged);
      } }>
        {logged ? 'logout' : 'login'}
      </button>
    </div>
  );
}

export default GreetingStyled;
