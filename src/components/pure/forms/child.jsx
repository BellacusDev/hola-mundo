import React, { useRef } from 'react';


/**
 * 
 *  send: recibe una funcion del padre 
 *  
 */
const Child = ({ name, send, update }) => {

  const messageRef = useRef('');
  const nameRef = useRef('');
  
  function pressButton() {
    const text = messageRef.current.value;
    alert( `text in input: ${text}`);
  }

  function pressButonParams(text) {
    alert( `text: ${text}` );
  }

  function submitName(e) {
    /* impedimos que se recargue la pagina al enviar el formulario, para poder ver los cambios */
    e.preventDefault();
    update(nameRef.current.value)
  }

  return (
    <div>
      <p onMouseOver={() => console.log('on mouse over')}>Hello, {name}</p>
      <button onClick={pressButton}>Boton 1</button>
      
      {/* si no usamos funcion anonima para llamar a otra funcion con parametros, se ejecuta
      al cargar la pagina */}
      <button onClick={() => pressButonParams('hola') }>Boton 2</button>
      <input 
        placeholder=" Insert a text"
        onFocus={() => console.log('input focused')}
        onChange={(e) => console.log('input changed: ', e.target.value)}
        onCopy={() => console.log('copied text from input')}
        ref={ messageRef }
        >
        
      </input>
      <button onClick={() => send(messageRef.current.value)}>
        Send message
      </button>
      <div style={{marginTop: '20px', backgroundColor: 'gray'}}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder='New name'></input>
          <button type='submit'>Update name</button>
        </form>
      </div>
    </div>
  );
}

export default Child;
