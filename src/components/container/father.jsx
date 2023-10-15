import React, { useState } from 'react';
import Child from '../pure/forms/child';

const Father = () => {
  
  const [name, setName] = useState('Sergio');
  
  function showMessage(text) {
    alert(`Message received: ${text}`)
  }

  function updateName(newName) {
    setName(newName);
  }
  
  return (
    <div>
      {/* pasamos la funcion por el parametro send para que el hijo pueda ejecutarla */}
      <Child name={name} send={showMessage} update={updateName}></Child> 
    </div>
  );
}

export default Father;
