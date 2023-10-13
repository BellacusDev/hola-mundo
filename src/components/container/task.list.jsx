import React, { useState } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.css'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  
  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);
  
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  
  
  /* const changeState = (id) => {
    console.log('TODO: cambiar estado de una tarea')
  } */
  
  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* card header (title) */}
          <div className='card-header p-3'>
            <h5>
              Your tasks:
            </h5>
          </div>
          {/* car body */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table>
              <thead>
                <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
              </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (<TaskComponent key={index} task={task} ></TaskComponent>)
                })}
              </tbody>
            </table>
            <TaskForm></TaskForm>
          </div>
        </div> 
      </div>
    </div>
  );
};


export default TaskListComponent;
