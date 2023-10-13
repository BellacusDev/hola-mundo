import logo from './logo.svg';
import './App.css';
import GreetingStyled from './components/pure/greetingStyled';
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */
/* import TaskListComponent from './components/container/task.list'; */
/* import Ejemplo4 from './hooks/ejemplo4'; */
/* import MiComponenteConContexto from './hooks/ejemplo3'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Sergio" />*/}
        {/* <GreetingF name="Sergio" ></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo4 nombre='Sergio'>
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <GreetingStyled name="Sergio"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
