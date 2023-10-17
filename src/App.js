/* import logo from './logo.svg'; */
import './App.css';
import RegisterFormik from './components/pure/forms/registerFormik';
/* import LoginFormik from './components/pure/forms/loginFormik'; */
/* import OptionalRender from './components/pure/forms/optionalRender'; */
/* import GreetingStyled from './components/pure/greetingStyled'; */
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */
/* import TaskListComponent from './components/container/task.list'; */
/* import Father from './components/container/father'; */
/* import Ejemplo4 from './hooks/ejemplo4'; */
/* import MiComponenteConContexto from './hooks/ejemplo3'; */



function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*<Greeting name="Sergio" />*/}
        {/* <GreetingF name="Sergio" ></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo4 nombre='Sergio'>
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <GreetingStyled name="Sergio"></GreetingStyled> */}
        {/* <Father></Father> */}
        {/* ejemplos de renderizado condicionalS */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
