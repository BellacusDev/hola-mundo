/* 
ejemplo Hooks:
- userState()
- userContext()
 */

import React, { useState, useContext } from 'react';


/**
 * Componente1
 * Dispone de un contexto que va a tener un valor
 * que recive desde el padre
*/
const miContexto = React.createContext(null)

const Componente1 = () => {

  // Inicializamos un estado vacio que va a rellenarse con los datos del contexto padre
  
  const state = useContext(miContexto);
  return (
    <div>
      <h1>
        El token es: {state.token}
      </h1>
      <Componente2></Componente2>
    </div>
  );
}

const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h2>
        la sesion es: {state.sesion}
      </h2>
    </div>
  );
}


export default function MiComponenteConContexto() {

  const estadoInicial = {
    token: '1234567',
    sesion: 1,
  }

  //creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);
  function actualizarSesion() {
    setSessionData(
      {
        token: 'GWT123456789',
        sesion: sessionData.sesion +1,
      }
    );
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* todo lo que esta aqui dentro puede leer los datos
      de sessionData. 
      ademas si se actualizan los componentes de aqio, tambien lo actulizan*/}
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion} >Actualizar Sesion</button>
    </miContexto.Provider>
  );
}






