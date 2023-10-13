/**
 * Ejemplo de componente tipo clase que dispone de los
 * metotos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente');
  }

  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default LifeCycleExample;
