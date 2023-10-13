import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

/* importamos la hoja de estilos de task.scss */
import "../../styles/task.css";


function TaskComponent({ task }) {
  return (
    <div>
      <h2 className="task-name">
        Nombre: { task.name }
      </h2>
      <h3>
        Descipción: { task.description }
      </h3>
      <h4>
        Nivel: { task.level }
      </h4>
      <h5>
        This task is: { task.completed ? 'COMPLETED':'PENDING' }
      </h5>
    </div>
  );
}


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
