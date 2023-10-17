import React , { useState } from 'react';

/* estilo usuario logueado */
  const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
  };

  /* estilo usuario no logueado */
  const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
  }

/* login /logout elementos */
const LoginButton = ({loginAction, propStyle}) => {
    return <button style={propStyle} onClick={loginAction} >Login</button>
  }

function LogoutButton({logoutAction, propStyle}) {
    return (
      <button style={propStyle} onClick={logoutAction}>Logout</button>
      )
  }


const OptionalRender = () => {
  const [access, setAccess] = useState(true);
  const [nMessage, setnMessage] = useState(0);
  
  

  const loginAction = () => {
    setAccess(true);
  }
  
  const logoutAction = function ()  {setAccess(false);}


  let optionalButton;
  if (access) {
    optionalButton = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction} ></LogoutButton>
  } else {
    optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} ></LoginButton>
  }

  /* unread messages */
  let addMessages = () => {
    setnMessage(nMessage +1);
  }

  return (
    <div>
      { optionalButton } {/* boton opcional */}
      { nMessage === 1 && <p>You have {nMessage} message unread...</p> } {/* 1 mensaje no leidos*/}
      { nMessage > 1 && <p>You have {nMessage} messages unread...</p> } {/* numero de mensajes no leidos*/}
      { nMessage == 0 && <p>There are no new messages...</p>} {/* no hay mensajes no leidos */}
      <button onClick={addMessages}>Add New Message</button>
    </div>
  );
}

export default OptionalRender;
