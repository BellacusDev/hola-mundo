import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.css'

const TaskListComponent = () => {
  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
  
  /* const changeState = (id) => {
    console.log('TODO: cambiar estado de una tarea')
  } */
  
  return (
    <div>
      <div>
        <h1>Your tasks:</h1> 
      </div>
      <TaskComponent task={defaultTask} ></TaskComponent>
    </div>
  );
};


export default TaskListComponent;
