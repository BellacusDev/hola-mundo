import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  
  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);
  
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
    }, [tasks]
  )

  
  /* const changeState = (id) => {
    console.log('TODO: cambiar estado de una tarea')
  } */
  
  function completeTask(task) {

    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // actualizamos el estado del componente
    setTasks(tempTasks)
  }

  function deleteTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1)
    setTasks(tempTasks)
  }

  function addTask(task) {
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
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
          return (<TaskComponent 
                    key={index} 
                    task={task} 
                    complete={completeTask}
                    remove={deleteTask}>
                  </TaskComponent>)
        })}
      </tbody>
    </table>
    )
  }
  
  let tasksTable; 
  if (tasks.length > 0) {
    tasksTable = <Table></Table>
  } else {
    tasksTable = (
    <div>
      <h4>No tasks to display...</h4>
      <h6>Please, create one...</h6>
    </div> 
    )
  }
  
  const loadingStyle = {
    color: 'grey'
  }

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
            {/* TODO: agregar loading spinner */}
            {loading ? (<p style={loadingStyle}>Loading tasks...</p>) :tasksTable}
          </div>
        </div> 
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};


export default TaskListComponent;
