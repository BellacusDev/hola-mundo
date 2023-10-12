/**
 * Ejemplo de uso de:
 * - usestate()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
  
  // Vamos a crear 2 contadores distintos
  // cada uno en un estado distinto
  const [contador1, setcontador1] = useState(0);
  const [contador2, setcontador2] = useState(0);
  
  // Creamos referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setcontador1(contador1 +1)
  }
  function incrementar2() {
    setcontador2(contador2 +1)
  }

  /* 
  trabajando con useEffect */

  /* 
  caso 1: Ejecutar SIEMPRE un snippet de código
          cada vez que hay un cambio en el estado del componente
          se ejecuta aquello que esté dentro del useEffect()
           */
  /* useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('mostrando referencia a elemento del DOM');
    console.log(miRef);
  }); */

  /* 
  Caso 2: Ejecutar SOLO CUANDO CAMBIE contador1
          cada vez que haga cambio en contador1, se ejecutara useEffect()
          en caso de que cambie contador2, no habra ejecucion de useEffect() */
  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('mostrando referencia a elemento del DOM');
    console.log(miRef);
  }, [contador1]);

  return (
    <div>
      <h1>Ejemplo useState(), useRef() y useEffect()</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
}

export default Ejemplo2;
